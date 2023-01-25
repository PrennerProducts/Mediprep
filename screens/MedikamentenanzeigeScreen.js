import React from 'react';
import { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Medikamentvisualisierung } from '../components/Medikamentvisualisierung';
import { ScreenObserver } from '../models/ScreenObserver';
import { DummySchachtel } from '../data/DummySchachtelFile';
import ZurueckButton from '../components/ZurueckButton';
import WeiterButton from '../components/WeiterButton';
import Tablettenbox from '../components/Tablettenbox';
import TablettenStueckAnzeige from '../components/TablettenStueckAnzeige';


const MedikamentenanzeigeScreen = ({ navigation }) => {
  const [medikamentIndex, setMedikamentIndex] = useState(0); //zum Iterieren der Medikamente
  const [showState, setShowState] = useState(true); //Aktuelle Anzeige, true = Medikamentenvisualisierung, false = Tablettenbox-Anzeige
  ScreenObserver.aktuellerScreen = 'MedikamentenanzeigeScreen';
  let index = ScreenObserver.wochentag * 4; //Berechne Fachindex anhand Wochentag
  ScreenObserver.medikamente = DummySchachtel.DummySchachtel.zeigeMedikamentenIdsinBereich(index,index + 3); //Finde Medikamente der naechsten 4 Tage
  if (ScreenObserver.medikamente.length === 0)
    navigation.navigate('WochenTagAuswahl'); //Wenn keine Medikamente, geh zurueck zu WochenTagAuswahl

  const pressHandlerBack = () => {
    //Zurueck-Button gedrueckt
    if (showState) {
      let newIndex = medikamentIndex;
      newIndex--;
      if (newIndex < 0) navigation.navigate('WochenTagAuswahlScreen');
      else setMedikamentIndex(newIndex);
    }
    setShowState(!showState);
  };


  const pressHandler = () => {
    //Weiter-Button gedrueckt
    if (!showState) {
      let newIndex = medikamentIndex;
      newIndex++;
      if (newIndex >= ScreenObserver.medikamente.length){
        navigation.replace('KontrollAnzeigeScreen');}
      else setMedikamentIndex(newIndex);
    }
    setShowState(!showState);
  };

  if (showState)
    return (
      //Zeige Medikamentvisualisierung an
      <View style={styles.container}>
        <TouchableOpacity onPress={pressHandler}>
        <Medikamentvisualisierung
          medikamentID={ScreenObserver.medikamente[medikamentIndex]}
          show={showState}
          index={medikamentIndex}
        />
        </TouchableOpacity>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={pressHandlerBack}>
            <ZurueckButton style={styles.button} />
          </TouchableOpacity>
          <TouchableOpacity onPress={pressHandler}>
            <WeiterButton style={styles.button} />
          </TouchableOpacity>
        </View>
      </View>
    );
  else
    return (
      //Zeige Tablettenbox an
      <View style={styles.container}>
        <Medikamentvisualisierung
          medikamentID={ScreenObserver.medikamente[medikamentIndex]}
          show={showState}
          index={medikamentIndex}
        />
        <Tablettenbox
          highlightFach={DummySchachtel.DummySchachtel.zeigeFaecher(
            ScreenObserver.medikamente[medikamentIndex],
            ScreenObserver.wochentag * 4,
            ScreenObserver.wochentag * 4 + 3
          )}
        />
        <TablettenStueckAnzeige
          highlightFach={DummySchachtel.DummySchachtel.zeigeFaecher(
            ScreenObserver.medikamente[medikamentIndex],
            ScreenObserver.wochentag * 4,
            ScreenObserver.wochentag * 4 + 3
          )}
          stueckProFachDict={DummySchachtel.DummySchachtel.zeigeStueckProFaecher(
            ScreenObserver.medikamente[medikamentIndex],
            ScreenObserver.wochentag * 4,
            ScreenObserver.wochentag * 4 + 3
          )}
        />
        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={pressHandlerBack}>
            <ZurueckButton style={styles.button} />
          </TouchableOpacity>
          <TouchableOpacity onPress={pressHandler}>
            <WeiterButton style={styles.button} />
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

export default MedikamentenanzeigeScreen;
