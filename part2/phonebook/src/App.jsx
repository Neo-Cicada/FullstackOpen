import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [search, setSearch] = useState('')
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