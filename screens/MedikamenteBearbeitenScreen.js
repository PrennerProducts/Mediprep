import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import DefaultButton from '../components/DefaultButton';
import { MedikamentenListe } from '../models/MedikamentenListe';
import { Speicherverwaltung } from '../data/Speicherverwaltung';
import { Dimensions } from 'react-native';

const {height, width} = Dimensions.get('window');
const frameHeight = height;
const frameWidth = width;

const Homescreen = ({ navigation }) => {
  MedikamentenListe.MLDummy.anzeigen();

  let meds = MedikamentenListe.MLDummy.toString();
  const pressHandler21 = () => {
    navigation.replace('Search');
  };
  const pressHandler22 = async () => {
    await Speicherverwaltung.deleteFile('userMeds');
    await MedikamentenListe.MLDummy.initialisieren();
    //await Speicherverwaltung.showFile('userMeds');
    //MedikamentenListe.MLDummy.anzeigen();
    navigation.replace('MedikamenteBearbeitenScreen');
  };
  const pressHandlerBack = () => {
    navigation.navigate('Homescreen');
  };
  
  
  
  
  return (
    <View style={styles.container}>
      <Text style={styles.WelcomeSlogan}>Meine Medikamente</Text>
    
     <ScrollView>
          <View style={styles.medsContainer}>
              <Text style={styles.medikament}>{meds}</Text>
          </View>
          <Image style={{width: frameWidth, height: 150}}/> 
      </ScrollView> 


      <View style={styles.buttonsContainer}>
                <DefaultButton 
                    buttonStyle = {styles.buttonDel} 
                    textstyle = {styles.buttonDel}
                    buttonText = {'Medikamente\nlöschen'}
                    pressHandler = {pressHandler22}
                    />
                <View style={styles.buttonsContainer}>
                <DefaultButton
                    buttonStyle = {styles.buttonNeu}
                    textstyle = {styles.buttonNeu}
                    buttonText = {'Neues\nMedikament'}
                    pressHandler = {pressHandler21}
                    />
                </View>
                
          </View>
          <View style={styles.buttonsContainer2}>
          <DefaultButton
                    buttonStyle = {styles.buttonBack}
                    textstyle = {styles.buttonBack}
                    buttonText = {'Zurück'}
                    pressHandler = {pressHandlerBack}
                    />

            <View style={styles.hidden} />

          </View>
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
  medsContainer: {
    padding: 10,
    alignItems: 'center',
  },
  hidden: {
    height: frameWidth*0.25,
    width: frameWidth*0.45,
  },
  medikament: {
    fontSize: 30,
    color: 'black',
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
    bottom: 135,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonsContainer2: {
    position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonNeu: {
    height: frameHeight*0.15,
    width: frameWidth*0.8,
    borderRadius: 10,
    borderColor: '#6b93ff',
    alignItems: 'center',
    backgroundColor: '#0041C8',
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center'
},
buttonDel: {
    height: frameHeight*0.15,
    width: frameWidth*0.8,
    borderRadius: 10,
    borderColor: '#6b93ff',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7A003E',
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center'
},
buttonBack: {
  height: frameHeight*0.095,
  width: frameWidth*0.38,
  borderRadius: 10,
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

export default Homescreen;
