import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { modelsTests } from '../models/ModelsTests';
import Logo from '../components/Logo';
import StartbildschirmButton from '../components/StartbildschirmButton';
import NeuerTagButton from '../components/NeuerTagButton';

const GreatSuccessScreen = ({ navigation }) => {
  const pressHandler3 = () => {
    navigation.navigate('Homescreen');
    
  };
  const pressHandler1 = () => {
    navigation.navigate('WochenTagAuswahlScreen');
  };


  return (
    <View style={styles.container}>
      <Text style={styles.WelcomeFont}>Fertig! Gut gemacht!</Text>

      <Text style={styles.WelcomeSlogan}>Ihre Tablettenbox ist nun gefüllt</Text>
       
      <Text style={styles.WelcomeFont}></Text>
       
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
    backgroundColor: '#032E5B',
    alignItems: 'center',
    justifyContent: 'center',
  },

  WelcomeFont: {
    flex:1,
    marginTop: 50,
    marginLeft: 10,
    fontSize: 40,
    fontWeight: 'bold',
    color: '#00BFB2',
    elevation: 42,
    textAlign: 'left',
    
  },
  WelcomeSlogan: {
    flex:1,
    marginLeft: 10,
    fontSize: 28,
    fontWeight: 'bold',
    color: '#00BFB2',
    elevation: 42,
    textAlign: 'left',
  },
});

export default GreatSuccessScreen;
