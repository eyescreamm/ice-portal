import React from 'react';

const Footer = () => {
  const today = new Date();
  return (
    <div className="footer">
      <p>love.</p>
      <p>Copyright©{today.getFullYear()} ic__e</p>
    </div>
  );
};

export default Footer;
