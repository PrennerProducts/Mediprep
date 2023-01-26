import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { ScreenObserver } from '../models/ScreenObserver';
import WeiterButton from '../components/WeiterButton';
import ZurueckButton from "../components/ZurueckButton";
import Tablettenbox from "../components/Tablettenbox";


export const FalscheBefuellung = ({ navigation }) => {
    ScreenObserver.aktuellerScreen = 'FalscheBefuellung';

    const HandlerZurueck = () => {    //Zurück Button gedrueckt
            navigation.navigate('KontrollAnzeigeScreen');
    };

    const HandlerWeiter = (props) => {    //Neubefuellung Button gedrueckt
        navigation.replace('MedikamentenanzeigeScreen');
    };

    return (
        //Zeige Medikamentbox an

        <View style={styles.container}>
            <Text style={styles.textfont2} >
                Zu Ihrer eigenen Sicherheit: Bitte entleeren Sie die Tablettenbox.
            </Text>
            <Tablettenbox highlightFach={0} />
            <Text style={styles.textfont}>
                Mit "Weiter" werden Sie noch einmal durch die Befüllung des ausgewählten Tages geführt.
           {'\n\n'}
                Mit "Zurück" kann die Kontrolle korrigiert werden.
            </Text>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity onPress={HandlerZurueck}>
                    <ZurueckButton style={styles.button} />
                </TouchableOpacity>
                <TouchableOpacity onPress={HandlerWeiter}>
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
        bottom: 25,
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
    textfont: {
        marginTop: 50,
        marginLeft: 25,
        marginRight: 25,
        fontSize: 27,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'left',
    },
    textfont2: {
        marginTop: 50,
        marginLeft: 25,
        marginRight: 25,
        fontSize: 30,
        fontWeight: 'bold',
        color:'#900028',
        textAlign: 'left',
    },
});

export default FalscheBefuellung;
