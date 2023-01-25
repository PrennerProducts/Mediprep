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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7A003E',
    marginBottom: 100,
  },
  LogoFont: {
    textAlign: 'center',
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
    elevation: 42,
  },
});

export default MedBearbeitenButton;
