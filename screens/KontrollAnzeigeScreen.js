import React from 'react';
import { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { ScreenObserver } from '../models/ScreenObserver';
import { DummySchachtel } from '../data/DummySchachtelFile';
import NOKButton from '../components/NOKButton';
import OKButton from '../components/OKButton';
import ZurueckButton from "../components/ZurueckButton";
import Tablettenbox from '../components/Tablettenbox';
import TablettenSummeAnzeige from '../components/TablettenSummeAnzeige';


export const KontrollAnzeigeScreen = ({ navigation }) => {
  const [FachIndex, setFachIndex] = useState(0); //zum Iterieren der Medikamente
  ScreenObserver.aktuellerScreen = 'KontrollanzeigeScreen';
  let Anzahlboxen = DummySchachtel.DummySchachtel.sumTabFach(ScreenObserver.wochentag * 4,ScreenObserver.wochentag * 4 + 3);
  let index = ScreenObserver.wochentag * 4; //Berechne Fachindex anhand Anzahl der Fächer
  ScreenObserver.medikamente = DummySchachtel.DummySchachtel.sumTabFach(ScreenObserver.wochentag * 4,ScreenObserver.wochentag * 4 + 3); //Anzahl Tabletten der Fächer
  let Auswertungsspeicher = {};
  let newIndex = 0;

  const HandlerZurueck = () => {    //Zurück Button gedrueckt hgfhd
    Auswertungsspeicher[FachIndex] = 0;
    newIndex = FachIndex;
    newIndex--;
    if (newIndex < 0) {
      navigation.navigate('MedikamentenanzeigeScreen');
    } else setFachIndex(newIndex);
  };

  const HandlerNOK = () => {    //Falsch Button gedrueckt
    navigation.navigate('FalscheBefuellung');
  };

  const HandlerOK = () => {    //Korrekt Button gedrueckt
    Auswertungsspeicher[FachIndex] = 1;
    newIndex = FachIndex;
    newIndex++;
    if (newIndex >= Object.keys(Anzahlboxen).length) {
      navigation.navigate('GreatSuccessScreen');
    } else setFachIndex(newIndex);
  };

  return (
    //Zeige Medikamentbox an

    <View style={styles.container}>
      <Text style={styles.textfont}>
        Bitte kontrollieren Sie die Tablettenanzahl im markierten Fach.
      </Text>
      <Tablettenbox highlightFach={[FachIndex]} />
      <TablettenSummeAnzeige
        highlightFach={FachIndex}
        stueckProFachGroeße={DummySchachtel.DummySchachtel.sumTabFach(ScreenObserver.wochentag * 4,ScreenObserver.wochentag * 4 + 3)}
      />
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={HandlerNOK}>
          <NOKButton style={styles.button} />
        </TouchableOpacity>
        <TouchableOpacity onPress={HandlerOK}>
          <OKButton style={styles.button} />
        </TouchableOpacity>
      </View>
      <View style={styles.buttonsZurueckContainer}>
      <TouchableOpacity onPress={HandlerZurueck}>
      <ZurueckButton style={styles.button} />
      </TouchableOpacity>
      <View style={styles.hidden} />
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  buttonsContainer: {
    position: 'absolute',
    bottom: 120,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonsZurueckContainer: {
    position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
    //alignItems: 'center',
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
    //elevation: 24,
  },
  textfont: {
    margin: 5,
    marginTop: 50,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    //elevation: 42,
    textAlign: 'center',
  },
  hidden: {
    height: 82,
    width: 150,
    marginLeft: 10,
    marginRight: 10,
  },
});

export default KontrollAnzeigeScreen;
