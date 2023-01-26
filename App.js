import React from 'react';
import { StyleSheet, View } from 'react-native';
import MediprepNavigator from './screens/MediprepNavigator';
import { DataTests } from './Tests/DataTests';


export default function App() {
   DataTests.reset(false); // zum initialisieren der Medikamentenliste 

  // DataTests.test();
  // DataTests.test2();
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
