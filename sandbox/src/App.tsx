import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Flag from '@markrabey/react-native-flags';

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Flag countryCode="CA" />
      </View>
    </SafeAreaView>
  );
};

export default App;
