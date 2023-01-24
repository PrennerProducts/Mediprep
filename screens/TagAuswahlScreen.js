import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { ScreenObserver } from '../models/ScreenObserver';
import ZurueckButton from '../components/ZurueckButton';
import React, {useState} from "react";
import WeiterButton from "../components/WeiterButton";
import { ScrollView } from 'react-native';

import { Dimensions } from 'react-native';

const {width} = Dimensions.get('window');
const frameWidth = width;

const finalAuswahl = [0, 0, 0, 0, 0, 0, 0];
//let finaltaglich = 0; FUER TAEGLICH-AUSWAHL. WIRD AKTUELL NICHT MEHR VERWENDET -> EINNAHMESCREEN


export const TagAuswahlScreen = ({ navigation }) => {
    //Array bei jedem Neuladen in die Seite auf 0 setzen
    //finaltaglich = 0;
    let i = 6;
    while(i >= 0){
        finalAuswahl[i]= 0;
        i--;
    }

    const pressHandlerBack = () => {
        ScreenObserver.dayly = false;
        ScreenObserver.days = [];
        navigation.navigate('EinnahmeScreen');
    };
    const pressHandler = () => {

        //console.log(finalAuswahl)  //Variable finalAuswahl beinhaltet die ausgewählten Tage im ArrayStyle [Mo,Di,Mi,Do,Fr,Sa,So]  Werte: 0 false , 1 = true
        //alert('Auswahl:  ' + DisplayName + '\n' + 'Täglich: ' + DisplayTaglich);

        /*
        // Wenn Täglich Falg dayly auf true setzen und alle days auf true setzen (im ScreenObserver)
        if(finaltaglich === 1){
            //console.log('Täglich is the Shit'); //Variable finalAusw
            ScreenObserver.dayly = true;
            //console.log('checkObserver: ', ScreenObserver.dayly);

            // Alle Tage mit true befüllen
            for(let i = 0; i <7; i++){
                ScreenObserver.days.push(1);
                //console.log(i);
            }
        }else{ // Wenn nicht täglich, dann die ausgewählten Tage in den ScreenObserver schreiben
        */
            ScreenObserver.days = finalAuswahl;
        //}


        //console.log('Tage:' ,ScreenObserver.days,'Dayly: ', ScreenObserver.dayly);

        //----------------------------------------------------------------------------------- Navigate
        navigation.navigate('TageszeitenScreen');
    };
    return (
        <View style={styles.container}>

            <Text style={styles.textfont}>
                Bitte wählen Sie die Tage, an denen das Medikament eingenommen wird:
            </Text>
        <ScrollView>
            <View style={styles.rahmen}>
                <WochenTag
                    display="Montag"
                    id="0"
                />
                <WochenTag
                    display="Dienstag"
                    id="1"
                />
                <WochenTag
                    display="Mittwoch"
                    id="2"
                />
                <WochenTag
                    display="Donnerstag"
                    id="3"
                />
                <WochenTag
                    display="Freitag"
                    id="4"
                />
                <WochenTag
                    display="Samstag"
                    id="5"
                />
                <WochenTag
                    display="Sonntag"
                    id="6"
                />
                <Image style={{width: 400, height: 80}}/>
            </View>
            </ScrollView>
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
        paddingTop:30,
    },
    textfont: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'left',
        marginTop: 30,
        marginLeft: 25,
        marginRight:25,
        marginBottom: 12,
    },
    textfontINT: {
        margin: 5,
        marginTop: 50,
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        //elevation: 42,
        textAlign: 'center',
        
    },

    tagauswahltext: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'white',
        margin: 4,
        alignItems: 'center',
        justifyContent: 'center',

    },
    tagauswahltextActive: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'blue',
        margin: 4,
        alignItems: 'center',
        justifyContent: 'center',
        //textDecorationLine: 'underline',

    },

    tagauswahlrahmen: {
        marginTop: 15,
        backgroundColor: '#032E5B',
        justifyContent: 'center',
        alignItems: 'center',
        width: frameWidth * 0.8,

    },
    tagauswahlrahmenActive: {
        marginTop: 15,
        backgroundColor: 'lightblue',
        justifyContent: 'center',
        alignItems: 'center',
        width: frameWidth * 0.8,



    },
    rahmen: {
        marginTop:20,
        paddingTop: 20,
        bottom: 30,
        width: 250,
    },
    rahmen1: {
        flexDirection: 'row',
        paddingTop: 20,
        bottom: 30,

    },
    farblicheauswahl: {
        borderRadius: 10,
        marginTop: 15,
        //borderWidth: 3,
        //borderColor: '#6b93ff',
        //borderRadius: 30,
        backgroundColor: '#032E5B',
        justifyContent: 'center',
        alignItems: 'center',


    },
    farblicheauswahlActive: {
        marginTop: 15,
        borderRadius: 10,
        //flexDirection: 'row',
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
        color: '#032E5B',
        margin: 4,
        alignItems: 'center',
        justifyContent: 'center',
        //textDecorationLine: 'underline',
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

export default TagAuswahlScreen;