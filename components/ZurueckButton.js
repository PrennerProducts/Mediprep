import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';

const ZurueckButton = () => {
  return (
    <View style={styles.button}>
      <Text style={styles.font}>Zurück</Text>
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
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
  },
  font: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default ZurueckButton;
