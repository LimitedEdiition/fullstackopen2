import React from 'react'

const Total = ({parts}) => {
    const exArray = parts.map(num => num.exercises)
    let total = exArray.reduce((accumulator, currentValue) => accumulator + currentValue,0)
    return <div>Total of {total} exercises</div>
}

export default Total

