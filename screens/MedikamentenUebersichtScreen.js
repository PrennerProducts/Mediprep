import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Image,
} from 'react-native';
import Tablettenbox from '../components/Tablettenbox';
import { Schachtel } from '../models/Schachtel';
import { MedikamentenListe } from '../models/MedikamentenListe';
import TablettenStueckAnzeige from '../components/TablettenStueckAnzeige';
import WeiterButton from '../components/WeiterButton';

const MedikamentenUebersichtScreen = ({ navigation }) => {
  const pressHandler4 = () => {
    navigation.navigate('Befullungstarten');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.medNameText}>
        {[MedikamentenListe.MLDummy.getMedikamentName(6)]}
      </Text>

      <Image
        style={styles.image}
        source={require('../assets/medikament.png')}
      />

      <TouchableOpacity style={styles.weiterButton} onPress={pressHandler4}>
        <WeiterButton />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25b5e9',
    alignItems: 'center',
  },
  medNameText: {
    fontSize: 55,
    fontWeight: 'bold',
    color: 'black',
  },
  weiterButton: {
    position: 'absolute',
    bottom: 100,
  },
  image: {
    width: 300,
    height: 300,
    marginTop: 100,
  },
});
export default MedikamentenUebersichtScreen;
