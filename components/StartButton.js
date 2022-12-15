import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { mediprepNavigation } from '../screens/MediprepNavigator'

const StartButton = () => {
  return (
    
    <View style={styles.Startbox}>
      <Text style={styles.LogoFont}>Befüllung starten</Text>

    </View>

  );
};

const styles = StyleSheet.create({
  Startbox: {
    height: 150,
    width: '90%',
    borderWidth: 5,
    borderColor: 'lightblue',
    borderRadius: 30,
    borderBottomLeftRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    elevation: 55,
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

export default StartButton;

