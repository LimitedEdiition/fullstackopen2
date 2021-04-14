import React from 'react'

const DisplayCountriesList =  ({list, bclick}) => {
    console.log(list)
    return <div>{list.name} <button onClick={() => bclick(list.name)}>Show</button>
    </div>
}

export default DisplayCountriesList