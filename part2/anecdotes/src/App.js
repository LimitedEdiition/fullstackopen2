import React, { useState } from 'react'

const Button = ({text, onClick}) => <div><button onClick={onClick}>{text}</button></div>

const Display = ({text, num}) => <div>{text} has {num} votes</div>

const MostVotes=({votes, anecdotes}) => {
  let topPos = Math.max(...votes)
  //console.log(votes)
  if(topPos === 0) {
    return (<div>No Current Votes Registered</div>)
  }
  else{
    let indexOfMax = votes.indexOf(Math.max(...votes))
    let contentOfArray = anecdotes[indexOfMax]
    return <div>Anecdote With the Most Votes
      <div>{contentOfArray} which has {topPos} votes</div>
    </div>
  }
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVote] = useState(Array(anecdotes.length).fill(0))

  const genRandom = () => {
    let num = Math.floor(Math.random()*anecdotes.length)
    setSelected(num)
  }

  const incrementVote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVote(copy)
  } 

  return (
    <div>
      <div>
        Anecdote of the Day 
      </div>
      <Display text={anecdotes[selected]} num={votes[selected]}/>
      <Button onClick={genRandom} text="Next Anecdote"/>
      <Button onClick={incrementVote} text="Vote"/>
      <div>
        <MostVotes votes={votes} anecdotes={anecdotes}/>
      </div>
    </div>
  )
}

export default App