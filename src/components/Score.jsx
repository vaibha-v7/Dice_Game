import './Score.css'

import React from 'react'

const Score = (props) => {
  return (
    <div className='container2'>
        <div className='digit1'>
            {props.score}
        </div>

        <div className='score1'>
            Total Score
        </div>
    </div>
  )
}

export default Score
