import React from 'react';

export interface FooterProps {
  textColor: string;
  backgroundColor: string;
}

const Footer: React.FC<FooterProps> = ({ textColor, backgroundColor }) => {
  return (
    <div style={{ color: textColor, padding: '10px', backgroundColor }}>
      <p>© 2025 Tourism Website</p>
    </div>
  );
};

export default Footer;