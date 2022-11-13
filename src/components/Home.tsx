import React from 'react';
import { Link } from 'react-router-dom';
import Shuffle from './Shuffle';

const Home = () => {
  return (
    <div className="content-wrapper">
      <div className="content">
        <Shuffle
          className={'css-selector'}
          text={'Thanks to visit my portal!'}
        />
        <Shuffle
          className={'css-selector'}
          text={'Press the menu button to open each page.'}
        />
        <Shuffle text={'----------------------------------------'} />
        <Link to="/">
          <Shuffle className={'menu-item'} text={'HOME'} />
        </Link>
        <Shuffle text={'--> This page.'} />
        <br />
        <Link to="/profile">
          <Shuffle className={'menu-item'} text={'PROFILE'} />
        </Link>
        <Shuffle text={'--> Get to know more about me!'} />
        <br />
        <Link to="/products">
          <Shuffle className={'menu-item'} text={'PRODUCTS'} />
        </Link>
        <Shuffle text={'--> Here are some of the things I have made.'} />
        <br />
        <a target="_blank" href="https://ice-blog.vercel.app/" rel="noreferrer">
          <Shuffle className={'menu-item'} text={'BLOG'} />
        </a>
        <Shuffle text={'--> My blog. I write about all sorts of things.'} />
        <br />
        <a href="mailto:icecream.rmn&#64;gmail.com">
          <Shuffle className={'menu-item'} text={'HIT ME!'} />
        </a>
        <Shuffle text={'--> Please contact me by email!'} />
        <br />
        <br />
        <Shuffle text={"I'd be happy to check my instagram and GitHub."} />
        <Shuffle text={'Push the icon!'} />
        <br />
        <Shuffle text={'----------------------------------------'} />
      </div>
    </div>
  );
};

export default Home;
