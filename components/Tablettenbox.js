import React from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { useState } from 'react';

export const Tablettenbox = (props) => {
  //console.log(props);

  const TablettencontainerArray = [];
  TablettencontainerArray.push(<Tablettenfachcontainer containerId="morgen" />);
  TablettencontainerArray.push(<Tablettenfachcontainer containerId="mittag" />);
  TablettencontainerArray.push(<Tablettenfachcontainer containerId="abend" />);
  TablettencontainerArray.push(<Tablettenfachcontainer containerId="nacht" />);
  //console.log(TablettencontainerArray);
  return (
    <View style={styles.tablettenbox}>
      {TablettencontainerArray[0]}
      {TablettencontainerArray[1]}
      {TablettencontainerArray[2]}
      {TablettencontainerArray[3]}
    </View>
  );
};

const Tablettenfachcontainer = (props) => {
  //console.log(props)
  return (
    <View style={styles.tablettenfachContainer}>
      <Text style={styles.tabblettenfachHeading}>{props.containerId}</Text>
      <Tablettenfach fachId={props.containerId} isHighlighted={false} />
    </View>
  );
};

const Tablettenfach = (props) => {
  // das brauch ich in dem Fall nicht mehr!
  const styleArray = [styles.tablettenfach, styles.tablettenfach_changed];
  const useStateArray = useState(1);
  const index = useStateArray[0];
  let mystyle = styleArray[index];
  const setStyle = useStateArray[1];

  //console.log(props);

  function setHighlightFach2(fachId) {
    isHighlighted = true;
  }

  return (
    <View
      style={
        props.isHighlighted === false
          ? styles.tablettenfach
          : styles.tablettenfach_changed
      }
    >
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
    borderColor: 'gray',
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
