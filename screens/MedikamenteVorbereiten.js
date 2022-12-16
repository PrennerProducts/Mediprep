import React from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import Tablettenbox from '../components/Tablettenbox';
import { Schachtel } from '../models/Schachtel';
import { MedikamentenListe } from '../models/MedikamentenListe';

export const MedikamenteVorbereiten = (props) => {
  let DummySchachtel = new Schachtel('Meine Schachtel', 4);

  DummySchachtel.befuellen(0, 3, 0.5);
  DummySchachtel.befuellen(0, 2, 3);
  DummySchachtel.befuellen(0, 2, 5);
  DummySchachtel.befuellen(1, 7, 0.5);
  DummySchachtel.befuellen(1, 5, 3);
  DummySchachtel.befuellen(2, 2, 0.5);
  //DummySchachtel.befuellen(3, 3, 1);
  //DummySchachtel.befuellen(3, 6, 1);

  //DummySchachtel.anzeigenFachMedikament(1, 1);

  // DummySchachtel.anzeigen();
  //DummySchachtel.anzeigenFach(1);
  MedikamentenListe.MLDummy.anzeigen();
  DummySchachtel.zeigeFaecher(2);

  return (
    <View style={styles.container}>
      <Text>Hallo</Text>
      <Tablettenbox highlightFach={DummySchachtel.zeigeFaecher(2)} />
      <Text>%d müssen sie morgens einnehmen %d am Abned</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tablettenProFachAnzeige: {
    backgroundColor: 'white',
    width: 400,
    height: 100,
  },
});

export default MedikamenteVorbereiten;

// Legende verwendete Funktienen:
