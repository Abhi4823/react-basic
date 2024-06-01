import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
    let [counter,setCounter]=useState(15)
    // let counter=5
     const addvalue=()=>{
    // counter=counter+1;
     setCounter(counter+1)
     }
     const removevalue=()=>{
      setCounter(counter-1)
     }
  return (
    <>
    <h1> chai or code</h1>
    <h2>counter value:{counter}</h2>
    <button
    onClick={addvalue}>Add value</button>
    <br />
    <button
    onClick={removevalue}>remvoe value</button>
    </>
  )
}

export default App
