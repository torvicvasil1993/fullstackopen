import { useState } from 'react'

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const Display = ({ text, counter }) => <div> {text} {counter}</div>


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
      <Display text="good" counter={good}/>
      <Display text="neutral" counter={neutral}/>
      <Display text="bad" counter={bad}/>
      <Display text="all" counter={good+neutral+bad}/>
      <Display text="average" counter={(good-bad)/(good+neutral+bad)}/>
      <Display text="positive" counter={(((good)/(good+neutral+bad))*(100))+"%"}/>

    </div>
  )
}

export default App
