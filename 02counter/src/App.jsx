import { useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] =  useState(0)
  
  const addValue = () => {
    if(counter< 20)
    {
      counter += 1
      setCounter(counter)
    }
  }

  const RemoveValue = () => {
    if(counter > 0)
    {
    counter -= 1
    setCounter(counter)
    }
  }

  const ResetValue = () => {
    counter =0
    setCounter(counter)
  }

  return (
    <>
     <h1> Chai aur react</h1>
     <h2>Conter Value: {counter}</h2>
     <button onClick={addValue}>Add Value</button>
     <br/>
     <button onClick={RemoveValue}>Remove Value</button>
     <br/>
     <button onClick={ResetValue}>Reset Value</button>
    </>
  )
}

export default App
