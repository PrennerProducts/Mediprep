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

export default StartButton;
