import React from 'react'
import './Rules.css'

const Rules = (props) => {
  return (
    <div className='ruleblock'>
        <div onClick={props.click} className='rulebook'>
            
            <h1>How to play dice game</h1>
            <h2> -&gt;  Select any number</h2>
            <h2> -&gt;  Click on dice image</h2>
            <h2> -&gt;  If the number you selected matches the number on dice your score will be deducted by 1</h2>
            <h2> -&gt;  If the number does not match with number on dice your score will inc. by number on dice</h2>

            


        </div>
      
    </div>
  )
}

export default Rules
