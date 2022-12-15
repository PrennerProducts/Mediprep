import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { modelsTests } from './models/ModelsTests';
import Tablettenbox from './components/Tablettenbox';
import Logo from './components/Logo';
import { useState } from 'react';
import ForwardButton from './components/ForwardButton';
//import { MEDIKAMENTE } from './data/mediList';

export default function App() {
  modelsTests.test();

  return (
    <View style={styles.container}>
      <Logo />
      <Tablettenbox highlightFach={['morgen', 'nacht']} />
      <ForwardButton />
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
