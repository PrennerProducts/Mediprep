import React from 'react';
import { StyleSheet, View } from 'react-native';
import { modelsTests } from './models/ModelsTests';

import Logo from './components/Logo';




export default function App() {
  
  modelsTests.test();

  return (
    <View style={styles.container}>
      <Logo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#032e5b',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
