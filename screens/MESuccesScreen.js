import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import StartbildschirmButton from '../components/StartbildschirmButton';
import NeuerTagButton from '../components/NeuerTagButton';
import { ScreenObserver } from '../models/ScreenObserver';
import { MedikamentenListe } from '../models/MedikamentenListe';
import DefaultButton from '../components/DefaultButton';


const MESuccessScreen = ({ navigation }) => {
    MedikamentenListe.MLDummy.medikamentHinzufuegen(ScreenObserver.tempMed);
    // Zur Kontrolle:
    //MedikamentenListe.MLDummy.anzeigen();

    const pressHandler2 = () => {
        navigation.navigate('Homescreen');
    };
    const pressHandler = () => {
        navigation.navigate('MedikamenteBearbeitenScreen');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.WelcomeFont}>Medikament wurde gespeichert!</Text>
            <Image source={require('../assets/award.jpg')} style={{width: 300, height: 300}} />
            <View style={styles.buttonsContainer}>
                <DefaultButton 
                    buttonStyle = {styles.buttonNeu} 
                    textstyle = {styles.buttonNeu}
                    buttonText = {'Medikamente bearbeiten'}
                    pressHandler = {pressHandler}
                    />
                <DefaultButton 
                    buttonStyle = {styles.buttonStart} 
                    textstyle = {styles.buttonStart}
                    buttonText = {'Zur Startseite'}
                    pressHandler = {pressHandler2}
                    />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 30,
    alignItems: 'center',
    backgroundColor: 'white',
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
  buttonsContainer: {
    bottom: 20,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonNeu: {
      height: 100,
      width: 300,
      borderColor: '#6b93ff',
      alignItems: 'center',
      backgroundColor: '#7A003E',
      fontSize: 30,
      fontWeight: 'bold',
      color: 'white',
      textAlign: 'center',
      textAlignVertical: 'center'
  },
  buttonStart: {
      height: 100,
      width: 300,
      top: 10,
      borderColor: '#6b93ff',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#0041C8',
      fontSize: 30,
      fontWeight: 'bold',
      color: 'white',
      textAlign: 'center',
      textAlignVertical: 'center'
  },
});

export default MESuccessScreen;
