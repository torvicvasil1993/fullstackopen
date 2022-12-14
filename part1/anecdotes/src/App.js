import { useState } from 'react'

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const Votes = ( {votes} ) => <div>has {votes} votes</div>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [arrVotes, setVotes] = useState(new Uint8Array(anecdotes.length))


  /* https://www.udacity.com/blog/2021/04/javascript-random-numbers.html#:~:text=Generating%20Javascript%20Random%20Numbers,it%20will%20never%20be%201. */

  const randomAnecdote = () => setSelected(Math.floor(Math.random() * anecdotes.length))
 
  const getVotes = () => {
    if (arrVotes.length === 0) {
      return 0;
    }
    return arrVotes[selected];
  }

  const handleVotes = () => {
    const copy = [...arrVotes]
    copy[selected] += 1 
    setVotes(copy)
  }

  const getMaxVoted = () => {
    /* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
    https://bobbyhadz.com/blog/javascript-get-index-of-max-value-in-array
     */
    let max = Math.max(...arrVotes);
    let index = arrVotes.indexOf(max);
    console.log(anecdotes[index])
    return anecdotes[index];
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <Votes votes={getVotes()} />
      <Button onClick={handleVotes} text="vote"/>
      <Button onClick={randomAnecdote} text="next anecdote"/>
      <h1>Anecdote with most votes</h1>
      <div>{getMaxVoted()}</div>

      
    </div>
  )
}

export default App
