import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import moment from 'moment';
const datenbankEintrag = [0,0,0,0,0,0,0];
import { ScreenObserver } from '../models/ScreenObserver';
import ZurueckButton from "../components/ZurueckButton";
import React, {useState} from "react";

<<<<<<< HEAD
export const WochenTagAuswahlScreen = ({ navigation }) => {
    const [medikamentIndex, setMedikamentIndex] = useState(0); //zum Iterieren der Medikamente
    const [showState, setShowState] = useState(true); //Aktuelle Anzeige, true = Medikamentenvisualisierung, false = Tablettenbox-Anzeige
=======

export const WochenTagAuswahlScreen = ({navigation}) => {
  const [medikamentIndex, setMedikamentIndex] = useState(0); //zum Iterieren der Medikamente
  const [showState, setShowState] = useState(true); //Aktuelle Anzeige, true = Medikamentenvisualisierung, false = Tablettenbox-Anzeige
>>>>>>> parent of a2839af (Merge remote-tracking branch 'origin/master')

    let currentWeekday = moment().format('dddd').toString();

<<<<<<< HEAD
    const pressHandlerBack = () => {
        //Zurueck-Button gedrueckt
        if (showState) {
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
                <WochenTag
                    wochenTag={'MO'}
                    display="Montag"
                    name="Monday"
                    id="0"
                    navigation3={navigation}
                />
                <WochenTag
                    wochenTag={'DI'}
                    display="Dienstag"
                    name="Tuesday"
                    id="1"
                    navigation3={navigation}
                />
                <WochenTag
                    wochenTag={'MI'}
                    display="Mittwoch"
                    name="Wednesday"
                    id="2"
                    navigation3={navigation}
                />
                <WochenTag
                    wochenTag={'DO'}
                    display="Donnerstag"
                    name="Thursday"
                    id="3"
                    navigation3={navigation}
                />
                <WochenTag
                    wochenTag={'FR'}
                    display="Freitag"
                    name="Friday"
                    id="4"
                    navigation3={navigation}
                />
                <WochenTag
                    wochenTag={'SA'}
                    display="Samstag"
                    name="Saturday"
                    id="5"
                    navigation3={navigation}
                />
                <WochenTag
                    wochenTag={'SO'}
                    display="Sonntag"
                    name="Sunday"
                    id="6"
                    navigation3={navigation}
                />
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity onPress={pressHandlerBack}>
                    <ZurueckButton style={styles.button} />
                </TouchableOpacity>
            </View>
        </View>
    );
=======
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
  const pressHandlerBack = () => {
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

          Bitte wählen Sie den gewünschten Wochentag um mit der Befüllung der Medikamentenbox zu beginnen:

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
          <View style={styles.hidden}/>

        </View>
      </View>
  );
>>>>>>> parent of a2839af (Merge remote-tracking branch 'origin/master')
};
const WochenTag = (props) => {
    const pressHandler6 = () => {
        console.log('-')
        console.log('Ausgewählt: ' + datenbankEintrag[props.display])
        ScreenObserver.wochentag = props.id
        console.log(ScreenObserver)
        props.navigation3.navigate('MedikamentenanzeigeScreen');
    };
    return (
        <View style={styles.farblicheauswahl}>
            <TouchableOpacity onPress={pressHandler6}>

                <Text style={styles.wochentag}>{props.display}</Text>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    textfont: {
        margin:5,
        marginTop: 20,
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        elevation: 42,
        textAlign: 'left',
    },
    rahmen: {
        paddingTop:20,

        width:250,
    },
    farblicheauswahl: {
        marginTop:15,
        borderWidth: 3,
        borderColor: '#6b93ff',
        borderRadius: 30,
        backgroundColor: '#02005c',
        justifyContent:'center',
        alignItems:'center',

    },
    wochentag: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'white',
        margin:5,


    },
    hidden: {
        height: 120,
        width: 200,


<<<<<<< HEAD
    },
    buttonsContainer: {
=======
  },
  buttonsContainer:{

    bottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:44,
    marginLeft:50,
  },
  button: {
>>>>>>> parent of a2839af (Merge remote-tracking branch 'origin/master')

        position: 'absolute',
        bottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:44,
        marginLeft:50,
    },
    button: {

        height: 120,
        width: 50,
        borderWidth: 3,
        borderColor: '#6b93ff',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#02005c',
        elevation: 24,
    },
});

export default WochenTagAuswahlScreen;