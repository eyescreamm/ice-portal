import React from 'react';
import { Link } from 'react-router-dom';
import Shuffle from './Shuffle';

const Products = () => {
  return (
    <div className="content-wrapper">
      <div className="content">
        <a target="_blank" href="https://ice-blog.vercel.app/" rel="noreferrer">
          <Shuffle className={'menu-item'} text={'# Personal blog'} />
        </a>
        <Shuffle text={'(TypeScript, React, Nextjs, GraphQL)'} />
      </div>
    </div>
  );
};

export default Products;
