import { StyleSheet, View, Text } from 'react-native';
import { Medikamentvisualisierung } from '../components/Medikamentvisualisierung';
import { ScreenObserver } from '../models/ScreenObserver';
import { DummySchachtel } from '../data/DummySchachtelFile';


export const MedikamentenanzeigeScreen = (props) => {
    ScreenObserver.aktuellerScreen = 'MedikamentenanzeigeScreen';
    console.log(ScreenObserver);
    fach = DummySchachtel.DummySchachtel.faecher[ScreenObserver.wochentag * 4];
    let medikamente = [];
    if (fach.eintraege.length > 0) {
        for (const e of fach.eintraege){
            medikamente.push(e.medikamentId);
        }
    }
    console.log(medikamente);
    return (
            <View style={styles.container}>
                <Medikamentvisualisierung medikamentID={medikamente[0]}/>
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

