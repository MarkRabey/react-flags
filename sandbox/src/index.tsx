import React from 'react';
import {AppRegistry} from 'react-native';
import RootApp from './App';

const App = () => {
  return <RootApp />;
};

AppRegistry.registerComponent('sandbox', () => RootApp);

export default App;
