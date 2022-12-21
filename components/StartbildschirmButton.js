import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';

const StartbildschirmButton = () => {
  return (
    <View style={styles.Startbox}>
      <Text style={styles.LogoFont}>Zur Startseite</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Startbox: {
    height: 120,
    width: 310,
    //borderWidth: 5,
    //borderColor: 'black',
    //borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7A003E',
    //elevation: 42,
    marginBottom: 20,
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

export default StartbildschirmButton;
