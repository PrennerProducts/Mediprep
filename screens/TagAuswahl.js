import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ScreenObserver } from '../models/ScreenObserver';
import ZurueckButton from '../components/ZurueckButton';
import React, {useState} from "react";
import WeiterButton from "../components/WeiterButton";
const finalAuswahl = [0, 0, 0, 0, 0, 0, 0];


export const WochenTagAuswahlScreen = ({ navigation }) => {
    //Array bei jedem Neuladen in die Seite auf 0 setzen
    let i = 6;
    while(i >= 0){
        finalAuswahl[i]= 0;
        i--;
    }
    let DayName = ['Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag','Sonntag',];
    let DisplayName = [];

    const message = () => {
        DisplayName = [];
        let startindex = 0;
        let i = 0;
        while(i <= 6){
            if (finalAuswahl[i] === 1){
                DisplayName[startindex] = DayName[i];
                startindex++
            }
            i++;
        }
        if (startindex === 0){
            DisplayName = ['Leer'];
        }
    }

    const pressHandlerBack = () => {
        navigation.navigate('Homescreen');
    };
    const pressHandler = () => {
        message();
        console.log(finalAuswahl)
        alert('Auswahl:  ' + DisplayName);
        //Variable finalAuswahl beinhaltet die ausgewählten Tage im ArrayStyle [Mo,Di,Mi,Do,Fr,Sa,So]
        //----------------------------------------------------------------------------------- Navigate
        //navigation.navigate('screen');
    };
    return (
        <View style={styles.container}>
            <Text style={styles.textfont}>
                Bitte wählen Sie die Tage:
            </Text>

            <View style={styles.rahmen}>
                <WochenTag
                    wochenTag={'MO'}
                    display="Montag"
                    name="Monday"
                    id="0"
                    navigation3={navigation}
                />
                <WochenTag
                    wochenTag={'DI'}
                    display="Dienstag"
                    name="Tuesday"
                    id="1"
                    navigation3={navigation}
                />
                <WochenTag
                    wochenTag={'MI'}
                    display="Mittwoch"
                    name="Wednesday"
                    id="2"
                    navigation3={navigation}
                />
                <WochenTag
                    wochenTag={'DO'}
                    display="Donnerstag"
                    name="Thursday"
                    id="3"
                    navigation3={navigation}
                />
                <WochenTag
                    wochenTag={'FR'}
                    display="Freitag"
                    name="Friday"
                    id="4"
                    navigation3={navigation}
                />
                <WochenTag
                    wochenTag={'SA'}
                    display="Samstag"
                    name="Saturday"
                    id="5"
                    navigation3={navigation}
                />
                <WochenTag
                    wochenTag={'SO'}
                    display="Sonntag"
                    name="Sunday"
                    id="6"
                    navigation3={navigation}
                />
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity onPress={pressHandlerBack}>
                    <ZurueckButton style={styles.button} />
                </TouchableOpacity>
                <TouchableOpacity onPress={pressHandler}>
                    <WeiterButton style={styles.button} />
                </TouchableOpacity>
            </View>
        </View>
    );
};
const WochenTag = (props) => {
    const [active, setActive] = useState(0);
    return (
        <TouchableOpacity onPress={
            active === 0
            ? () => [setActive(1), (finalAuswahl[props.id] = 1)]
            : () => [setActive(0), (finalAuswahl[props.id] = 0)]
        }
        style={active === 0 ? [styles.farblicheauswahl] : styles.farblicheauswahlActive}>

            <View>

                <Text style={active === 0 ? [styles.wochentag] : styles.wochentagActive}>{props.display}</Text>

            </View>

        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    textfont: {
        margin: 5,
        marginTop: 50,
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        //elevation: 42,
        textAlign: 'center',
    },
    rahmen: {
        paddingTop: 20,
        bottom: 30,
        width: 250,
    },
    farblicheauswahl: {
        marginTop: 15,
        flexDirection: 'row',
        //borderWidth: 3,
        //borderColor: '#6b93ff',
        //borderRadius: 30,
        backgroundColor: '#032E5B',
        justifyContent: 'center',
        alignItems: 'center',


    },
    farblicheauswahlActive: {
        marginTop: 15,
        flexDirection: 'row',
        //borderWidth: 5,
        //borderColor: '#6b93ff',
        //borderRadius: 30,
        backgroundColor: 'lightblue',
        justifyContent: 'center',
        alignItems: 'center',


    },

    wochentag: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'white',
        margin: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    wochentagActive: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'white',
        margin: 4,
        alignItems: 'center',
        justifyContent: 'center',
        textDecorationLine: 'underline',
    },
    buttonsContainer: {
        position: 'absolute',
        bottom: 10,
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
});

export default WochenTagAuswahlScreen;
