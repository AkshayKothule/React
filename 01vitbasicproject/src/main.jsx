import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
function MyApp(){

  return(
  
   <h1>Custom App |AK</h1>
  
)
  
}

const another=(
  <a href='https://google.com' target='_blank'>Visit Google</a>
  
)
createRoot(document.getElementById('root'))
.render(
  
    // <MyApp/>
    another
  
)
