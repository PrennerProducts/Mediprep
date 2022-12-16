import React from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import Tablettenbox from '../components/Tablettenbox';
import { Schachtel } from '../models/Schachtel';
import { MedikamentenListe } from '../models/MedikamentenListe';
import TablettenStueckAnzeige from '../components/TablettenStueckAnzeige';
import WeiterButton from '../components/WeiterButton';

const MedikamentenUebersichtScreen = (props) => {
  return (
    <View style={{ backgroundColor: '#25b5e9' }}>
      <Text style={styles.title}>MedikamentenUebersichtScreen</Text>
      <WeiterButton style={styles.weiterButton} />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 42,
    color: 'blue',
  },
});
export default MedikamentenUebersichtScreen;