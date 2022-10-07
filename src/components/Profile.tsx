import React from 'react'
import Shuffle from './Shuffle'

const Profile = () => {
  return (
    <div className="content-wrapper">
      <div className="content">
        <Shuffle className={"head"} text={"profile"}/>
        <Shuffle className={"head"} text={"-------"}/>
        <Shuffle className={"prof-item"} text={"# name"}/>
        <Shuffle text={"-> Syuto Yoshida || ic__e"}/>
        <Shuffle className={"prof-item"} text={"# age"}/>
        <Shuffle text={"-> 22 (1999)"}/>
        <Shuffle className={"prof-item"} text={"# computer skill"}/>
        <Shuffle text={"-> JavaScript (React, Node.js, TypeScript, jQuery)"}/>
        <Shuffle text={"-> java (SpringBoot)"}/>
        <Shuffle text={"-> MATLAB"}/>
        <Shuffle text={"-> PureData"}/>
        <Shuffle className={"prof-item"} text={"# my research"}/>
        <Shuffle text={"-> Development of a psychoacoustic roughness"}/>
        <Shuffle text={"prediction model using machine learning"} />
        <Shuffle className={"prof-item"} text={"# interest"}/>
        <Shuffle text={"-> music"}/>
        <Shuffle text={"-> movie"}/>
        <Shuffle text={"-> clothes"}/>
        <Shuffle text={"-> technology (machine learning)"}/>
        <Shuffle text={"-> spirit, occult, spiritual"}/>
      </div>
    </div>
  )
}

export default Profile