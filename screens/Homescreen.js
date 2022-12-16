import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { modelsTests } from '../models/ModelsTests';
import Logo from '../components/Logo';
import StartButton from '../components/StartButton';
import MedBearbeitenButton from '../components/MedBearbeitenButton';

const Homescreen = ({ navigation }) => {
  const pressHandler1 = () => {
    navigation.navigate('WochenTagAuswahlScreen');
  };
  const pressHandler2 = () => {
    navigation.navigate('GreatSuccessScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.WelcomeFont}>Willkommen zurück Sieglinde!</Text>

      <Text style={styles.WelcomeSlogan}>Was möchten Sie gerne tun?</Text>
      <Text style={styles.WelcomeFont}></Text>
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
    backgroundColor: '#032E5B',
    alignItems: 'center',
    justifyContent: 'center',
  },

  WelcomeFont: {
    marginTop: 20,
    fontSize: 40,
    fontWeight: 'bold',
    color: '#00BFB2',
    elevation: 42,
    textAlign: 'left',
  },
  WelcomeSlogan: {
    flex: 1,
    fontSize: 28,
    fontWeight: 'bold',
    color: '#00BFB2',
    elevation: 42,
    textAlign: 'left',
  },
});

export default Homescreen;
