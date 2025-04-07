import React from 'react';

interface MenuProps {
  backgroundColor: string;
}

const Menu: React.FC<MenuProps> = ({ backgroundColor }) => {
  return (
    <div style={{ backgroundColor, padding: '10px' }}>
      <h2>Hotel Menu</h2>
    </div>
  );
};

export default Menu;