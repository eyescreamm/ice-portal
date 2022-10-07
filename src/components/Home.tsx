import React from "react"
import Shuffle from "./Shuffle"

const Home = () => {
  return (
    <div className="content-wrapper">
      <div className="content">
        <Shuffle className={"css-selector"} text={"Thanks to visit my portal!"}/>
        <Shuffle className={"css-selector"} text={"Press the menu button to open each page."}/>
        <Shuffle text={"----------------------------------------"}/>
        <Shuffle className={"menu-item"} text={"HOME"}/>
        <Shuffle text={"--> This page."}/>
        <br/>
        <Shuffle className={"menu-item"} text={"PROFILE"}/>
        <Shuffle text={"--> Get to know more about me!"}/>
        <br/>
        <Shuffle className={"menu-item"} text={"BLOG"}/>
        <Shuffle text={"--> My blog. I write about all sorts of things."}/>
        <br/>
        <Shuffle className={"menu-item"} text={"PRODUCTS"}/>
        <Shuffle text={"--> Here are some of the things I have made."}/>
        <br/>
        <Shuffle className={"menu-item"} text={"HIT ME!"}/>
        <Shuffle text={"--> Please contact me by email!"}/>
        <br/>
        <br/>
        <Shuffle text={"I'd be happy to check my instagram and GitHub."}/>
        <Shuffle text={"Push the icon!"}/>
        <br/>
        <Shuffle text={"----------------------------------------"}/>
      </div>
    </div>
  )
}

export default Home