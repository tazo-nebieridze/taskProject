import React, { useState, useEffect } from 'react';
import { componentConfigs } from './configuration/config';



function DynamicComponent({ source, props }: { source: string; props: any }) {
  const [Component, setComponent] = useState<React.ComponentType<any> | null>(null);

  useEffect(() => {
    import(source).then((module) => {
      setComponent(() => module.default);
    });
  }, [source]);

  if (!Component) return <div>Loading...</div>;
  return <Component {...props} />;
}

const App = () => {
  return (
    <div>
      {componentConfigs
        .filter((config) => config.enabled)
        .map((config) => (
          <DynamicComponent
            key={config.key}
            source={config.source}
            props={config.props}
          />
        ))}
    </div>
  );
};

export default App;