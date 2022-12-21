import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const StartButton = () => {
  return (
    <View style={styles.Startbox}>
      <Text style={styles.LogoFont}>Tablettenbox befüllen</Text>
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
    backgroundColor: '#0041C8',
    //elevation: 55,
    marginBottom: 20,
  },
  LogoFont: {
    textAlign: 'center',
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    elevation: 42,
    //textShadowColor: 'black',
    //textShadowOffset: { width: 2, height: 2 },
    //textShadowRadius: 1,
  },
});

export default StartButton;
