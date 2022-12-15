import React from 'react';
import { StyleSheet, View } from 'react-native';

import { MEDIKAMENTE } from './data/mediList';
import { Medikamentvisualisierung } from './components/Medikamentvisualisierung'

import Logo from './components/Logo';

export default function App() {
  
  return (
    <View style={styles.container}>
      <Logo />
      {/* Hier wird ein Objekt Medikamentvisualisierung erzeugt. Muss als Parameter eine medikamentID bekommen */}
      <Medikamentvisualisierung medikamentID={1}/>
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