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
    height: 120,
    width: 350,
    borderWidth: 3,

    borderColor: '#6b93ff',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#02005c',
    elevation: 24,
  },
  font: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default WeiterButton;
