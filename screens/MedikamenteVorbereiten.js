import React from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import Tablettenbox from '../components/Tablettenbox';
import { Schachtel } from '../models/Schachtel';
import { MedikamentenListe } from '../models/MedikamentenListe';
import TablettenStueckAnzeige from '../components/TablettenStueckAnzeige';
import WeiterButton from '../components/WeiterButton';

//import { DummySchachtel } from '../data/DummySchachtelFile';

export const MedikamenteVorbereiten = (props) => {
  let DummySchachtel = new Schachtel('Meine Schachtel', 4);

  DummySchachtel.befuellen(0, 3, 0.5);
  DummySchachtel.befuellen(0, 2, 3);
  DummySchachtel.befuellen(0, 2, 5);
  DummySchachtel.befuellen(1, 7, 0.5);
  DummySchachtel.befuellen(1, 5, 3);
  DummySchachtel.befuellen(2, 2, 0.5);
  DummySchachtel.befuellen(3, 3, 1);
  DummySchachtel.befuellen(3, 6, 1);

  DummySchachtel.befuellen(0, 1, 0.5);
  DummySchachtel.befuellen(0, 2, 3);
  DummySchachtel.befuellen(0, 3, 5);
  DummySchachtel.befuellen(1, 7, 0.5);
  DummySchachtel.befuellen(1, 1, 3);
  DummySchachtel.befuellen(2, 4, 0.5);
  DummySchachtel.befuellen(3, 3, 1);
  DummySchachtel.befuellen(3, 6, 1);

  //DummySchachtel.anzeigenFachMedikament(1, 1);

  // DummySchachtel.anzeigen();
  //DummySchachtel.anzeigenFach(1);
  MedikamentenListe.MLDummy.anzeigen();

  let medikamentId = 6;

  DummySchachtel.zeigeFaecher(medikamentId);
  DummySchachtel.zeigeStueckProFaecher(medikamentId);

  return (
    <View style={styles.container}>
      <Text style={styles.medNameText}>
        {[MedikamentenListe.MLDummy.getMedikamentName(medikamentId)]}
      </Text>
      <Tablettenbox highlightFach={DummySchachtel.zeigeFaecher(medikamentId)} />
      <TablettenStueckAnzeige
        highlightFach={DummySchachtel.zeigeFaecher(medikamentId)}
        stueckProFachDict={DummySchachtel.zeigeStueckProFaecher(medikamentId)}
      />

      <View style={{ alignItems: 'center' }}>
        <WeiterButton />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#cdf1fe',
  },
  tablettenProFachAnzeige: {
    backgroundColor: 'white',
    width: 400,
    height: 100,
  },
  medNameText: {
    fontSize: 55,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default MedikamenteVorbereiten;

// Legende verwendete Funktienen:
