import React from "react"
import './App.css'
import Home from './Home/Home'
import About from './About/About.js'
import My_work from './My_work/My_work'

const App=()=>{
    return(
        <div className="main">
            <Home/>
            <About/>
            <My_work/>
         </div>
            
    
        )
}



export default App

