import React from "react"
import Menu from "./Menu"
import Typewriter from "typewriter-effect"

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
            .typeString(".")
            .pauseFor(200)
            .typeString(".")
            .pauseFor(200)
            .typeString(".")
            .pauseFor(5000)
            .start()
          }}
        /> 
      </div>
      <Menu />
    </header>
  )
}

export default Header