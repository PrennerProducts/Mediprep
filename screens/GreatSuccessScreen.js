import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import StartbildschirmButton from '../components/StartbildschirmButton';
import NeuerTagButton from '../components/NeuerTagButton';
import { ScreenObserver } from '../models/ScreenObserver';


const GreatSuccessScreen = ({ navigation }) => {
  const pressHandler3 = () => {
    navigation.navigate('Homescreen');
  };
  const pressHandler1 = () => {
    navigation.navigate('WochenTagAuswahlScreen');
  };
  ScreenObserver.aktuellerScreen = 'GreatSuccessScreen';

  return (
    <View style={styles.container}>
      <Text style={styles.WelcomeFont}>Fertig! Gut gemacht!</Text>
      <Image source={require('../assets/Medikament_gespeichert.png')} style={{width: 220, height: 220, resizeMode: 'contain'}} />
      <TouchableOpacity onPress={pressHandler1}>
        <NeuerTagButton />
      </TouchableOpacity>
      <TouchableOpacity onPress={pressHandler3}>
        <StartbildschirmButton />
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

export default GreatSuccessScreen;
