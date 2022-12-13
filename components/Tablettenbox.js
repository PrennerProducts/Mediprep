import React from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

export const Tablettenbox = (props) => {
  return (
    <View style={styles.tablettenbox}>
      <Tablettenfachcontainer zeitpunkt={'morgen'} id="morgen1" />
      <Tablettenfachcontainer zeitpunkt={'mittag'} id="mittag" />
      <Tablettenfachcontainer zeitpunkt={'abend'} id="abend" />
      <Tablettenfachcontainer zeitpunkt={'nacht'} id="nacht" />
    </View>
  );
};

const Tablettenfachcontainer = (props) => {
  return (
    <View style={styles.tablettenfachContainer}>
      <Text style={styles.tabblettenfachHeading}>{props.zeitpunkt}</Text>
      <Tablettenfach />
    </View>
  );
};

const Tablettenfach = (props) => {
  return (
    <View style={styles.tablettenfach}>
      <Text>*</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tablettenbox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '97%',
    height: '17%',
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: '#E6D3BB',
    elevation: 10,
    margin: 10,
  },
  text: {
    fontSize: 20,
  },
  tablettenfachContainer: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'blue',
    width: '25%',
    height: '100%',
    margin: 4,
    marginBottom: 4,
    marginTop: 4,
    //borderColor: 'black',
    // borderWidth: 1,
  },
  tablettenfach: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '84%',
    height: '10%',
    borderColor: 'black',
    elevation: 24,
    borderWidth: 1.5,
    marginBottom: '10%',
    margin: '5%',
    //backgroundColor: 'yellow',
    elevation: 14,
  },

  tabblettenfachHeading: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#00003B',
  },
});

export default Tablettenbox;
