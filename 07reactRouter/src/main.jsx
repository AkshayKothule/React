import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Conatct/Conatct.jsx'
import User from './Components/User/User.jsx'
import Github ,{githubInfoLoader} from './Components/Github/Github.jsx'
 //frist method 
// const router=createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },{
//         path:"about",
//         element:<About/>
//       }
//       ,{
//         path:"contact",
//         element:<Contact/>
//       }
//     ]

//   }
// ])

//second Method

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user:/userid' element={<User/>}/>
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github/>}
      />

    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
