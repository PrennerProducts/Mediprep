import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import pfeil from '../assets/pfeil.png';
import pfeilblau from '../assets/pfeilblau.png';
import Pfeil_schwarz_500x500px from "../assets/Pfeil_schwarz_500x500px.png";

const TablettenStueckAnzeige = (props) => {
  return (
    <View style={styles.tablettenbox}>
      <Tablettenfachcontainer
        highlightFach={props.highlightFach}
        stueckProFachDict={props.stueckProFachDict}
        containerId={0}
        containerName=""
      />
      <Tablettenfachcontainer
        highlightFach={props.highlightFach}
        stueckProFachDict={props.stueckProFachDict}
        containerId={1}
        containerName=""
      />
      <Tablettenfachcontainer
        highlightFach={props.highlightFach}
        stueckProFachDict={props.stueckProFachDict}
        containerId={2}
        containerName=""
      />
      <Tablettenfachcontainer
        highlightFach={props.highlightFach}
        stueckProFachDict={props.stueckProFachDict}
        containerId={3}
        containerName=""
      />
    </View>
  );
};

const Tablettenfachcontainer = (props) => {
  return (
    <View style={styles.tablettenfachContainer}>
      <Tablettenfach
        fachId={props.containerId}
        highlightFach={props.highlightFach}
        stueckProFachDict={props.stueckProFachDict}
      />
    </View>
  );
};

const Tablettenfach = (props) => {

  let mystyle;

  function chechHighlightFach(highlightFach, fachId) {
    for (let i = 0; i < highlightFach.length; i++) {
      if (highlightFach[i] === fachId) {
        return true;
      }
    }
  }

  if (chechHighlightFach(props.highlightFach, props.fachId)) {
    mystyle = styles.tablettenfach_pfeil;
    return (
      <View style={mystyle}>
        <Image
          source={Pfeil_schwarz_500x500px}
          style={{
            resizeMode: 'contain',
            width: 120,
            height: 100,
            marginTop: 0,
            position: 'absolute',
            top: 0,
          }}
        />
        <Text style={styles.zahlStyle}>
          {props.stueckProFachDict[props.fachId]}
        </Text>
        <Text style={styles.stueckStyle}>Stück</Text>
      </View>
    );
  } else {
    return <View></View>;
  }
};

const styles = StyleSheet.create({
  tablettenbox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '97%',
    height: '37%',
    margin: 10,
    magrinTop: 0,
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
    marginTop: 0,
  },
  tablettenfach: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '84%',
    height: '10%',
    marginBottom: '10%',
    margin: '5%',
    borderWidth: 1,
  },
  tablettenfach_pfeil: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '84%',
    height: '10%',
    marginBottom: '10%',
    margin: '5%',
  },
  tabblettenfachHeading: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#00003B',
  },
  zahlStyle: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 36,
    marginTop: 10,
  },
  stueckStyle: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 28,
    marginTop: 0,
  },
});

export default TablettenStueckAnzeige;
