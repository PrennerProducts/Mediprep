import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Logo from './components/Logo';

export default function App() {
  return (
    <View style={styles.container}>
      <Logo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
