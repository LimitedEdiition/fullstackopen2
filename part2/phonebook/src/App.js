import React, { useState } from 'react'

const DisplayName = ({person}) => <div>{person.name} {person.number}</div>

const FilterPerson = ({persons, filter}) => {

  // No filters found
  if(filter.length === 0) {
    //console.log('No filter found')
    return <ul>
      {persons.map(person => <DisplayName key={person.id} person={person}/>)}
    </ul>
  }

  // Function found
  else {
    //console.log(`filter:  ${filter}`)
    let filteredPersons = persons.filter(newList => newList.name.toLowerCase().includes(filter.toLowerCase()))
    //console.log(filteredPersons)
    return <ul>
      {filteredPersons.map(person => <DisplayName key={person.id} person={person}/>)}
    </ul>
  }
}

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('') 

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
      <div>
        filter shown with: <input value={newFilter} onChange={handleNewFilter}/>
      </div>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        <FilterPerson persons = {persons} filter={newFilter}/>
      </div>
    </div>
  )
}

export default App