import React from 'react';
import config from './configuration/config.json';
import Menu from './components/menu/Menu';
import ProductList from './components/productList/ProductList';
import Footer from './components/footer/Footer';

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