import React from 'react'

function Button({onClick, showAdd}) {
  return (
    <button 
    style={{backgroundColor:showAdd? "red": "green"}}
      className='btn'
      onClick={onClick}>{showAdd? "close": "Add"}</button>
  )
}

export default Button
