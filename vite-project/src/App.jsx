import React, { Suspense } from 'react';
import config from './configuration/config.json';

const LazyMenu = React.lazy(() => import('./components/menu/Menu'));
const LazyProductList = React.lazy(() => import('./components/productList/ProductList'));
const LazyFooter = React.lazy(() => import('./components/footer/Footer'));

function App() {
  return (
    <div>
      {config.menu.enabled && (
        <Suspense fallback={<div>Loading Menu...</div>}>
          <LazyMenu backgroundColor={config.menu.backgroundColor} />
        </Suspense>
      )}
      {config.productList.enabled && (
        <Suspense fallback={<div>Loading Product List...</div>}>
          <LazyProductList layout={config.productList.layout} />
        </Suspense>
      )}
      {config.footer.enabled && (
        <Suspense fallback={<div>Loading Footer...</div>}>
          <LazyFooter
            textColor={config.footer.textColor}
            backgroundColor={config.footer.backgroundColor}
          />
        </Suspense>
      )}
    </div>
  );
}

export default App;