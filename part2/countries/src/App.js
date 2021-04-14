import React, { useEffect, useState } from 'react'
import axios from 'axios'
import InputChange from './components/InputChange'
import DisplayCountries from './components/DisplayCountries'

const App = () => {
  const [ countries, setCountries ] = useState([]) 
  const [ newFilter, setNewFilter ] = useState('') 

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  },[])

  const handleNewFilter = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
  }

  const bclick = (country) => {
    setNewFilter(country)
  }

  return (
    <div> 
      <InputChange text='Find Countries: ' value={newFilter} onChange={handleNewFilter} />
      <DisplayCountries filter={newFilter} countryList={countries} bclick={bclick}/>
    </div>
  )
}

export default App