import React from "react"
import Shuffle from "./Shuffle"

const Home = () => {
  return (
    <div className="content-wrapper">
      <div className="content">
        <Shuffle text={"Thanks to visit my portal!"}/>
        <Shuffle text={"Press the menu in the upper right corner to open each page."}/>
        <Shuffle text={"-----------------------------------------------------------"}/>
        <br/>
        <Shuffle text={"HOME --> This page."}/>
        <br/>
        <Shuffle text={"PROFILE --> Get to know more about me!"}/>
        <br/>
        <Shuffle text={"BLOG --> My blog. I write about all sorts of things."}/>
        <br/>
        <Shuffle text={"PRODUCTS --> Here are some of the things I have made."}/>
        <br/>
        <Shuffle text={"HIT ME! --> Please contact me by email!"}/>
        <br/>
        <Shuffle text={"I'd be happy to check my instagram and GitHub. Push the icon!"}/>
        <br/>
        <Shuffle text={"-----------------------------------------------------------"}/>
      </div>
    </div>
  )
}

export default Home