import React from 'react';
import { Link } from 'react-router-dom';
import Shuffle from './Shuffle';

const Products = () => {
  return (
    <div className="content-wrapper">
      <div className="content">
        <Link to="https://ice-blog.vercel.app/">
          <Shuffle text={'# Personal blog'} />
        </Link>
        <Shuffle text={'(TypeScript, React, Nextjs, GraphQL)'} />
      </div>
    </div>
  );
};

export default Products;
