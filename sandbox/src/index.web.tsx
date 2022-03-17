import React from 'react';
import {AppRegistry} from 'react-native';
import RootApp from './App';

const App = () => <RootApp />;

AppRegistry.registerComponent('sandbox', () => RootApp);
AppRegistry.runApplication('sandbox', {
  rootTag: document.getElementById('root'),
});

export default App;
