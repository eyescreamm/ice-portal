import React from 'react'
import Typewriter from 'typewriter-effect'

const Typewrite = (text)  => {
  return (
    <Typewriter
        options={{
          delay: 1,
          deleteSpeed: 1,
          autoStart: true,
          cursor: ''
        }}
        onInit={(typewriter) => {
          typewriter.typeString("Line 74:4:   React Hook useEffect has missing dependencies: 'coverArrayBoolean' and 'text.")
          .start()
        }}
      />
  )
}

export default Typewrite