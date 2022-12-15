<<<<<<< Updated upstream
export const Homescreen = (props) => {
};
=======
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { modelsTests } from '../models/ModelsTests';
import Logo from '../components/Logo';
import StartButton from '../components/StartButton';
import MedBearbeitenButton from '../components/MedBearbeitenButton';


const Homescreen = ({navigation}) => {

    const pressHandler1 = () => {
      
            navigation.navigate('Ladebildschirm');
}
const pressHandler2 = () => {
      
    navigation.navigate('MedBearbeiten');
}


    return (
<View style={styles.container}>
        <Text style={styles.WelcomeFont}>Willkommen zurück Sieglinde!</Text>
        <Text style={styles.WelcomeSlogan}>Was möchten Sie tun?</Text>
        <Text style={styles.WelcomeFont}></Text>
        <TouchableOpacity onPress={pressHandler1}>
        <StartButton />	
        </TouchableOpacity>
        <TouchableOpacity onPress={pressHandler2}>
        <MedBearbeitenButton />
        </TouchableOpacity>

    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },

    WelcomeFont: {
      
      fontSize: 36,
      fontWeight: 'bold',
      color: 'blue',
      elevation: 42,
    },
    WelcomeSlogan: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'blue',
        elevation: 42,
      }
  });

export default Homescreen;

>>>>>>> Stashed changes
