import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';

const MedBearbeitenButton = () => {
  return (
    <View style={styles.Bearbeitenbox}>
      <Text style={styles.LogoFont}>Medikament löschen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Bearbeitenbox: {
    height: 90,
    width: 310,
    //borderWidth: 5,
    //borderColor: 'black',
    //borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7A003E',
    //elevation: 42,
    marginBottom: 100,
  },
  LogoFont: {
    textAlign: 'center',
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
    elevation: 42,
    //textShadowColor: 'black',
    //textShadowOffset: { width: 2, height: 2 },
    //textShadowRadius: 1,
  },
});

export default MedBearbeitenButton;
