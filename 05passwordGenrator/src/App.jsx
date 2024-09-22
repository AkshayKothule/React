import { useState , useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed , setnumberAllowed]=useState(false);
  const [charAllowed , setcharAllowed]=useState(true);
  const [password , setPassword]=useState("");

  //password genrator 
  const passwordGenrator=useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str +="0123456789";
    if(charAllowed) str +="!@#$%&*-_+=[]{}~`";

    for (let i = 0; i <=length; i++) {
      let char=Math.floor(Math.random()* str.length+1); //calculete random index 
      pass = str.charAt(char); //pick up char
      
    }

    setPassword(pass);
  } , [length , numberAllowed , charAllowed , setPassword]);
  return (
    <>
  <div className='w-full max-w-md mx-auto shadow-md  rounded-lg px-4 py-8 text-orange-500 bg-gray-500'>
    <h1 className='text-white text-center my-3'>Password Genrator</h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input 
      type="text"
      value={password}
      className='outline-none w-full py-1 px-3'
      placeholder='password'
      readOnly


      />
      <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
      >Copy</button>

    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range" 
        min={6}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e)=>{
          setLength(e.target.value)
        }}
        />
        <label>Length :{length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input 
        type="checkbox" 
       defaultChecked={numberAllowed}
       id='numberInput'

        onChange={()=>{
          setcharAllowed((prev)=> !prev)
        }}
        />
       <label htmlFor="nuberInput">Numbers</label>
      </div>

      <div className='flex items-center gap-x-1'>
        <input 
        type="checkbox" 
       defaultChecked={charAllowed}
       id='charInput'

        onChange={()=>{
          setnumberAllowed((prev)=> !prev)
          //revious false ho ga to onchange event  true  karte or true ho ga to flase 
        }}
        />
       <label htmlFor="numberInput">Characters</label>
      </div>

    </div>

  </div>
    </>
  )
}

export default App
