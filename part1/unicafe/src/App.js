import React, { useState } from 'react'

/*const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}*/

const Button = ({handleClick, text}) => <div><button onClick={handleClick}>{text}</button></div>

const Statistic = ({value}) => <div>{value}</div>

const Statistics = ({good, bad, neutral}) => {
  if((good === 0) && (bad === 0) && (neutral === 0)) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

  else{
    let total = good + bad + neutral
    let avg = (good + bad*-1)/total
    let pos = good/total
    return(
      <div>
        <table>
          <tbody>
            <tr>
              <td><Statistic value="Good"/></td>
              <td><Statistic value="Neutral"/></td>
              <td><Statistic value="Bad"/></td>
              <td><Statistic value="All"/></td>
              <td><Statistic value="Average"/></td>
              <td><Statistic value="Positive"/></td>
            </tr>
            <tr>
              <td><Statistic value={good}/></td>
              <td><Statistic value={neutral}/></td>
              <td><Statistic value={bad}/></td>
              <td><Statistic value={total}/></td>
              <td><Statistic value={avg}/></td>
              <td><Statistic value={pos}/></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const clickGood = () => setGood(good+1)
  const clickNeutral = () => setNeutral(neutral+1)
  const clickBad = () => setBad(bad+1)

  return (
    <div>
      Give Feedback
      <Button handleClick={clickGood} text='Good' />
      <Button handleClick={clickNeutral} text='Neutral' />
      <Button handleClick={clickBad} text='Bad' />
      Statistics
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App