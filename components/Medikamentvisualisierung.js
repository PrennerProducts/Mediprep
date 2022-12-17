import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { MedikamentenListe } from '../models/MedikamentenListe';

export const Medikamentvisualisierung = (props) => {
    let name = MedikamentenListe.MLDummy.medikamentAnhandIDabrufen(props.medikamentID).name;
    let bild = MedikamentenListe.MLDummy.medikamentAnhandIDabrufen(props.medikamentID).bild;
    return (
        <View style={styles.container}>
            <Text style = {styles.text}>{name} </Text>
            <Image source={{uri: bild}} style={{width: 200, height: 200}} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        top: 100,
        left: 50,
        width: 300,
        height: 400,
        borderRadius: 25,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 60,
        color: '#000080',
    },
});