import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Logo = () => {
  return (
    <View style={styles.Logobox}>
      <Text style={styles.LogoFont}>MEDIPREP</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Logobox: {
    height: 200,
    width: '50%',
    borderWidth: 5,
    borderColor: '#4c44d9',
    borderRadius: 20,
    borderEndColor: '#4c44d9',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#130f57',
    elevation: 55,
  },
  LogoFont: {
    fontSize: 28,
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
