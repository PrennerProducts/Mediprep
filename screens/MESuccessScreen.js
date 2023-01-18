import React from 'react';
import { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { ScreenObserver } from '../models/ScreenObserver';
import { MedikamentenListe } from '../models/MedikamentenListe';
import DefaultButton from '../components/DefaultButton';

const images = {
  image1: require('../assets/sanduhr.png'),
  image2: require('../assets/award.jpg'),
};

function sleep(time){
  return new Promise((resolve)=>setTimeout(resolve,time)
  )
} 

const MESuccessScreen = ({navigation}) => {
    const[text,setText]=useState('Daten werden gespeichert');
    const[myImage,setMyImage]=useState(images.image1);
    MedikamentenListe.MLDummy.medikamentHinzufuegen(ScreenObserver.tempMed).then(()=>{
      sleep(2000).then(()=>{
        setText('Medikament wurde gespeichert.');
        setMyImage(images.image2);
      });
      //setText('Medikament wurde gespeichert.');
      ScreenObserver.dayly = false;
      ScreenObserver.days = [];
      ScreenObserver.dosierung = [];
  });

    const pressHandler2 = () => {
      navigation.replace('Homescreen');
    };
    const pressHandler = () => {
      navigation.replace('Search');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.WelcomeFont}>{text}</Text>
            <Image source={myImage} style={{width: 300, height: 300}} />
            <View style={styles.buttonsContainer}>
                <DefaultButton 
                    buttonStyle = {styles.buttonStart} 
                    textstyle = {styles.buttonStart}
                    buttonText = {'Zur Startseite'}
                    pressHandler = {pressHandler2}
                    />
                <View style={styles.buttonsContainer}>
                <DefaultButton
                    buttonStyle = {styles.buttonNeu}
                    textstyle = {styles.buttonNeu}
                    buttonText = {'neues Medikament'}
                    pressHandler = {pressHandler}
                    />
                </View>
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
    position: 'absolute',
    bottom: 100,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonNeu: {
      height: 100,
      width: 300,
      bottom: 10,
      borderRadius: 10,
      borderColor: '#6b93ff',
      alignItems: 'center',
      backgroundColor: '#7A003E',
      fontSize: 36,
      fontWeight: 'bold',
      color: 'white',
      textAlign: 'center',
      textAlignVertical: 'center'
  },
  buttonStart: {
      height: 100,
      width: 300,
      bottom: 10,
      top: 10,
      borderRadius: 10,
      borderColor: '#6b93ff',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#0041C8',
      fontSize: 36,
      fontWeight: 'bold',
      color: 'white',
      textAlign: 'center',
      textAlignVertical: 'center'
  },
});

export default MESuccessScreen;