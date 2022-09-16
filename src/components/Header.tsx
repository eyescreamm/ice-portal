import React from 'react'
import Menu from './Menu'
import Typewriter from 'typewriter-effect'

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
            typewriter.typeString("#####")
            .pauseFor(100)
            .typeString('.')
            .pauseFor(100)
            .typeString('.')
            .pauseFor(100)
            .typeString('.')
            .pauseFor(10000)
            .start()
          }}
        /> 
      </div>
      <nav>
        <Menu />
      </nav>
    </header>
  )
}

export default Header