import React from 'react'
import Menu from './Menu'
import Typewriter from 'typewriter-effect'
import Nav from './Nav'

const Header = () => {
  return (
    <header>
      <div className="logo">
        <Typewriter
          options = {{
            autoStart: true,
            loop: true
          }}
          onInit = {(typewriter) => {
            typewriter.typeString("SYUTO YOSHIDA")
            .pauseFor(200)
            .typeString('.')
            .pauseFor(200)
            .typeString('.')
            .pauseFor(200)
            .typeString('.')
            .pauseFor(5000)
            .start()
          }}
        /> 
      </div>
      <nav>
        <Menu />
        <Nav />
      </nav>
    </header>
  )
}

export default Header