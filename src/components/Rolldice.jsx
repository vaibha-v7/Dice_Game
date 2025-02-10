import React, { useState } from 'react'
import './Rolldice.css'

const Rolldice = ({text,click,setScore,currentDice,setCurrentDice,getRandomNumber}) => {

  const[change,setChange]=useState(false)

  function handlechange(){
    setChange((prev)=> !prev)

  }
  

  return (
    <div>
        <div className='mid_box'>

            <img onClick={getRandomNumber} src={`/img/diceimg/dice_${currentDice}.png`} alt="" />
            <p>Click on Dice to roll</p>

            <div onClick={()=>setScore(0)} className='but'>
                Reset Score
            </div>
            <div  onClick={click} className='but2'>
                {text}
            </div>
        
        </div>
      
    </div>
  )
}

export default Rolldice
