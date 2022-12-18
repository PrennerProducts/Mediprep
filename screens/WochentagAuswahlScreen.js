import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import moment from 'moment';
const finalAuswahl = [0, 0, 0, 0, 0, 0, 0];
const dataAuswahl = [0,0,0,0,0,0,0];
import WeiterButton from '../components/WeiterButton';
import { ScreenObserver } from '../models/ScreenObserver';

export const WochenTagAuswahlScreen = ({navigation}) => {

  let currentDate = moment().format('ll').toString(); //.format('dddd') für WeekDay
  let currentWeekday = moment().format('dddd').toString();

  const setCurrentDates = (index) => {
    let found = 0
    for (let i = 0; i < 7; i++) {
      if(index === i){
        found = i + 1
      }
    }
    for (let i = 0; i < found + 7; i++) {
      let search = found - i-1
      dataAuswahl[i] = moment().subtract(search, 'days').format('ll');
    }
  };

  switch (currentWeekday) {
    case 'Monday':
      setCurrentDates(0)
      break;
    case 'Tuesday':
      setCurrentDates(1)
      break;
    case 'Wednesday':
      setCurrentDates(2)
      break;
    case 'Thursday':
      setCurrentDates(3)
      break;
    case 'Friday':
      setCurrentDates(4)
      break;
    case 'Saturday':
      setCurrentDates(5)
      break;
    case 'Sunday':
      setCurrentDates(6)
  }


  const pressHandler6 = () => {
    navigation.navigate('MedikamentenanzeigeScreen');
  };

  return (
      <View style={styles.container4}>
        <Text style={styles.textfont}>
          Bitte wählen Sie die gewünschten Wochentage:
        </Text>
        <Text style={styles.textfont}>
          Heutiges Datum: {currentWeekday} {currentDate}
        </Text>
        <View style={styles.rahmen}>

          <WochenTag wochenTag={'MO'} name="Monday" id="0" />
          <WochenTag wochenTag={'DI'} name="Tuesday" id="1" />
          <WochenTag wochenTag={'MI'} name="Wednesday" id="2" />
          <WochenTag wochenTag={'DO'} name="Thursday" id="3" />
          <WochenTag wochenTag={'FR'} name="Friday" id="4" />
          <WochenTag wochenTag={'SA'} name="Saturday" id="5" />
          <WochenTag wochenTag={'SO'} name="Sunday" id="6" />
        </View>
        <TouchableOpacity onPress={listArray} style={styles.container2}>
          <Text style={styles.textfont2}>Log</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={pressHandler6} style={styles.weiterButton}>
          <WeiterButton />
        </TouchableOpacity>

      </View>
  );
};
const WochenTag = (props) => {
  return (
      <View style={styles.farblicheauswahl}>

        <Text style={styles.wochentag}>{props.name}</Text>
        <View style={styles.kugel}>
          <TouchableOpacity>
            <Farbauswahl weekday={props.id} />
          </TouchableOpacity>
        </View>
      </View>
  );
};

const Farbauswahl = (props) => {
  const [active, setActive] = useState(0);

  return (
      <View style={styles.screen}>
        <TouchableOpacity
            onPress={
              active === 0
                  ? () => [setActive(1), (finalAuswahl[props.weekday] = 1), ScreenObserver.wochentag = props.weekday]
                  : () => [setActive(0), (finalAuswahl[props.weekday] = 0)]
            }
            style={active === 0 ? [styles.roundButton1] : styles.roundButton1active}
        ></TouchableOpacity>
      </View>
  );
};

const listArray = () => {
  console.log('-')
  for (let i = 0; i < 7; i++) {
    console.log(finalAuswahl[i])
    console.log(dataAuswahl[i])
  }
};


const styles = StyleSheet.create({
  rahmen: {
    //flexDirection: 'column',
    //justifyContent: 'flex-end',
    // alignItems: 'center',
    borderColor: 'gray',

    //backgroundColor: '#a6aed2',

    marginTop: 20,
    width:200,
    marginLeft:60,
  },

  farblicheauswahl: {
    flexDirection: 'row',
    justifyContent: 'flex-start',




  },

  wochentag: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black',
    marginRight:10,
    width:200,
    height:50,
    marginTop: 10,
  },

  roundButton1: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: 'white',
    marginTop: 12,
    elevation: 10,
  },
  roundButton1active: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: '#ee9a49',
    marginTop: 12,
    elevation: 10,
  },
  container4: {
    backgroundColor: '#cdf1fe',
    flex:1,
    alignItems: 'flex-start',


  },
  container2: {
    borderColor: 'gray',
    backgroundColor: 'white',
    margin: 10,
    height:30,
  },
  container3: {
    width: '50%',
    height: '30%',
  },
  textfont: {
    marginLeft: 12,
    marginTop: 20,
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    elevation: 42,
    textAlign: 'left',
  },
  textfont2: {
    fontSize:20,
    fontWeight: 'bold',
    color: 'black',
    elevation: 42,
    textAlign: 'left',
  },

  weiterButton: {
    marginLeft:25,
  },
  kugel: {
    justifyContent: 'flex-end',
  },

});

export default WochenTagAuswahlScreen;