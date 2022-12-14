import { useState } from 'react'

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>


/* https://github.com/facebook/react/issues/5652 */
const StatisticLine = ({ text, counter }) => {
  return (
    <tbody>
    <tr> 
      <td>{text}</td> 
      <td>{counter}</td>
    </tr>
  </tbody>
  )
}

const Statistics = ( {good, neutral, bad} ) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return (<div> No feedback given </div>)
  }
  return (
    <table>
      <StatisticLine text="good" counter={good}/>
      <StatisticLine text="neutral" counter={neutral}/>
      <StatisticLine text="bad" counter={bad}/>
      <StatisticLine text="all" counter={good+neutral+bad}/>
      <StatisticLine text="average" counter={(good-bad)/(good+neutral+bad)}/>
      <StatisticLine text="positive" counter={(((good)/(good+neutral+bad))*(100))+"%"}/>
    </table>  
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const handleGoodClick = () => setGood(good + 1)
  
  const handleNeutralClick = () => setNeutral(neutral + 1)

  const handleBadClick = () => setBad(bad + 1)
  

  return (
    <div>
      <h2>Give feedback</h2>
      <Button onClick={handleGoodClick} text="Good"/>
      <Button onClick={handleNeutralClick} text="Neutral"/>
      <Button onClick={handleBadClick} text="Bad"/>
      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
