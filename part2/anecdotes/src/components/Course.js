import Header from './Header'
import Content from './Content'
import React from 'react'

const Total = ({parts}) => {
  const exArray = parts.map(num => num.exercises)
  let total = exArray.reduce((accumulator, currentValue) => accumulator + currentValue,0)
  return <div>Total of {total} exercises</div>
}

const Course = ({course}) => <div>
  <Header header={course.name}/>
  <Content content={course.parts}/>
  <Total parts={course.parts}/>
</div>

export default Course