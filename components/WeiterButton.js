import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';

const WeiterButton = () => {
  return (
    <View style={styles.button}>
      <Text style={styles.font}>Weiter</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 80,
    width: 150,
    borderColor: '#6b93ff',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0041C8',
    borderRadius: 10,
  },
  font: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default WeiterButton;
