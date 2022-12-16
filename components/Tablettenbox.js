import React from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { useState } from 'react';

export const Tablettenbox = (props) => {
  //console.log(props.highlightFach);

  return (
    <View style={styles.tablettenbox}>
      <Tablettenfachcontainer
        highlightFach={props.highlightFach}
        containerId={0}
        containerName="morgen"
      />
      <Tablettenfachcontainer
        highlightFach={props.highlightFach}
        containerId={1}
        containerName="mittag"
      />
      <Tablettenfachcontainer
        highlightFach={props.highlightFach}
        containerId={2}
        containerName="abend"
      />
      <Tablettenfachcontainer
        highlightFach={props.highlightFach}
        containerId={3}
        containerName="nacht"
      />
    </View>
  );
};

const Tablettenfachcontainer = (props) => {
  //console.log(props);
  return (
    <View style={styles.tablettenfachContainer}>
      <Text style={styles.tabblettenfachHeading}>{props.containerName}</Text>
      <Tablettenfach
        fachId={props.containerId}
        highlightFach={props.highlightFach}
      />
    </View>
  );
};

const Tablettenfach = (props) => {
  //console.log(props);
  // console.log(chechHighlightFach(props.highlightFach, props.fachId));

  let mystyle;

  function chechHighlightFach(highlightFach, fachId) {
    for (let i = 0; i < highlightFach.length; i++) {
      if (highlightFach[i] === fachId) {
        return true;
      }
    }
  }

  if (chechHighlightFach(props.highlightFach, props.fachId)) {
    mystyle = styles.tablettenfach_changed;
  } else {
    mystyle = styles.tablettenfach;
  }

  return (
    <View style={mystyle}>
      <Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tablettenbox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '97%',
    height: '20%',
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: '#E6D3BB',
    elevation: 10,
    margin: 10,
    marginBottom: 0,
    marginTop: 40,
  },
  text: {
    fontSize: 20,
  },
  tablettenfachContainer: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'yellow',
    width: '25%',
    height: '100%',
    margin: 4,
    marginBottom: 4,
    marginTop: 4,
    // borderColor: 'black',
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
    borderWidth: 1,
    borderColor: 'black',
  },
  tablettenfach_changed: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
    width: '84%',
    height: '10%',
    borderColor: 'black',
    elevation: 24,
    borderWidth: 1.5,
    marginBottom: '10%',
    margin: '5%',
    borderWidth: 4,
    borderColor: 'black',
  },
  tabblettenfachHeading: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#00003B',
  },
});

export default Tablettenbox;
