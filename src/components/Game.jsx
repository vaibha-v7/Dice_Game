import React, { useState } from 'react'
import './Game.css'
import Score from './Score'
import Numsel from './Numsel'
import Rolldice from './Rolldice'
import Rules from './Rules'


const Game = () => {
  
  const[score,setScore]=useState(0);
  const[selNum,setSelNum]=useState(null)
  const [currentDice,setCurrentDice]=useState(1)
  const[error,setError]=useState("")
  const[ruleon,setRuleon]=useState(false)

  
  function getRandomNumber() {
    const num= Math.floor(Math.random() * 6) + 1;
    if(selNum==null){
      setError("You have not selected any number")
      return
    }                                         //guard clause
    setError(null)


    console.log(num);
    setCurrentDice(num);

    if(selNum==num){
      
      setScore((prev)=>prev-1)
    }
    else{
      
      setScore((prev)=>prev+num)
    }

    console.log("prev score"+ score)
    setSelNum(null)
    
  }

  function handleclick(event){
    
    const clickedNum=event.target.innerText;
    setSelNum(clickedNum);
  }


    
    
  function handelh1(){
    setSelNum(null)
  }

  function handlerules(){
    setRuleon((prev)=> !prev);
    console.log(ruleon)
    
    
  }
  
  
  return (
    
    <div >
      <div className='top_sec'>
        <div>
          <Score score={score}/>
        </div>

        <div className='numsel_section'>
          <Numsel error={error} click={handleclick} selectedNum={selNum}/>
          <h1 onClick={handelh1}>Select Number</h1>
        </div>
      </div>

      <Rolldice text="Show Rules" click={handlerules} setScore={setScore} currentDice={currentDice} setCurrentDice={setCurrentDice} getRandomNumber={getRandomNumber} />

      {
        ruleon? <Rules/> : ""
      }
      

      
    </div>
  )
}

export default Game
