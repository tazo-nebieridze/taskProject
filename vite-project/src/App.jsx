import React from 'react';
import config from './configuration/config.json';
import Menu from './menu/Menu';
import ProductList from './productList/ProductList';
import Footer from './footer/Footer';

function App() {
  return (
    <div>
      {
        config.menu.enabled &&
          <Menu 
            backgroundColor={config.menu.backgroundColor}
          />
      }
      {
        config.productList.enabled &&
          <ProductList
            layout={config.productList.layout} 
          />
      }
      {
       config.footer.enabled &&
        <Footer
          textColor={config.footer.textColor}
          backgroundColor={config.footer.backgroundColor} 
        />
      }
    </div>
  );
}

export default App; 