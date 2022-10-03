import React from "react"
import Shuffle from "./Shuffle"

const Home = () => {
  return (
    <div className="content-wrapper">
      <div className="content">
        <Shuffle text={"#####"}/>
        <Shuffle text={"name -> Syuto Yoshida"}/>
        <Shuffle text={"age  -> 22"}/>
        <Shuffle text={"skill -> JavaScript(react, node.js, TypeScript, Next.js)"}/>
        <Shuffle text={"my best movie -> sonatine"}/>
        <Shuffle text={"love -> music movie"}/>
        <Shuffle text={"#####"}/>
      </div>
    </div>
  )
}

export default Home