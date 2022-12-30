import React from 'react';
import Shuffle from './Shuffle';

const Products = () => {
  return (
    <div className="content-wrapper">
      <div className="content">
        <Shuffle className={'head css-selector'} text={'products'} />
        <Shuffle text={'------------'} />
        <a target="_blank" href="https://ice-blog.vercel.app/" rel="noreferrer">
          <Shuffle className={'menu-item'} text={'# Personal blog'} />
        </a>
        <Shuffle newLine={false} text={'github ->'} />
        <span>&nbsp;</span>
        <a
          target="_blank"
          href="https://github.com/eyescreamm/cms-blog"
          rel="noreferrer"
        >
          <Shuffle
            newLine={false}
            text={'https://github.com/eyescreamm/cms-blog'}
          />
        </a>
        <Shuffle text={'about -> TypeScript, React, Nextjs, GraphQL'} />
      </div>
    </div>
  );
};

export default Products;
