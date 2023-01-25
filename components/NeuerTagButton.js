import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const NeuerTagButton = () => {
  return (
    <View style={styles.Startbox}>
      <Text style={styles.LogoFont}>Weitere Befüllung Starten</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Startbox: {
    height: 120,
    width: 310,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#032E5B',
    marginBottom: 20,
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

export default NeuerTagButton;
