import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import StartButton from '../components/StartButton';
import MedBearbeitenButton from '../components/MedBearbeitenButton';
import Logo from '../components/Logo';
import { Audioverwaltung } from '../data/Audioverwaltung';

const Homescreen = ({ navigation }) => {
  const pressHandler1 = () => {
    navigation.navigate('WochenTagAuswahlScreen');
  };
  const pressHandler2 = () => {
    navigation.replace('MedikamenteBearbeitenScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.WelcomeFont}>Willkommen zurück, Sieglinde!</Text>
     
      <Image style={styles.img} source={require('../assets/Icon_Mediprep_500x500px.png')} />
      <Text style={styles.WelcomeSlogan}>Was möchten Sie tun?</Text>
      
      

      <TouchableOpacity onPress={pressHandler1}>
        <StartButton />
      </TouchableOpacity>
      <TouchableOpacity onPress={pressHandler2}>
        <MedBearbeitenButton />
      </TouchableOpacity>

      <Audioverwaltung 
        index={0} 
        playButtonText={'...'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 115,
  },

  WelcomeFont: {
    marginTop: 80,
    fontSize: 45,
    fontWeight: 'bold',
    color: 'black',
    elevation: 4,
    textAlign: 'center',
    marginBottom: 35,
  },
  WelcomeSlogan: {
    flex: 1,
    marginTop: 40,
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
    elevation: 4,
    textAlign: 'center',
  },
  img: {
    width: 150,
    height: 150,
  },
});

export default Homescreen;
