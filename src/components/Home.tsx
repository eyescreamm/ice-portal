import React from 'react'
import Test from './Test'
import Modelviewer from './Modelviewer'

const Home = () => {
  return (
    <div className="content-wrapper">
      <div className='content'>
        <Test text={"#################################################################"}/>
        <Test text={"-"}/>
        <Test text={"name -> syuto yoshida"}/>
        <Test text={"age  -> 22"}/>
        <Test text={"skill -> react, node.js, TypeScript, Next.js"}/>
        <Test text={"my best movie -> clock works of orage"}/>
        <Test text={"love -> music movie"}/>
        <Test text={'String name = "syuto yoshida"'}/>
        <Test text={"int age = 22"}/>
        <Test text={'String[] language = ["react", "node.js", "TypeScript", "Next.js"]'}/>
        <Test text={"my best movie -> clock works of orage"}/>
        <Test text={"love -> music movie"}/>
        <Test text={"-"}/>
        <Test text={"#################################################################"}/>
      </div>
    </div>
  )
}

export default Home