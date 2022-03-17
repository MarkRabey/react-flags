import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Flag from '@markrabey/react-native-web-flags';

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Flag />
      </View>
    </SafeAreaView>
  );
};

export default App;
