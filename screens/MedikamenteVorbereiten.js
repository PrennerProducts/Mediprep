// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import Tablettenbox from '../components/Tablettenbox';
// import { MedikamentenListe } from '../models/MedikamentenListe';
// import TablettenStueckAnzeige from '../components/TablettenStueckAnzeige';
// import WeiterButton from '../components/WeiterButton';
// import { ScreenObserver } from '../models/ScreenObserver';
// import { DummySchachtel } from '../data/DummySchachtelFile';
// import { Schachtel } from '../models/Schachtel';

// //import { DummySchachtel } from '../data/DummySchachtelFile';

// export const MedikamenteVorbereiten = ({ navigation }) => {
//   let befuellungready = false;
//   ScreenObserver.aktuellerScreen = 'MedikamenteVorbereiten';
//   let medikamentId = ScreenObserver.medikamente[0];
//   ScreenObserver.medikamente.shift();
//   console.log(ScreenObserver.medikamente);
//   console.log(
//     'ZeigeFaecherTest--------------',
//     DummySchachtel.DummySchachtel.anzeigen()
//   );

//   if (ScreenObserver.medikamente.length == 0) {
//     befuellungready = true;
//   }

//   // DummySchachtel.starten();

//   DummySchachtel.DummySchachtel.zeigeFaecher(medikamentId);

//   const pressHandler = () => {
//     navigation.navigate('MedikamentenanzeigeScreen');
//   };

//   const pressHandler2 = () => {
//     //navigation.navigate('GreatSuccessScreen');
//     navigation.navigate('Kontrolle');
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.medNameText}>
//         {[MedikamentenListe.MLDummy.getMedikamentName(ScreenObserver.medikamente[0])]}
//       </Text>
//       <Tablettenbox
//         highlightFach={DummySchachtel.DummySchachtel.zeigeFaecher(medikamentId)}
//       />
//       <TablettenStueckAnzeige
//         highlightFach={DummySchachtel.DummySchachtel.zeigeFaecher(medikamentId)}
//         stueckProFachDict={DummySchachtel.DummySchachtel.zeigeStueckProFaecher(
//           medikamentId
//         )}
//       />

//       <View style={{ alignItems: 'center' }}>
//         <TouchableOpacity
//           onPress={befuellungready ? pressHandler2 : pressHandler}
//           style={styles.weiterButton}
//         >
//           <WeiterButton />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     backgroundColor: '#cdf1fe',
//   },
//   tablettenProFachAnzeige: {
//     backgroundColor: 'white',
//     width: 400,
//     height: 100,
//   },
//   medNameText: {
//     fontSize: 55,
//     fontWeight: 'bold',
//     color: 'black',
//   },
// });

// export default MedikamenteVorbereiten;

// // Legende verwendete Funktienen:
