import React from "react"
import Menu from "./Menu"
import { Typewriter } from "react-simple-typewriter"

const Header = () => {
  return (
    <header>
      <div className="logo">
        <span style={{ fontFamily: "system-ui", fontWeight: "inherit" }}>
        <Typewriter
          words={['SYUTO YOSHIDA...', '...', '.......']}
          loop={0}
          cursor
          cursorStyle='|'
          typeSpeed={200}
          deleteSpeed={100}
          delaySpeed={10000}
        />
        </span>
      </div>
      <Menu />
    </header>
  )
}

export default Header