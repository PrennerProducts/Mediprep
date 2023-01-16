import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import ZurueckButton from '../components/ZurueckButton';
import NewMedButton from '../components/NewMedButton';
import DelMedButton from '../components/DelMedButton';
import WeiterButton from '../components/WeiterButton';
import { MedikamentenListe } from '../models/MedikamentenListe';

const Homescreen = ({ navigation }) => {
  const pressHandler21 = () => {
    navigation.navigate('CustomSearch');
  };
  const pressHandler22 = () => {
    navigation.navigate('TagAuswahlScreen');
  };
  const pressHandlerBack = () => {
    navigation.navigate('Homescreen');
  };
  
  
  
  
  return (
    <View style={styles.container}>
      <Text style={styles.WelcomeSlogan}>Meine Medikamente</Text>
    
     {/* <ScrollView>
        {MedikamentenListe.map((item) => (
            <View key={item.id}>
                <Text>{item.name}</Text>

            </View>
        ))}

        </ScrollView> */}
      <TouchableOpacity onPress={pressHandler21}>
        <NewMedButton/>
      </TouchableOpacity>
      <TouchableOpacity onPress={pressHandler22}>
        <DelMedButton/>
      </TouchableOpacity>
      <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={pressHandlerBack}>
            <ZurueckButton style={styles.button} />
          </TouchableOpacity>
          <TouchableOpacity >
            <View style={styles.hidden} />
          </TouchableOpacity>
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
  hidden: {
    height: 82,
    width: 150,

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
    bottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: 120,
    width: 50,
    borderWidth: 3,
    borderColor: '#6b93ff',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#02005c',
    elevation: 24,
  },

});

export default Homescreen;
