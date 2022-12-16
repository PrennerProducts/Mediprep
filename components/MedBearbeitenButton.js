import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const MedBearbeitenButton = () => {
  return (
    <View style={styles.Bearbeitenbox}>
      <Text style={styles.LogoFont}>Medikamentenliste bearbeiten</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Bearbeitenbox: {
    height: 150,
    width: 380,
    borderWidth: 5,
    borderColor: 'lightblue',
    borderRadius: 30,
    borderBottomLeftRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5B032E',
    elevation: 55,
    marginBottom: 150,
  },
  LogoFont: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
    elevation: 42,
  },
});

const TouchableWithoutFeedbackExample = () => {
  const onPress = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.countContainer}>
        <Text style={styles.countText}>Count: {count}</Text>
      </View>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.button}>
          <Text>Touch Here</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default MedBearbeitenButton;
