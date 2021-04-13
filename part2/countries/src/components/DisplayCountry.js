import DisplayList from './DisplayList'

const DisplayCountry = ({country}) => <div>
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

export default DisplayCountry