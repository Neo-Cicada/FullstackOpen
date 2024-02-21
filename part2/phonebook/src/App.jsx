import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'
import phoneBook from './service/phoneBook'
const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [search, setSearch] = useState('')
  useEffect(() => {
    phoneBook
      .getItems()
      .then(response => setPersons(response.data))
  }, [persons])
  const onSubmit = (e) => {
    e.preventDefault();

    const existingPerson = persons.find(person => person.name === newName)
    console.log(existingPerson)
    if (existingPerson) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        phoneBook.updateItem(existingPerson.id, { name: newName, number: phoneNumber })
      }

    } else {
      phoneBook.postItem({ name: newName, number: phoneNumber })
    }
    setNewName("")
    setPhoneNumber("")
  }
  return (
    <div>
      <h2>Phonebook</h2>

      <Filter search={search} setSearch={setSearch} />

      <h2>add a new</h2>
      <PersonForm
        onSubmit={onSubmit}
        newName={newName}
        setNewName={setNewName}
        phoneNumber={phoneNumber}
        setPhoneNumber={setPhoneNumber} />
      <h2>Numbers</h2>
      <Persons persons={persons} search={search} />
    </div>
  )
}

export default App