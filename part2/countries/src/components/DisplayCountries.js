import React, { useEffect, useState } from 'react'
import DisplayCountry from './DisplayCountry'
import DisplayCountriesList from './DisplayCountriesList'

const DisplayCountries = ({filter,countryList,bclick}) => {

  // No filters found
  if(filter.length === 0) {
    //console.log('No filter found')
    return <div>Enter a Country! </div>
  }

  // Filter found
  else {
    let filteredCountries = countryList.filter(newList => newList.name.toLowerCase().includes(filter.toLowerCase()))
    //console.log(filteredCountries)
    //console.log(filteredCountries.length)
    // Countries greater than 10
    if(filteredCountries.length > 10) {
      return <div>Too many matches! Specify or change the filter.</div>
    }

    // More than 1 country but less than 10
    else if(filteredCountries.length > 1) {
      return <ul>
        {filteredCountries.map(country => <DisplayCountriesList key={country.alpha3Code} list={country} bclick={bclick}/>)}
      </ul>
    }

    // 1 country found
    else if(filteredCountries.length === 1) {
      //console.log(filteredCountries)
      //let capital = filteredCountries.map(city => city.capital)
      //console.log(`capital is ${capital}`)
      //setCity(capital)
      return filteredCountries.map(country => <DisplayCountry key={country.alpha3Code} country={country}/>)
      //return <DisplayCountry country={country} />
    }

    else {
      return <div>No Match Found!</div>
    }
  }

}

export default DisplayCountries