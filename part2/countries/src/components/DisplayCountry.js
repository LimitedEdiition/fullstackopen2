import React, { useState, useEffect } from "react"
import axios from "axios"
import DisplayList from './DisplayList'
import Weather from './Weather'

const DisplayCountry = ({country}) => {
    const [ weather, setWeather ] = useState(null)
    const capital = country.capital
    //const api_key = process.env.REACT_APP_API_KEY Cant put this here!!

    useEffect(() => {
        const api_key = process.env.REACT_APP_API_KEY
        axios
            .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${capital}`)
            .then(response => {
                setWeather(response.data)
            })
    },[capital])

    return <div>
        <h1>{country.name}</h1>
        <div>
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population}</p>
        </div>
        <h2>Languages</h2>
        <div>
            <ul>
                {country.languages.map(language => <DisplayList key={language.iso639_2} list={language}/>)}
            </ul>
        </div>
        <div>
            <img style={{maxWidth: '150px'}} src={country.flag} alt={`${country.name} flag`}/>
        </div>

        <Weather weather={weather} />

    </div>
    
}

export default DisplayCountry




/*<div>
    <h1>{country.name}</h1>
    <div>
        <p>Capital: {country.capital}</p>
        <p>Population: {country.population}</p>
    </div>
    <h2>Languages</h2>
    <div>
        <ul>
            {country.languages.map(language => <DisplayList key={language.iso639_2} list={language}/>)}
        </ul>
    </div>
    <div>
        <img style={{maxWidth: '150px'}} src={country.flag} alt={`${country.name} flag`}/>
    </div>
</div>

export default DisplayCountry*/