import React from 'react'
import Button from './Button'

function Header({showTask, showAdd}) {






  return (
    <header className="header">
      <h1>Task Tracker App</h1>
      <Button onClick={showTask} showAdd={showAdd}/>
    </header>
  )
}

export default Header
