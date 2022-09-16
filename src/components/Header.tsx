import React from 'react'
import Menu from './Menu'

const Header = () => {
  return (
    <header>
      <div className="logo">ic_e</div>
      <nav>
        <Menu />
      </nav>
    </header>
  )
}

export default Header