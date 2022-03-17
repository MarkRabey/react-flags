import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';

console.log({constants: Platform.constants});

const PlatformInfo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Platform</Text>
      <Text style={styles.text}>
        OS: <Text style={styles.strong}>{Platform.OS}</Text>
      </Text>
      <Text style={styles.text}>
        Version: <Text style={styles.strong}>{Platform.Version}</Text>
      </Text>
      <Text style={styles.text}>
        React Native Version:{' '}
        <Text style={styles.strong}>
          {Platform.constants.reactNativeVersion.major}.
          {Platform.constants.reactNativeVersion.minor}.
          {Platform.constants.reactNativeVersion.patch}
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fefefe',
    padding: 6,
    borderRadius: 6,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowColor: '#000',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  text: {fontSize: 16},
  strong: {fontWeight: 'bold'},
});

export default PlatformInfo;
