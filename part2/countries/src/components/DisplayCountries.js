import React from 'react'
import DisplayList from './DisplayList'
import DisplayCountry from './DisplayCountry'

const DisplayCountries = ({filter,countryList}) => {

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
        {filteredCountries.map(country => <DisplayList key={country.alpha3Code} list={country}/>)}
      </ul>
    }

    // 1 country found
    else{
      console.log(filteredCountries)
      return filteredCountries.map(country => <DisplayCountry key={country.alpha3Code} country={country}/>)
      //return <DisplayCountry country={country} />
    }
  }

}

export default DisplayCountries