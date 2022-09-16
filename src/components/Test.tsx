import React, {useEffect, useState} from 'react'

const Test = ({text}): JSX.Element => {
  const [content, setContent] = useState('love cat! love dog!')
  const [textCur, setTextCur] = React.useState("")

  const coverArrayBoolean = (coverArray: Array<boolean>): void => {
    if (coverArray.length > 128) {
      // fill with true
      for (let i = 0; i < coverArray.length; i++) {
        coverArray[i] = true
      }
      return
    }

    // if not covered, cover it
    for (let i = 0; i < 1; i++) {
      // gen random index of 0 to text.length
      const randomNum = Math.floor(Math.random() * text.length)
      if (coverArray[randomNum] === false) {
        coverArray[randomNum] = true
        break
      }
    }
  }

  const IsCharJapaneseOrEmoji = (char: string): boolean => {
    const charCode = char.charCodeAt(0)
    return (charCode >= 0x3040 && charCode <= 0x30FF) || (charCode >= 0x31F0 && charCode <= 0x31FF)
  }

  const isFilled = (covered: Array<boolean>): boolean => {
    return !covered.includes(false)
  }

const addCat= () => {
  let cat = content
  let element = ''
  for (let index = 0; index < cat.length; index++) {
    element += '*'
  }
  cat += 'cat'
  setContent(element)
}

useEffect(() =>  {
  let covered = Array(text.length).fill(false)
  console.log(covered)
  const id = setInterval(() => {

    if (isFilled(covered)) {
      clearInterval(id)
      return
    }

    for (let i = 0; i < 3; i++) {
      coverArrayBoolean(covered)
    }

    // gen random text
    const newText = text.split("").map((char, index) => {
      if (covered[index]) {
        return char
      } else {
        if (char == " ") {
          return " "
        }
        return IsCharJapaneseOrEmoji(char) ? "＊" : "-"
      }
    })
    setTextCur(newText.join(""))
  }, 1000/60)
  return () => clearInterval(id)
}, [])


  return (
    <div>
      <div>{textCur}</div>
    </div>
  )
}

export default Test