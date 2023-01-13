import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
const finalAuswahl = [0, 0, 0, 0, 0, 0, 0];
const dataAuswahl = [0,0,0,0,0,0,0];
import WeiterButton from '../components/WeiterButton';

export const WochenTagAuswahlScreen = ({navigation}) => {

    const pressHandler6 = () => {
        navigation.navigate('MedikamentenUebersichtScreen');
    };

    return (
        <View style={styles.container4}>
            <Text style={styles.textfont}>
                Bitte wählen Sie die gewünschten Wochentage:
            </Text>
            <Text style={styles.textfont}>
                Heutiges Datum: {currentWeekday} {currentDate}
            </Text>
            <View style={styles.rahmen}>

                <WochenTag wochenTag={'MO'} name="Monday" id="0" />
                <WochenTag wochenTag={'DI'} name="Tuesday" id="1" />
                <WochenTag wochenTag={'MI'} name="Wednesday" id="2" />
                <WochenTag wochenTag={'DO'} name="Thursday" id="3" />
                <WochenTag wochenTag={'FR'} name="Friday" id="4" />
                <WochenTag wochenTag={'SA'} name="Saturday" id="5" />
                <WochenTag wochenTag={'SO'} name="Sunday" id="6" />
            </View>
            <TouchableOpacity onPress={listArray} style={styles.container2}>
                <Text style={styles.textfont2}>Log</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={pressHandler6} style={styles.weiterButton}>
                <WeiterButton />
            </TouchableOpacity>

        </View>
    );
};
const WochenTag = (props) => {
    return (
        <View style={styles.farblicheauswahl}>

            <Text style={styles.wochentag}>{props.name}</Text>
            <View style={styles.kugel}>
                <TouchableOpacity>
                    <Farbauswahl weekday={props.id} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const Farbauswahl = (props) => {
    const [active, setActive] = useState(0);

    return (
        <View style={styles.screen}>
            <TouchableOpacity
                onPress={
                    active === 0
                        ? () => [setActive(1), (finalAuswahl[props.weekday] = 1)]
                        : () => [setActive(0), (finalAuswahl[props.weekday] = 0)]
                }
                style={active === 0 ? [styles.roundButton1] : styles.roundButton1active}
            ></TouchableOpacity>
        </View>
    );
};

const listArray = () => {
    console.log('-')
    for (let i = 0; i < 7; i++) {
        console.log(finalAuswahl[i])
        console.log(dataAuswahl[i])
    }
};


const styles = StyleSheet.create({
    rahmen: {
        borderColor: 'gray',
        marginTop: 20,
        width:200,
        marginLeft:60,
    },

    farblicheauswahl: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',


    },

    wochentag: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'black',
        marginRight:10,
        width:200,
        height:50,
    },

    roundButton1: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        backgroundColor: 'white',
        marginTop: 7,
        elevation: 10,
    },
    roundButton1active: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        backgroundColor: '#ee9a49',
        marginTop: 7,
        elevation: 10,
    },
    container4: {
        backgroundColor: '#cdf1fe',
        flex:1,
        alignItems: 'flex-start',


    },
    container2: {
        justifyContent: 'center',
        alignItems: 'center',

        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: 'white',
        elevation: 10,
        margin: 10,
    },
    container3: {
        width: '50%',
        height: '30%',
    },
    textfont: {
        marginLeft: 12,
        marginTop: 20,
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',
        elevation: 42,
        textAlign: 'left',
    },
    textfont2: {
        fontSize:30,
        fontWeight: 'bold',
        color: 'black',
        elevation: 42,
        textAlign: 'left',
    },

    weiterButton: {
        marginLeft:25,
    },
    kugel: {
        justifyContent: 'flex-end',
    },

});

export default WochenTagAuswahlScreen;


