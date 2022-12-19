import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Tablettenbox from '../components/Tablettenbox';
import OKButton from '../components/OKButton';
import NOKButton from '../components/NOKButton';
import { ScreenObserver } from '../models/ScreenObserver';
import { DummySchachtel } from '../data/DummySchachtelFile';
import { Schachtel } from '../models/Schachtel';
import TablettenSummeAnzeige from "../components/TablettenSummeAnzeige";


export const Kontrolle = ({ navigation }) => {
    let OK = false;
    ScreenObserver.aktuellerScreen = 'Kontrolle';
    let FachId = ScreenObserver.fach[0];
    console.log(ScreenObserver.fach);
    console.log(
        'ZeigeFaecherTest--------------',
        DummySchachtel.DummySchachtel.sumTabFach(ScreenObserver.wochentag*4, (ScreenObserver.wochentag*4)+3));


    //DummySchachtel.DummySchachtel.sumTabFach(ScreenObserver.wochentag*4, (ScreenObserver.wochentag*4)+3);

    const pressHandlerOK = () => {
        navigation.navigate('MedikamentenanzeigeScreen');
    };

    const pressHandlerNOK = () => {
        navigation.navigate('GreatSuccessScreen');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.medNameText}>
                {["Befüllkontrolle"]}
            </Text>
            <Tablettenbox
                highlightFach={DummySchachtel.DummySchachtel.zeigeFaecher(FachId)}
            />
            <TablettenSummeAnzeige
                //highlightFach={DummySchachtel.DummySchachtel.zeigeFaecher(FachId)}
                stueckProFachGroeße={DummySchachtel.DummySchachtel.sumTabFach(ScreenObserver.wochentag*4, (ScreenObserver.wochentag*4)+3)
                }
            />

            <View style = {styles.buttonsContainer}>
                <TouchableOpacity onPress={pressHandlerOK}>
                    <NOKButton style={styles.button}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={pressHandlerNOK}>
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