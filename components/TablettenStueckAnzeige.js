import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Tablettenbox from '../components/Tablettenbox';
import { Schachtel } from '../models/Schachtel';
import { MedikamentenListe } from '../models/MedikamentenListe';
import pfeil from '../assets/pfeil.png';

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
  //console.log(props);
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
    mystyle = styles.tablettenfach_pfeil;
    return (
      <View style={mystyle}>
        <Image
          source={pfeil}
          style={{
            width: 100,
            height: 100,
            marginTop: 0,
            position: 'absolute',
            top: 0,
          }}
        />
        <Text
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 24,
            marginTop: 30,
          }}
        >
          {props.stueckProFachDict[props.fachId]} Stück
        </Text>
      </View>
    );
  } else {
    return (
      <View>
        <Text></Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  tablettenbox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '97%',
    height: '37%',
    //borderColor: 'gray',
    //borderWidth: 1,
    // backgroundColor: '#E6D3BB',
    //elevation: 10,
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
    // backgroundColor: 'yellow',
    width: '25%',
    height: '100%',
    margin: 4,
    marginBottom: 4,
    marginTop: 0,
    // borderColor: 'black',
    // borderWidth: 1,
  },
  tablettenfach: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'white',
    width: '84%',
    height: '10%',
    marginBottom: '10%',
    margin: '5%',
    borderWidth: 1,
    //borderColor: 'black',
  },
  tablettenfach_pfeil: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'yellow',
    width: '84%',
    height: '10%',
    //elevation: 24,
    marginBottom: '10%',
    margin: '5%',
    // borderWidth: 4,
    // borderColor: 'black',
  },
  tabblettenfachHeading: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#00003B',
  },
});

export default TablettenStueckAnzeige;
