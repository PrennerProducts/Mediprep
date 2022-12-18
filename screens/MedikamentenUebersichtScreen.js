import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import { MedikamentenListe } from '../models/MedikamentenListe';
import WeiterButton from '../components/WeiterButton';

const MedikamentenUebersichtScreen = ({ navigation }) => {
  let medikamentId = 6;

  const pressHandler4 = () => {
    navigation.navigate('Befullungstarten');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.medNameText}>
        {[MedikamentenListe.MLDummy.getMedikamentName(medikamentId)]}
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
    backgroundColor: '#cdf1fe',
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
