import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Logo from './components/Logo';
import { MEDIKAMENTE } from './data/mediList';
import { Tablettenbox } from './components/Tablettenbox';

import { Backbutton } from './components/Backbutton';

import { ForwardButton } from './components/ForwardButton';



export default function App() {
  return (
    <View style={styles.container}>
      <Logo />
      <Tablettenbox />
      <Backbutton />
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
