import React from 'react';

export interface ProductListProps {
  layout: 'grid' | 'flex'; 
}

const ProductList: React.FC<ProductListProps> = ({ layout }) => {
  const style = layout === 'grid' ?
    { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' } :
    { display: 'flex' };

  return (
    <div style={style}>
      <div>Room 1</div>
      <div>Room 2</div>
      <div>Room 3</div>
      <div>Room 4</div>
    </div>
  );
};

export default ProductList;