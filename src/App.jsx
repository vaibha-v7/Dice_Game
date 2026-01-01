import { useState } from 'react'
import './App.css'
import StartPage from './components/StartPage'
import Game from './components/Game'

function App() {

  const [isGameon,setGameon]=useState(false);

  function toggleGamePlay(){
    setGameon( (prev) => !prev)
  }
  

  return (
    <div className="app-shell">
      {isGameon ? <Game /> : <StartPage toggle={toggleGamePlay} />}
    </div>
  )
}

export default App
