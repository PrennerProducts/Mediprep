import { StyleSheet, View, Text } from 'react-native';
import { Medikamentvisualisierung } from '../components/Medikamentvisualisierung';


export const MedikamentenanzeigeScreen = (props) => {
    let medikamentIDtoPass = props.route.params.medikamentID;
    return (
        <View style={styles.container}>
            {/* Hier wird ein Objekt Medikamentvisualisierung erzeugt. Muss als Parameter die medikamentID bekommen, damit das richtige Medikament abgerufen wird. */}
            <Medikamentvisualisierung medikamentID={medikamentIDtoPass}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#032e5b',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

