import React from 'react';
import { StyleSheet, View } from 'react-native';
import Logo from '../components/Logo';


const Ladebildschirm = (props) => {
    return (
<View style={styles.container}>
      <Logo />

    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#032e5b',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Ladebildschirm;

