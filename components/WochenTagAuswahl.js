import React from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

export const WochenTagAuswahl = (props) => {
    return (
        <View style={styles.rahmen}>
            <WochenTag wochenTag={'MO'} id="Montag" />
            <WochenTag wochenTag={'DI'} id="Dienstag" />
            <WochenTag wochenTag={'MI'} id="Mittwoch" />
            <WochenTag wochenTag={'DO'} id="Donnerstag" />
            <WochenTag wochenTag={'FR'} id="Freitag" />
            <WochenTag wochenTag={'SA'} id="Samstag" />
            <WochenTag wochenTag={'SO'} id="Sontag" />
        </View>
    );
};

const WochenTag = (props) => {
    return (
        <View style={styles.farblicheauswahl}>
            <Text style={styles.wochentag}>{props.wochenTag}</Text>
            <Farbauswahl />
        </View>
    );
};

const Farbauswahl = (props) => {
    return (
        <View style={styles.tagauswahl}>
            <Text>X</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    rahmen: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '97%',
        height: '17%',
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: '#E6D3BB',
        elevation: 10,
        margin: 10,
    },
    text: {
        fontSize: 20,
    },
    farblicheauswahl: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '25%',
        height: '100%',
        margin: 4,
        marginBottom: 4,
        marginTop: 4,
    },
    tagauswahl: {
        flex: 0.5,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        width: '90%',
        height: '10%',
        elevation: 24,
        borderWidth: 1.5,
        marginBottom: '10%',
        margin: '5%',
        borderColor: 'black',
    },
    wochentag: {
        fontSize: 23,
        fontWeight: 'bold',
        color: '#00003B',
    },
});

export default WochenTagAuswahl;
