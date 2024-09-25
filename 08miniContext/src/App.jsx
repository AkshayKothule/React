import { useState } from 'react'

import UserContextProvider from './Context/UserContextProvider'
import Login from './Components/Login'
import Profile from './Components/Profile'

function App() {
  

  return (
    <UserContextProvider>
      <h1>This is React App And Share Important Topic </h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
