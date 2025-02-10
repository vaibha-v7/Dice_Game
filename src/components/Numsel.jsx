import React, { useState } from 'react'
import './Numsel.css'

const Numsel = ({error,click,selectedNum}) => {
  
  return (
    <div >

      <p>{error}</p>

      <div className='bar'>
      <div onClick={click} id='1' className={`box ${selectedNum==='1' ? 'selected' : '' }`}> 1</div>
      <div onClick={click} id='2' className={`box ${selectedNum==='2' ? 'selected' : '' }`}> 2</div>
      <div onClick={click} id='3' className={`box ${selectedNum==='3' ? 'selected' : '' }`}> 3</div>
      <div onClick={click} id='4' className={`box ${selectedNum==='4' ? 'selected' : '' }`}> 4</div>
      <div onClick={click} id='5' className={`box ${selectedNum==='5' ? 'selected' : '' }`}> 5</div>
      <div onClick={click} id='6' className={`box ${selectedNum==='6' ? 'selected' : '' }`}> 6</div>
      </div>
      
      
      
      
    </div>
  )
}

export default Numsel
