import { useState } from 'react'
import { Button } from './Button'
import { Statistics } from './Statistics'

export function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const buttonGroupStyle = {
    display: 'flex',
    gap: '4pt'
  }

  return (
    <div>
      <h1>Feedback</h1>
      <div style={buttonGroupStyle}>
        <Button text='Good' handleClick={() => setGood(good + 1)} />
        <Button text='Neutral' handleClick={() => setNeutral(neutral + 1)} />
        <Button text='Bad' handleClick={() => setBad(bad + 1)} />
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}
