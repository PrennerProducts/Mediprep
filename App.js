import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Logo from './components/Logo';
import { MEDIKAMENTE } from './data/mediList';

export default function App() {
  console.log(MEDIKAMENTE);
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


