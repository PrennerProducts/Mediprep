import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Medikamentvisualisierung } from '../components/Medikamentvisualisierung';
import { ScreenObserver } from '../models/ScreenObserver';
import { DummySchachtel } from '../data/DummySchachtelFile';
import WeiterButton from '../components/WeiterButton';

export const MedikamentenanzeigeScreen2 = ({navigation}) => {
    ScreenObserver.aktuellerScreen = 'MedikamentenanzeigeScreen2';
    console.log(ScreenObserver);
    
    const pressHandler = () => {
        navigation.navigate('Befullungstarten');
      };

    return (
        <View style={styles.container}>
            <Medikamentvisualisierung medikamentID={ScreenObserver.medikamente[0]}/>
            {console.log(ScreenObserver.medikamente[0])}
            <TouchableOpacity onPress={pressHandler}>
                <WeiterButton />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#cdf1fe',
    },
    tablettenProFachAnzeige: {
      backgroundColor: 'white',
      width: 400,
      height: 100,
    },
    medNameText: {
      fontSize: 55,
      fontWeight: 'bold',
      color: 'black',
    },
  });

export default MedikamentenanzeigeScreen2;

