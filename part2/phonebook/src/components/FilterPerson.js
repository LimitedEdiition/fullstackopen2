import React from 'react'
import DisplayName from './DisplayName'


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

export default FilterPerson