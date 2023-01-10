import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { DummySchachtel } from './data/DummySchachtelFile';
import { MedikamentenListe } from './models/MedikamentenListe';
import MediprepNavigator from './screens/MediprepNavigator';
import { modelsTests } from './models/ModelsTests';
import { useState, useEffect, loading } from 'react';

export default function App() {
  DummySchachtel.starten2();
  //MedikamentenListe.MLDummy.anzeigen();
  //DummySchachtel.DummySchachtel.anzeigen();

  const [data, setData] = useState([]);

  const url = 'https://lupre.at/api.json';

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((errror) => console.error(errror))
      .finally(() => setloading(false));
  }, []);

  return (
    //<MediprepNavigator />
    <View style={styles.container}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        data.map((post) => (
          <View>
            <Text style={{ fontSize: 30 }}>{post.name}</Text>
            <Text style={{ fontSize: 30 }}>{post.boxSize}</Text>
            <Image
              source={{ uri: post.img }}
              style={{ width: 200, height: 200 }}
            />
          </View>
        ))
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#032e5b',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
