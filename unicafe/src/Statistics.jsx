function StatisticLine({ text, value }) {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

export function Statistics({ good, neutral, bad }) {
  const total = good + neutral + bad
  const average = (good - bad) / total
  const positive = good / total * 100

  if (total === 0) {
    return (
      <>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </>
    )
  }

  return (
    <>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <StatisticLine text='Good' value={good} />
          <StatisticLine text='Neutral' value={neutral} />
          <StatisticLine text='Bad' value={bad} />
          <StatisticLine text='All' value={total} />
          <StatisticLine text='Average' value={average} />
          <StatisticLine text='Positive' value={`${positive}%`} />
        </tbody>
      </table>
    </>
  )
}
