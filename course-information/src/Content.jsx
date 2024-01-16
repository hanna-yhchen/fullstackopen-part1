function Part({ name, exercise }) {
  return (
    <p>
      {name} {exercise}
    </p>
  )
}

export function Content({ parts }) {
  return (
    <>
      <Part name={parts[0].name} exercise={parts[0].exercise} />
      <Part name={parts[1].name} exercise={parts[1].exercise} />
      <Part name={parts[2].name} exercise={parts[2].exercise} />
    </>
  )
}
