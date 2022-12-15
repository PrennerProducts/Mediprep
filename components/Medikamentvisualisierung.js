import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { MedikamentenListe } from '../models/MedikamentenListe';

export const Medikamentvisualisierung = (props) => {
    let name = MedikamentenListe.MLDummy.medikamentAnhandIDabrufen(props.medikamentID).name;
    let bild = MedikamentenListe.MLDummy.medikamentAnhandIDabrufen(props.medikamentID).bild;
    return (
        <View style={styles.container}>
            <Text style = {styles.text}>{name} </Text>
            {/* Hier kommt spaeter ein Image mit der Url */}
            <Text style = {styles.text}>{bild} </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 2,
        position: 'absolute',
        top: 570,
        left: 50,
        width: 300,
        height: 200,
        borderRadius: 25,
        backgroundColor: '#dcdcdc',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 70,
        color: '#000080',
    },
});