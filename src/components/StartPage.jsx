import React from 'react'
import './StartPage.css'

const StartPage = (props) => {
  return (
    <div className='container'>
        <div className='img'>
            <img src="./img/dice.png" alt="" />
        </div>
        <div className='content'> 
            <div>DICE GAME</div>
            <button onClick={props.toggle}>Play Now</button>
        </div>
      
    </div>
  )
}

export default StartPage
