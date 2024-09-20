import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
function App() {
  const [count, setCount] = useState(0)
  const myobj={
    name:"Akshay",
    age :22
  }

  const mynew=[1 ,  2, 3,4,5];


  return (
    <>
      <h1 className='bg-green-400 text-black p-4rounded-xl mb-4'>Tailwind Test</h1>
      <Card username="AkKi" btnText="click me"/>
      <Card username="AkshayKothule" btnText="visit me"/>
    
    </>
  )
}

export default App
