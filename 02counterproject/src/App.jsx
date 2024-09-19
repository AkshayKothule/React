import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter=15;
  let [counter , setcounter]=useState(5);
const addValue=()=>{
// counter=counter+1;
setcounter(counter-1)

}

const removeValue=()=>{
  setcounter(counter-1);
}
  return (
    <>
      <h1>Chai Aur React</h1>   
      <h2>Counter value :{counter}</h2>
      <button onClick={addValue}>Add Value :{counter}</button>
     <br/>
      <button onClick={removeValue}>Remove Value :{counter}</button>
      <p>footer :{counter}</p>
    </>
  )
}

export default App
