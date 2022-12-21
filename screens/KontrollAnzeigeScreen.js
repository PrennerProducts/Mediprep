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
//Text
export const KontrollAnzeigeScreen = ({ navigation }) => {
  const [FachIndex, setFachIndex] = useState(0); //zum Iterieren der Medikamente
  ScreenObserver.aktuellerScreen = 'KontrollanzeigeScreen';
  let Anzahlboxen = DummySchachtel.DummySchachtel.sumTabFach(ScreenObserver.wochentag * 4,ScreenObserver.wochentag * 4 + 3);
  let index = ScreenObserver.wochentag * 4; //Berechne Fachindex anhand Anzahl der Fächer
  ScreenObserver.medikamente = DummySchachtel.DummySchachtel.sumTabFach(ScreenObserver.wochentag * 4,ScreenObserver.wochentag * 4 + 3); //Anzahl Tabletten der Fächer
  let Auswertungsspeicher = {};
  let newIndex = 0;

  const HandlerZurueck = () => {    //Falsch Button gedrueckt
    Auswertungsspeicher[FachIndex] = 0;
    newIndex = FachIndex;
    newIndex--;
    if (newIndex < 0) {
      navigation.navigate('MedikamentenanzeigeScreen');
    } else setFachIndex(newIndex);
  };

  const HandlerNOK = () => {    //Falsch Button gedrueckt
    Auswertungsspeicher[FachIndex] = 0;
    newIndex = FachIndex;
    newIndex++;
    if (newIndex >= Object.keys(Anzahlboxen).length) {
      navigation.navigate('GreatSuccessScreen');
    } else setFachIndex(newIndex);
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
        Bitte konrollieren Sie die Tablettenanzahl von der markierten Box.
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
  textfont: {
    margin: 5,
    marginTop: 50,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    elevation: 42,
    textAlign: 'center',
  },
});

export default KontrollAnzeigeScreen;
