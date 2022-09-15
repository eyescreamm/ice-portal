import React from 'react'
import Menu from './Menu'

const Header = () => {
  return (
    <header>
      <div className="logo">ic_e</div>
      <Menu />
      <nav>
        <ul>
          <li>blog</li>
          <li>product</li>
          <li>me</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header