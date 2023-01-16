import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import StartButton from '../components/StartButton';
import MedBearbeitenButton from '../components/MedBearbeitenButton';

const Homescreen = ({ navigation }) => {
  const pressHandler1 = () => {
    navigation.navigate('TagAuswahlScreen');
  };
  const pressHandler2 = () => {
    navigation.navigate('MedikamenteBearbeitenScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.WelcomeFont}>Willkommen zurück, Sieglinde!</Text>
      <Text style={styles.WelcomeSlogan}>Was möchten Sie tun?</Text>

      <TouchableOpacity onPress={pressHandler1}>
        <StartButton />
      </TouchableOpacity>
      <TouchableOpacity onPress={pressHandler2}>
        <MedBearbeitenButton />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  WelcomeFont: {
    marginTop: 50,
    fontSize: 50,
    fontWeight: 'bold',
    color: 'black',
    elevation: 4,
    textAlign: 'center',
  },
  WelcomeSlogan: {
    flex: 1,
    marginTop: 50,
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
    elevation: 4,
    textAlign: 'center',
  },
});

export default Homescreen;
