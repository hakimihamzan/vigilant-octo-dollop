import { useState } from 'react'

const Title = ({ title }) => {
  return (
    <h1>{title}</h1>
  )
}

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Feedback = ({ text, score }) => {
  return (
    <div>{text} {score}</div>
  )
}

const Average = ({ text, score }) => {
  return (
    <div>{text} {score}</div>
  )
}

const Result = ({ text, score }) => {
  if (score.good === 0 && score.neutral === 0 && score.bad === 0) {
    return <div>No feedback given</div>
  }
  
  const all = score.good + score.neutral + score.bad;
  const average = (score.good + score.neutral + score.bad) / 3;
  
  return (
    <>
      <Feedback score={score.good} text={text.good} />
      <Feedback score={score.neutral} text={text.neutral} />
      <Feedback score={score.bad} text={text.bad} />
      <Average score={all} text={'all'} />
      <Average score={average} text={'average'} />
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGoodFeedback = () => setGood(good + 1)
  const increaseNeutralFeedback = () => setNeutral(neutral + 1)
  const increasebadFeedback = () => setBad(bad + 1)

  const text = {
    good: 'good',
    neutral: 'neutral',
    bad: 'bad'
  }

  const score = {
    good: good,
    neutral: neutral,
    bad: bad
  }

  return (
    <>
      <Title title='Give Feedback' />
      <Button handleClick={increaseGoodFeedback} text='good' />
      <Button handleClick={increaseNeutralFeedback} text='neutral' />
      <Button handleClick={increasebadFeedback} text='bad' />

      <Title title='Statistics' />

      <Result text={text} score={score} />
    </>
  )
}

export default App