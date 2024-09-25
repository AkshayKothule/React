import React, { useState } from 'react'

import UserContext from '../Context/UserContext'
import { useContext } from 'react';

function Login() {
    const[UserName , setUserName]=useState('');
    const[Password , setPassword]=useState('');

    const {setUser}=useContext(UserContext);

    const handleSubmit=(e)=>{
        e.preventDefault();
        setUser(UserName , Password);

    }
  return (
    <div>
      <h2>Login</h2>
      <input type="text" 
      value={UserName}
      onChange={(e)=>setUserName(e.target.value)}
      placeholder='UserName' />
      
      <input type="text" 
      value={Password}
      onChange={(e)=>setPassword(e.target.value)}
      placeholder='Password' />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
