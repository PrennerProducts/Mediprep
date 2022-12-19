import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Tablettenbox from '../components/Tablettenbox';
import { MedikamentenListe } from '../models/MedikamentenListe';
import TablettenStueckAnzeige from '../components/TablettenStueckAnzeige';
import WeiterButton from '../components/WeiterButton';
import OKButton from '../components/OKButton';
import NOKButton from '../components/NOKButton';
import { ScreenObserver } from '../models/ScreenObserver';
import { DummySchachtel } from '../data/DummySchachtelFile';
import { Schachtel } from '../models/Schachtel';
import ZurueckButton from "../components/ZurueckButton";

//import { DummySchachtel } from '../data/DummySchachtelFile';

export const Kontrolle = ({ navigation }) => {
    let OK_Count = false;
    ScreenObserver.aktuellerScreen = 'Kontrolle';
    let medikamentId = ScreenObserver.medikamente[0];
    console.log(ScreenObserver.medikamente);
    console.log(
        'ZeigeFaecherTest--------------',
        DummySchachtel.DummySchachtel.sumTabFach()
    );


    DummySchachtel.DummySchachtel.sumTabFach();

    const pressHandler5 = () => {
        navigation.navigate('MedikamentenanzeigeScreen');
    };

    const pressHandler6 = () => {
        navigation.navigate('GreatSuccessScreen');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.medNameText}>
                {["Befüllkontrolle"]}
            </Text>
            <Tablettenbox
                highlightFach={DummySchachtel.DummySchachtel.zeigeFaecher(medikamentId)}
            />
            <TablettenStueckAnzeige
                highlightFach={DummySchachtel.DummySchachtel.zeigeFaecher(medikamentId)}
                stueckProFachGroeße={DummySchachtel.DummySchachtel.sumTabFach()
                }
            />

            <View style = {styles.buttonsContainer}>
                <TouchableOpacity onPress={pressHandler5}>
                    <NOKButton style={styles.button}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={pressHandler6}>
                    <OKButton style={styles.button}/>
                </TouchableOpacity>
            </View>
        </View>


    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#cdf1fe',
    },
    tablettenProFachAnzeige: {
        backgroundColor: 'white',
        width: 400,
        height: 100,
    },
    medNameText: {
        fontSize: 55,
        fontWeight: 'bold',
        color: 'black',
    },
    buttonsContainer:{
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

export default Kontrolle;