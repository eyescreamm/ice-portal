import React, { useState } from 'react'
import Shuffle from './Shuffle'

const Profile = () => {
  const [active, setActive] = useState(false)
  return (
    <div className="content-wrapper">
      <div className="content">
        <Shuffle className={"head css-selector"} text={"profile"}/>
        <Shuffle className={"head"} text={"-------"}/>
        <Shuffle className={"prof-item"} text={"# name"}/>
        <Shuffle text={"-> Syuto Yoshida || ic__e"}/>
        <Shuffle className={"prof-item"} text={"# age"}/>
        <Shuffle text={"-> 22 (1999th)"}/>
        <Shuffle className={"prof-item"} text={"# computer skill"}/>
        <Shuffle text={"-> JavaScript"}/> 
        <span>&nbsp;&nbsp;&nbsp;</span><Shuffle text={"(React, Node.js, TypeScript, jQuery)"} newLine={false}/>
        <Shuffle text={"-> java (SpringBoot)"}/>
        <Shuffle text={"-> MATLAB"}/>
        <Shuffle text={"-> PureData"}/>
        <Shuffle className={"prof-item"} text={"# my research"}/>
        <Shuffle text={"-> Development of a psychoacoustic roughness"}/>
        <span>&nbsp;&nbsp;&nbsp;</span>
        <Shuffle text={"prediction model using machine learning"} newLine={false} />
        <Shuffle className={"prof-item"} text={"# interest"}/>
        <Shuffle text={"-> music"}/>
        <Shuffle text={"-> movie"}/>
        <Shuffle text={"-> clothes"}/>
        <Shuffle text={"-> technology (machine learning)"}/>
        <Shuffle text={"-> spiritual"}/>
        <button className="others-button" onClick={ () => setActive(!active)}><Shuffle className={"prof-item"} text={"# others "}/></button>
        <span>&nbsp;&nbsp;&lt;</span>
        <Shuffle text={"- click to get more info"} newLine={false}/>
        <div className={active ? "" : "others-none"}>
          <Shuffle className={"sub-prof-item"} text={"## my loving music"}/>
          <Shuffle text={"-> A Day in the Life / The Beatles"}/>
          <Shuffle className={"sub-prof-item"} text={"## my loving movies"}/>
          <Shuffle text={"-> Eyes Wide Shut / Stanley Kubrick"}/>
          <Shuffle text={"-> Sonatine / Takeshi Kitano"}/>
          <Shuffle className={"sub-prof-item"} text={"## school days' Dream"}/>
          <Shuffle text={"-> manga artist || baseball player"}/>
          <Shuffle className={"sub-prof-item"} text={"## current Dream"}/>
          <Shuffle text={"-> become 'someone' && produce a lot"}/>
          <Shuffle className={"sub-prof-item"} text={"## motto"}/>
          <Shuffle text={"-> life with love!"}/>
        </div>
      </div>
    </div>
  )
}

export default Profile