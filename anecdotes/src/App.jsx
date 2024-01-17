import { useState } from 'react'
import { Anecdote } from './Anecdote'
import { Button } from './Button'

export function App() {
  const [selected, setSelected] = useState(0)
  const [mostVotes, setMostVotes] = useState(0)
  const [anecdotes, setAnecdotes] = useState([
    {
      text: 'If it hurts, do it more often.',
      votes: 0
    },
    {
      text: 'Adding manpower to a late software project makes it later!',
      votes: 0
    },
    {
      text: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
      votes: 0
    },
    {
      text: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      votes: 0
    },
    {
      text: 'Premature optimization is the root of all evil.',
      votes: 0
    },
    {
      text: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
      votes: 0
    },
    {
      text: 'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
      votes: 0
    },
    {
      text: 'The only way to go fast, is to go well.',
      votes: 0
    }
  ])

  const randomIndex = () => {
    return Math.floor(Math.random() * anecdotes.length)
  }

  const handleClickVote = () => {
    const copy = [...anecdotes]
    copy[selected].votes += 1
    setAnecdotes(copy)
    if (copy[selected].votes > copy[mostVotes].votes) {
      setMostVotes(selected)
    }
  }

  const buttonGroupStyle = {
    display: 'flex',
    gap: '4pt'
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote
        text={anecdotes[selected].text}
        votes={anecdotes[selected].votes}
      />
      <div style={buttonGroupStyle}>
        <Button text='vote' handleClick={handleClickVote} />
        <Button text='next' handleClick={() => setSelected(randomIndex())} />
      </div>
      <h1>Anecdote with most votes</h1>
      <Anecdote
        text={anecdotes[mostVotes].text}
        votes={anecdotes[mostVotes].votes}
      />
    </div>
  )
}
