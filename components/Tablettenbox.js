import React from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

export const Tablettenbox = (props) => {
  //console.log(props.highlightFach);

  return (
    <View style={styles.tablettenbox}>
      <Tablettenfachcontainer
        highlightFach={props.highlightFach}
        containerId={0}
        containerName="Morgen"
      />
      <Tablettenfachcontainer
        highlightFach={props.highlightFach}
        containerId={1}
        containerName="Mittag"
      />
      <Tablettenfachcontainer
        highlightFach={props.highlightFach}
        containerId={2}
        containerName="Abend"
      />
      <Tablettenfachcontainer
        highlightFach={props.highlightFach}
        containerId={3}
        containerName="Nacht"
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
    height: '17%',
    borderColor: '#0041C8',
    borderWidth: 3,
    backgroundColor: '#0041C8',
    elevation: 10,
    margin: 10,
    marginBottom: 0,
    marginTop: 30,
  },
  text: {
    fontSize: 20,
  },
  tablettenfachContainer: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '25%',
    height: '100%',
    margin: 4,
    marginBottom: 4,
    marginTop: 4,
  },
  tablettenfach: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#032E5B',
    width: '84%',
    height: '10%',
    //elevation: 24,
    borderWidth: 1.5,
    marginBottom: '10%',
    margin: '5%',
    borderColor: 'white',
  },
  tablettenfach_changed: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FCFF00',
    width: '84%',
    height: '10%',
    //elevation: 24,
    borderWidth: 3,
    marginBottom: '10%',
    margin: '5%',
    borderColor: '#032E5B',
  },
  tabblettenfachHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Tablettenbox;
