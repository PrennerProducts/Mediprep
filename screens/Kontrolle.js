import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Tablettenbox from '../components/Tablettenbox';
import { MedikamentenListe } from '../models/MedikamentenListe';
import TablettenStueckAnzeige from '../components/TablettenStueckAnzeige';
import WeiterButton from '../components/WeiterButton';
import { ScreenObserver } from '../models/ScreenObserver';
import { DummySchachtel } from '../data/DummySchachtelFile';
import { Schachtel } from '../models/Schachtel';

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

            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity
                    onPress={OK_Count ? pressHandler5 : pressHandler6}
                    style={styles.weiterButton}
                >
                    <WeiterButton />
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
});

export default Kontrolle;