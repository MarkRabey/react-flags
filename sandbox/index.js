import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import('./src/index').then(({default: App}) => {
  AppRegistry.registerComponent(appName, () => App);
});
