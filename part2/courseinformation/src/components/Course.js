import Header from './Header'
import Content from './Content'
import React from 'react'
import Total from './Total'


const Course = ({course}) => <div>
  <Header header={course.name}/>
  <Content content={course.parts}/>
  <Total parts={course.parts}/>
</div>

export default Course