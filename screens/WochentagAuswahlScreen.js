import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import moment from 'moment';
const datenbankEintrag = [0, 0, 0, 0, 0, 0, 0];
import { ScreenObserver } from '../models/ScreenObserver';
import ZurueckButton from '../components/ZurueckButton';


export const WochenTagAuswahlScreen = ({ navigation }) => {

  let currentWeekday = moment().format('dddd').toString();

  const setCurrentDates = (index) => {
    let found = 0;
    for (let i = 0; i < 7; i++) {
      if (index === i) {
        found = i + 1;
      }
    }
    for (let i = 1; i < 8; i++) {
      let search = i % found;
      datenbankEintrag[i - 1] = moment().add(search, 'days').format('ll');
    }
  };

  switch (currentWeekday) {
    case 'Monday':
      setCurrentDates(0);
      break;
    case 'Tuesday':
      setCurrentDates(1);
      break;
    case 'Wednesday':
      setCurrentDates(2);
      break;
    case 'Thursday':
      setCurrentDates(3);
      break;
    case 'Friday':
      setCurrentDates(4);
      break;
    case 'Saturday':
      setCurrentDates(5);
      break;
    case 'Sunday':
      setCurrentDates(6);
  }
  const pressHandlerBack = () => {
      navigation.navigate('Homescreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textfont}>
        Bitte wählen Sie den Wochentag, für den Sie die Tablettenbox
        vorbereiten:
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
        <View style={styles.hidden} />
      </View>
    </View>
  );
};
const WochenTag = (props) => {
  const pressHandler6 = () => {
    ScreenObserver.wochentag = props.id;
    props.navigation3.navigate('MedikamentenanzeigeScreen');
  };
  return (
      <TouchableOpacity onPress={pressHandler6}>
    <View style={styles.farblicheauswahl}>

        <Text style={styles.wochentag}>{props.display}</Text>

    </View>
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop:30,
  },
  textfont: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: 30,
    marginLeft: 25,
    marginRight:25,
  },
  rahmen: {
    marginTop:20,
    paddingTop: 20,
    bottom: 30,
    width: 250,
  },
  farblicheauswahl: {
    borderRadius: 10,
    marginTop: 15,
    backgroundColor: '#032E5B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wochentag: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
    margin: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hidden: {
    height: 82,
    width: 150,

  },
  buttonsContainer: {
    position: 'absolute',
    bottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
