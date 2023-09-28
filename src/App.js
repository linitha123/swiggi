import React from "react"
import '../index.css'
import Body from './Components/Body'
import Header from './Components/Header'
import { createBrowserRouter } from "react-router-dom";
import About from './Components/About'

export const appRouter = createBrowserRouter([
    {
        path:'/about',
        element:<About />
    }
])

function App(){

   
    return(
        <div>
           <Header />
          <Body />
         </div>
    )
}

export default App 