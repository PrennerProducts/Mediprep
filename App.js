import React from 'react';
import { StyleSheet, View } from 'react-native';
import { modelsTests } from './models/ModelsTests';

import Logo from './components/Logo';
import CustomDatePicker from './components/DateTimePicker';

import ForwardButton from './components/ForwardButton';
import MedikamenteVorbereiten from './screens/MedikamenteVorbereiten';
import { Medikamentvisualisierung } from './components/Medikamentvisualisierung';
import Tablettenbox from './components/Tablettenbox';

import MediprepNavigator from './screens/MediprepNavigator';
import Ladebildschirm from './screens/Ladebildschirm';
import GreatSuccessScreen from './screens/GreatSuccessScreen';

export default function App() {
  modelsTests.test();
  // modelsTests.test();

  return (
    /*<View style={styles.container}>
      
      <GreatSuccessScreen />

    </View>
*/
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
