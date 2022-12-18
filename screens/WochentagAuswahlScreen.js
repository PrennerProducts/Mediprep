import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import moment from 'moment';
const datenbankEintrag = [0,0,0,0,0,0,0];
import { ScreenObserver } from '../models/ScreenObserver';
import WeiterButton from "../components/WeiterButton";
import ZurueckButton from "../components/ZurueckButton";
import React, {useState} from "react";

export const WochenTagAuswahlScreen = ({navigation}) => {
  const [medikamentIndex, setMedikamentIndex] = useState(0); //zum Iterieren der Medikamente
  const [showState, setShowState] = useState(true); //Aktuelle Anzeige, true = Medikamentenvisualisierung, false = Tablettenbox-Anzeige

  let currentDate = moment().format('ll').toString(); //.format('dddd') für WeekDay
  let currentWeekday = moment().format('dddd').toString();

  const setCurrentDates = (index) => {
    let found = 0
    for (let i = 0; i < 7; i++) {
      if(index === i){
        found = i +1
      }
    }
    for (let i = 1; i < 8; i++) {
      let search = i % found
      datenbankEintrag[i-1] = moment().add(search, 'days').format('ll');
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
  const pressHandler = () => {
    navigation.navigate('MedikamentenUebersichtScreen');
  };
  const pressHandlerBack = () => { //Zurueck-Button gedrueckt
    if (showState){
      let newIndex = medikamentIndex;
      newIndex--;
      if (newIndex < 0) navigation.navigate('Homescreen');
      else setMedikamentIndex(newIndex);
    }
    setShowState(!showState);
  };

  return (
      <View style={styles.container}>
        <Text style={styles.textfont}>

          Bitte wählen Sie den gewünschten Wochentag:

        </Text>

        <Text style={styles.textfont}>

          Heutiges Datum: {currentWeekday} {currentDate}

        </Text>

        <View style={styles.rahmen}>

          <WochenTag wochenTag={'MO'} display="Montag" name="Monday" id="0" navigation3 ={navigation}/>
          <WochenTag wochenTag={'DI'} display="Dienstag" name="Tuesday" id="1" navigation3 ={navigation}/>
          <WochenTag wochenTag={'MI'} display="Mittwoch" name="Wednesday" id="2" navigation3 ={navigation}/>
          <WochenTag wochenTag={'DO'} display="Donnerstag" name="Thursday" id="3" navigation3 ={navigation}/>
          <WochenTag wochenTag={'FR'} display="Freitag" name="Friday" id="4" navigation3 ={navigation}/>
          <WochenTag wochenTag={'SA'} display="Samstag" name="Saturday" id="5" navigation3 ={navigation}/>
          <WochenTag wochenTag={'SO'} display="Sonntag" name="Sunday" id="6" navigation3 ={navigation}/>

        </View>
        <View style = {styles.buttonsContainer} >
          <TouchableOpacity onPress={pressHandlerBack}>
            <ZurueckButton style={styles.button}/>
          </TouchableOpacity>

        </View>
      </View>
  );
};
const WochenTag = (props) => {
  return (
      <View style={styles.farblicheauswahl}>

        <Text style={styles.wochentag}>{props.display}</Text>
        <View style={styles.kugel}>
          <TouchableOpacity>

            <Farbauswahl weekday={props.id} navigation4 ={props.navigation3}/>

          </TouchableOpacity>
        </View>
      </View>
  );
};

const Farbauswahl = (props) => {
  const listArray = () => {
    console.log('-')
    for (let i = 0; i < 7; i++) {
      console.log(datenbankEintrag[i])
    }
    console.log('-')
  };
  const pressHandler6 = () => {
    console.log('-')
    console.log('Ausgewählt: ' + datenbankEintrag[props.weekday])
    ScreenObserver.wochentag = props.weekday
    console.log(ScreenObserver)
    props.navigation4.navigate('MedikamentenanzeigeScreen');
  };
  return (
      <View>

        <TouchableOpacity
            onPress={pressHandler6}
            style={styles.roundButton}
        ></TouchableOpacity>

      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#cdf1fe',
    flex:1,
    alignItems: 'flex-start',
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
  rahmen: {
    paddingTop:20,
    borderColor: 'gray',
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
    marginTop: 15,

  },
  roundButton: {
    borderWidth: 3,

    borderColor: '#6b93ff',

    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: '#02005c',
    marginTop: 12,
    elevation: 10,
  },
  buttonsContainer:{
    position: 'absolute',
    bottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  kugel: {
    justifyContent: 'flex-end',
  },
});

export default WochenTagAuswahlScreen;