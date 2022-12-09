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
    borderColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'darkblue',
    elevation: 55,
  },
  LogoFont: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    elevation: 42,
  },
});

export default Logo;
