import React from 'react';
import { View, Text, StyleSheet, Animated, TouchableOpacity } from 'react-native';
import Tablettenbox from '../components/Tablettenbox';
import { MedikamentenListe } from '../models/MedikamentenListe';
import TablettenStueckAnzeige from '../components/TablettenStueckAnzeige';
import WeiterButton from '../components/WeiterButton';
import { ScreenObserver } from '../models/ScreenObserver';
import { DummySchachtel } from '../data/DummySchachtelFile';

export const MedikamenteVorbereiten = ({navigation}) => {
  ScreenObserver.aktuellerScreen = 'MedikamenteVorbereiten';
  console.log(ScreenObserver);
  const pressHandler = () => {
    ScreenObserver.medikamente.shift();
    navigation.navigate('MedikamentenanzeigeScreen2');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.medNameText}>
        {[MedikamentenListe.MLDummy.getMedikamentName(ScreenObserver.medikamente[0])]}
      </Text>
      <Tablettenbox highlightFach={DummySchachtel.DummySchachtel.zeigeFaecher(ScreenObserver.medikamente[0])} />
      <TablettenStueckAnzeige
        highlightFach={DummySchachtel.DummySchachtel.zeigeFaecher(ScreenObserver.medikamente[0])}
        stueckProFachDict={DummySchachtel.DummySchachtel.zeigeStueckProFaecher(ScreenObserver.medikamente[0])}
      />
      <TouchableOpacity onPress={pressHandler}>
            <WeiterButton />
      </TouchableOpacity>
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
