import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';

const MedBearbeitenButton = () => {
  return (
    <View style={styles.Bearbeitenbox}>
      <Text style={styles.LogoFont}>Medikamente bearbeiten</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Bearbeitenbox: {
    height: 120,
    width: 310,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#032E5B',
    marginBottom: 20,
    marginTop: 2,
    borderRadius: 10,
  },
  LogoFont: {
    textAlign: 'center',
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    elevation: 42,
   
  },
});

export default MedBearbeitenButton;
