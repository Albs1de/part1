import { useState } from 'react'

const handleSetGood = () => {
  good++
  setGood(good);

} 

const Statistics = (props) =>{
  if(props.good===0 && props.neutral===0 && props.bad===0)
  {
    return(
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
  return(
    <div>
      <h1>statistics</h1>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {props.good+props.neutral+props.bad}</p>
      <p> average {(props.good-props.bad)/(props.good+props.neutral+props.bad)}</p>
      <p>positive {props.good/(props.good+props.neutral+props.bad)*100} %</p> 
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
    <button onClick={()=>setGood(good+1)}>good</button>
    <button onClick={()=> setNeutral(neutral+1)}>neutral</button>
    <button onClick={()=> setBad(bad+1)}>bad</button>
    
    <Statistics good={good} neutral={neutral} bad={bad}/>

    </div>
  )
}

export default App