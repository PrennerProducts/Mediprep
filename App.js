import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { DummySchachtel } from './data/DummySchachtelFile';
import { MedikamentenListe } from './models/MedikamentenListe';
import MediprepNavigator from './screens/MediprepNavigator';
import { modelsTests } from './models/ModelsTests';
import { useState, useEffect, loading } from 'react';
import { getMedikamenteFromApi } from './data/Api';

export default function App() {
  DummySchachtel.starten2();
  //MedikamentenListe.MLDummy.anzeigen();
  //DummySchachtel.DummySchachtel.anzeigen();

  return <MediprepNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#032e5b',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
