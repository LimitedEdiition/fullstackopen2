import React from 'react'
import Part from './Part'

const Content = ({content}) => <div>
  {content.map(part=> 
    <Part key={part.id} part={part}/>)}
</div>

export default Content