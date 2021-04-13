import React, { useEffect, useState } from 'react'
import InputChange from './components/InputChange'
import FilterPerson from './components/FilterPerson'
import PersonForm from './components/PersonForm'
import axios from 'axios'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('') 

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  },[])

  const addPerson = (event) => {
    const nameList = persons.map(llama => llama.name)
    console.log(nameList)
    event.preventDefault()

    // If Duplicate is Found 
    if(nameList.indexOf(newName) > -1) {
      window.alert(`${newName} is already added to phonebook`)
      setNewName('')
      setNewNumber('')
    }

    else {
      const personObject = {
        name: newName,
        number: newNumber,
        id: persons.length + 1,
        date: new Date().toISOString(),
      }

      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
    
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleNewFilter = (event) => {
    //console.log(event.target.value)
    setNewFilter(event.target.value)
  }

  return (
    <div> 
      <h2>Phonebook</h2>
      <InputChange text='Filter Shown With: ' value={newFilter} onChange={handleNewFilter} />
      <h2>Add a New Person</h2>
      <PersonForm onSubmit={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber}
        handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <div>
        <FilterPerson persons = {persons} filter={newFilter}/>
      </div>
    </div>
  )
}

export default App