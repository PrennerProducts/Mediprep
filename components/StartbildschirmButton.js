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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7A003E',
    marginBottom: 20,
  },
  LogoFont: {
    textAlign: 'center',
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
    elevation: 42,
  },
});

export default StartbildschirmButton;
