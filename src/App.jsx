import { useState } from 'react'
import './App.css'
import AllPlayers from './components/AllPlayers'
import NavBar from './components/NavBar'
import NewPlayerForm from './components/NewPlayerForm'
import SinglePlayer from './components/SinglePlayer'
import {Routes, Route} from "react-router-dom"



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path='/' element={<AllPlayers/>} />
        <Route path='/player/:id' element={<SinglePlayer/>} />
        <Route path='/form' element={<NewPlayerForm/>} />
      </Routes>
    </div>   
    
  )
}

export default App
