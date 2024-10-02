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
        <a
          target="_blank"
          href="https://kind-bay-0b2244800.5.azurestaticapps.net/"
          rel="noreferrer"
        >
          <Shuffle
            className={'menu-item'}
            text={'# Cloud Synth (incomplete...)'}
          />
        </a>
        <Shuffle newLine={false} text={'github ->'} />
        <span>&nbsp;</span>
        <span>in private</span>
        <Shuffle text={'about -> TypeScript, React, MySQL, Node.js, Docker'} />
      </div>
    </div>
  );
};

export default Products;
