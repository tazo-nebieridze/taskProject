import React, { Suspense } from 'react';
import { componentConfigs } from './configuration/config';

interface LazyComponentConfig {
  key: string;
  Component: React.LazyExoticComponent<React.ComponentType<any>>;
  props: any;
}

const lazyComponents: LazyComponentConfig[] = componentConfigs
  .filter(config => config.enabled)
  .map(config => ({
    key: config.key,
    Component: React.lazy(() => import(config.source)),
    props: config.props
  }));

const App = () => {
  return (
    <div>
      {lazyComponents.map(({ key, Component, props }) => (
        <Suspense key={key} fallback={<div>Loading {key}...</div>}>
          <Component {...props} />
        </Suspense>
      ))}
    </div>
  );
};

export default App;