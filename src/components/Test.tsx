import React, {useEffect, useState} from 'react'

const Test = ({text}): JSX.Element => {
  const [textCur, setTextCur] = useState("")
  const [display, setDisplay] = useState(false)

  const coverArrayBoolean = (coverArray: Array<boolean>): void => {

    // if not covered, cover it
    for (let i = 0; i < 2; i++) {
      // gen random index of 0 to text.length
      const randomNum = Math.floor(Math.random() * text.length)
      if (coverArray[randomNum] === false) {
        coverArray[randomNum] = true
        break
      }
    }
  }

  const isFilled = (covered: Array<boolean>): boolean => {
    return !covered.includes(false)
  }

  useEffect(() =>  {
    let changed = Array(text.length).fill(false)
    const sym = [",", ".", "/", "^", "¥", "*", "*", "_", "#", "$", "!", "&"]
    const love = setInterval(() => {

      if (isFilled(changed)) {
        clearInterval(love)
        return
      }

      for (let i = 0; i < 2; i++) {
        coverArrayBoolean(changed)
      }

      // gen random text
      const newText = text.split("").map((char, index) => {
        if (changed[index]) {
          return char
        } else {
          if (char === " ") {
            return " "
          }
          return sym[Math.floor(Math.random() * sym.length)]
        }
      })
      setTextCur(newText.join(""))
    }, 30)
    return () => clearInterval(love)
  }, [])


  return (
    <div>
      <div>{textCur}</div>
    </div>
  )
}

export default Test