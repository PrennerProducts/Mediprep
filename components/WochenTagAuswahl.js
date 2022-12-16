import React, {useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import moment from "moment";

export const WochenTagAuswahl = () => {
    let currentDate = moment(); //.format('dddd') für WeekDay
    let currentWeekday = moment().format('dddd')
    console.log(currentWeekday); //[1] LOG current Date
    return(
        <View style={styles.container}>
            <Text>Bitte wählen Sie die gewünschten Wochentage:</Text>
            <Text>Heutiges Datum: %currentDate</Text>
            <View style={styles.rahmen}>
                <WochenTag wochenTag={'MO'} id="Monday"  />
                <WochenTag wochenTag={'DI'} id="Tuesday" />
                <WochenTag wochenTag={'MI'} id="Wednesday" />
                <WochenTag wochenTag={'DO'} id="Thursday" />
                <WochenTag wochenTag={'FR'} id="Friday" />
                <WochenTag wochenTag={'SA'} id="Saturday" />
                <WochenTag wochenTag={'SO'} id="Sunday"/>
            </View>
        </View>
    );
};
const WochenTag = (props) => {

    return (
        <View style={styles.farblicheauswahl}>
            <Text style={styles.wochentag}>{props.wochenTag}</Text>
            <TouchableOpacity><Farbauswahl active={0} /></TouchableOpacity>
        </View>
    );
};

const Farbauswahl = (props) => {
    console.log(props.active)
    const [active, setActive] = useState(0);

    return (

        <View style={styles.screen}>
            <TouchableOpacity
                onPress={active === 0 ? () => [setActive(1)]: () => setActive(0)}
                style={active === 0 ? [styles.roundButton1] : styles.roundButton1active}>
            </TouchableOpacity>
        </View>
    );
};





const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '97%',
        height: '60%',
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: '#E6D3BB',
        elevation: 10,
        margin: 10,
    },

    rahmen: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '97%',
        height: '40%',
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: '#a6aed2',
        elevation: 10,
        margin: 10,
    },

    farblicheauswahl: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom:5,
    },

    wochentag: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#00003B',
    },

    roundButton1: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        backgroundColor: 'white',
        marginTop:7,
    },
    roundButton1active: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        backgroundColor: '#ee9a49',
        marginTop:7,
    },
});

export default WochenTagAuswahl;
