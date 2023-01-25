import React from 'react';
import { StyleSheet, View } from 'react-native';
import MediprepNavigator from './screens/MediprepNavigator';

import { DataTests } from './Tests/DataTests';
import { Speicherverwaltung } from './data/Speicherverwaltung';
import { SpeichervTests } from './Tests/SpeichervTests';


export default function App() {
   DataTests.reset(false);
 // DataTests.test();
  //DataTests.test2();
 // Speicherverwaltung.createFile('userMeds', ''); 
 //SpeichervTests.test();

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
