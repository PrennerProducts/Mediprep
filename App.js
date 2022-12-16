import React from 'react';
import { StyleSheet, View } from 'react-native';
import { DummySchachtel } from './data/DummySchachtelFile';
import MediprepNavigator from './screens/MediprepNavigator';

export default function App() {
  DummySchachtel.starten();
  //DummySchachtel.DummySchachtel.anzeigen();
    
  return (
    <MediprepNavigator />
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
