import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const StartbildschirmButton = () => {
  return (
    
    <View style={styles.Startbox}>
      <Text style={styles.LogoFont}>Zur Startseite</Text>

    </View>

  );
};

const styles = StyleSheet.create({
  Startbox: {
    height: 150,
    width: 380,
    borderWidth: 5,
    borderColor: 'lightblue',
    borderRadius: 30,
    borderBottomLeftRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#066107',
    elevation: 55,
    marginBottom: 20,
  },
  LogoFont: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
    elevation: 42,
  },

});



export default StartbildschirmButton;

