import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Medikamentvisualisierung } from '../components/Medikamentvisualisierung';
import { ScreenObserver } from '../models/ScreenObserver';
import { DummySchachtel } from '../data/DummySchachtelFile';
import WeiterButton from '../components/WeiterButton';


export const MedikamentenanzeigeScreen = ({navigation}) => {
    ScreenObserver.aktuellerScreen = 'MedikamentenanzeigeScreen';
    console.log(ScreenObserver);
    fach = DummySchachtel.DummySchachtel.faecher[ScreenObserver.wochentag * 4];
    let medikamente = [];
    if (fach.eintraege.length > 0) {
        for (const e of fach.eintraege){
            medikamente.push(e.medikamentId);
        }
    }
    ScreenObserver.medikamente = medikamente;
    console.log(medikamente);
    const pressHandler = () => {
        navigation.navigate('Befullungstarten');
      };
    return (
            <View style={styles.container}>
                <Medikamentvisualisierung medikamentID={medikamente[0]}/>
                <TouchableOpacity onPress={pressHandler} style={styles.weiterButton}>
                    <WeiterButton />
                </TouchableOpacity>
            </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#032e5b',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

