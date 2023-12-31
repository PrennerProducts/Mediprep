import { View, Text, StyleSheet, Image} from 'react-native';
import { MedikamentenListe } from '../models/MedikamentenListe';

export const Medikamentvisualisierung = (props) => {

    let name = MedikamentenListe.MLDummy.medikamentAnhandIDabrufen(props.medikamentID).name;
    let bild = MedikamentenListe.MLDummy.medikamentAnhandIDabrufen(props.medikamentID).bild;
    let color = MedikamentenListe.MLDummy.medikamentAnhandIDabrufen(props.medikamentID).color;
    if (props.show) return (
        <View style={styles.container} height = {'90%'} borderColor={color}>
            <Text style={styles.textMedikament} >{name} </Text>
            <Image source={{uri: bild}} style={styles.image} />
        </View>
    );
    else return(        
        <View style={styles.container} height = {'20%'} borderColor={color}>
            <Text style={styles.textMedikament} color='white'>{name} </Text>
        </View>
        );
};

const styles = StyleSheet.create({
    container: {
        flex: 0.75,
        top: 40,
        width: '90%',
        height: '80%',
        borderRadius: 10,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textMedikament: {
        position: 'absolute',
        top: 50,
        fontSize: 50,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    textAnleitung: {
        position: 'absolute',
        top: 480,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    index: {
        position: 'absolute',
        top: 0,
        fontSize: 80,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'grey',
        textShadowColor: 'black',
        textShadowOffset: {width: 3, height: 3},
        textShadowRadius: 5,
    },
    image: {
        position: 'absolute',
        top: 180,
        height:300,
        width:300,
    },
    colorChecker: {
        top:20,
        right: 150,
        height: 50,
        width: 50, 
        borderRadius: 25,
    }
});