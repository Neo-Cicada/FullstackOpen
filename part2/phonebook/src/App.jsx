import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'
const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [search, setSearch] = useState('')
  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then(response => setPersons(response.data))
  }, [])
  const onSubmit = (e) => {
    e.preventDefault();

    const condition = persons.map(item => item.name).includes(newName)
    if (condition) {
      alert(`${newName} is already added to phonebook`)

    } else {
      persons.push({ name: newName, number: phoneNumber, id: persons.length + 1 })
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