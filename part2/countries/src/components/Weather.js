import React from 'react'

const Weather = ({weather}) => {
    if(!weather) {
        return <div>Rendering</div>
    }

    else{
        return <div>
            <h1>Weather in {weather.location.name}</h1>
            <p>Temperature: {weather.current.temperature} Celcius</p>
            <img src={weather.current.weather_icons[0]} alt={weather.current.weather_descriptions[0]} />
            <p>Wind: {weather.current.wind_speed} mph Direction {weather.current.wind_dir}</p>
        </div>
    }
}


export default Weather