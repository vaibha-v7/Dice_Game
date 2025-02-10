import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StartPage from './components/StartPage'
import Game from './components/Game'
import Score from './components/Score'

function App() {

  const [isGameon,setGameon]=useState(false);

  function toggleGamePlay(){
    setGameon( (prev) => !prev)
  }
  

  return (
    <>
      
      {isGameon ?<Game/> : <StartPage toggle={toggleGamePlay}/> }
      

      
      
      
    </>
  )
}

export default App
