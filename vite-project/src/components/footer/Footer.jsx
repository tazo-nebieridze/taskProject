import React from 'react';

const Footer = ({ textColor, backgroundColor }) => {
  return (
    <div 
      style={{
         color: textColor, padding: '10px',
         backgroundColor: backgroundColor 
        }}>
      <p>© 2025 Tourism Website</p>
    </div>
  );
};

export default Footer;