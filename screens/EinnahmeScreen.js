import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React, {useState} from "react";
import { Dimensions } from 'react-native';
import ZurueckButton from "../components/ZurueckButton";
import WeiterButton from "../components/WeiterButton";
import {ScreenObserver} from "../models/ScreenObserver";

const {width} = Dimensions.get('window');
const frameWidth = width;


export const EinnahmeScreen = ({ navigation }) => {

    const pressHandlerBack = () => {
        navigation.navigate('Search');
    };
    const pressHandler = () => {
        navigation.navigate('Homescreen');
    };
    const pressHandlertaglich = () => {
        ScreenObserver.dayly = true;
        ScreenObserver.days = [1,1,1,1,1,1,1];
        navigation.navigate('TageszeitenScreen');
    };
    const pressHandlereinzeltage = () => {
        navigation.navigate('TagAuswahlScreen');
    };


    const TaglichAuswahl = (props) => {
        return(
            <TouchableOpacity onPress={pressHandlertaglich}
                style={styles.tagauswahlrahmen}
            >
                <Text style={styles.tagauswahltext}>
                    {props.auswahl}
                </Text>

            </TouchableOpacity>
        )
    }
    const EinzeltageAuswahl = (props) => {
        const [active, setActive] = useState(0);
        return(
            <TouchableOpacity onPress={pressHandlereinzeltage}
                              style={styles.tagauswahlrahmen}
            >
                <Text style={styles.tagauswahltext}>
                    {props.auswahl}
                </Text>

            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.container}>
            <Text style={styles.textfontINT}>
                Wie oft erfolgt die Einnahme?
            </Text>
            <View style={styles.rahmen1}>
                <TaglichAuswahl
                    auswahl="Täglich"
                />
            </View>
            <Text style={styles.textfontINT}>
                oder
            </Text>
            <View style={styles.rahmen1}>
                <EinzeltageAuswahl
                    auswahl="Einzeltage Auswahl"
                />
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity onPress={pressHandlerBack}>
                    <ZurueckButton style={styles.button} />
                </TouchableOpacity>
                <View style={styles.hidden} />
            </View>
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    hidden: {
        height: 82,
        width: 150,

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
    rahmen1: {
        flexDirection: 'row',
        paddingTop: 20,
        bottom: 30,

    },

    textfont: {
        marginBottom:5,
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        //elevation: 42,
        textAlign: 'center',
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
    tagauswahlrahmen: {
        marginTop: 15,
        backgroundColor: '#032E5B',
        justifyContent: 'center',
        alignItems: 'center',
        width: frameWidth * 0.8,

    },

});
export default EinnahmeScreen;