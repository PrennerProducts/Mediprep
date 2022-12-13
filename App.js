import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { modelsTests } from './models/ModelsTests';

import Logo from './components/Logo';
import CustomDatePicker from "./components/DateTimePicker";
//import { MEDIKAMENTE } from './data/mediList';


export default function App() {
  
  modelsTests.test();

  return (
    <View style={styles.container}>
      <Logo />
        <CustomDatePicker
            textStyle={{
                paddingVertical: 15,
                paddingHorizontal: 10,
                borderColor: 'gray',
                borderWidth: 1,
                backgroundColor: '#FFFFFF'
            }}
        />
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
