import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Logo = () => {
  return (
    <View style={styles.Logobox}>
      <Text style={styles.LogoFont}>mediprep</Text>
      <Text style={styles.SloganFont}>Ihre Gesundheit in Ihren Händen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Logobox: {
    height: 200,
    width: '90%',
    borderWidth: 5,
    borderColor: 'lightblue',
    borderRadius: 30,
    borderBottomLeftRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#032e5b',
    elevation: 55,
  },
  LogoFont: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
    elevation: 42,
  },

  SloganFont: {
    fontSize: 20,
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

export default Logo;
