import { useState } from 'react'

const StaticLine = (props) => <tr><td>{props.text}  {props.stats}</td></tr>

const Statistics = (props) => {

  if (props.total <= 0) {
    return <div><h1>statistics</h1> <p>No feedback given</p></div>
  }


  return (
    <table>
      <thead>
        <tr>
          <td> <h1>Statistic</h1></td>
        </tr>
      </thead>
      <tbody>
        <StaticLine text={"good"} stats={props.good} />
        <StaticLine text={"neutral"} stats={props.neutral} />
        <StaticLine text={"bad"} stats={props.bad} />
        <StaticLine text={"all"} stats={props.all} />
        <StaticLine text={"average"} stats={props.average} />
        <StaticLine text={"positive"} stats={props.postive + "%"} />
      </tbody>
    </table>
  )
}

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>







const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  let total = parseInt(good + neutral + bad);
  let average = (good * 1 + neutral * 0 + bad * -1) / total;
  let postive = good / total;
  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text={"Good"} />
      <Button onClick={() => setNeutral(neutral + 1)} text={"Neutral"} />
      <Button onClick={() => setBad(bad + 1)} text={"Bad"} />

      <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average} postive={postive} />

    </div>
  )
}

export default App