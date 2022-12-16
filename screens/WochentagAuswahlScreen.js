import React, {useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import moment from "moment";
const finalAuswahl = [0,0,0,0,0,0,0];

export const WochenTagAuswahl = () => {

    let currentDate = moment().format('ll').toString(); //.format('dddd') für WeekDay
    let currentWeekday = moment().format('dddd').toString()
    return (
        <View style={styles.container4}>
            <Text>Bitte wählen Sie die gewünschten Wochentage:</Text>
            <Text>Heutiges Datum: {currentWeekday} {currentDate}</Text>
            <View style={styles.rahmen}>
                <WochenTag wochenTag={'MO'} name="Monday"  id='0'/>
                <WochenTag wochenTag={'DI'} name="Tuesday" id='1'/>
                <WochenTag wochenTag={'MI'} name="Wednesday" id='2'/>
                <WochenTag wochenTag={'DO'} name="Thursday" id='3'/>
                <WochenTag wochenTag={'FR'} name="Friday" id='4'/>
                <WochenTag wochenTag={'SA'} name="Saturday" id='5'/>
                <WochenTag wochenTag={'SO'} name="Sunday" id='6'/>
            </View>
            <View style={styles.container3}>
                <TouchableOpacity
                    onPress={listArray}
                    style={styles.container2}>
                    <View >
                        <Text>Weiter</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );


};
const WochenTag = (props) => {

    return (
        <View style={styles.farblicheauswahl}>
            <Text style={styles.wochentag}>{props.wochenTag}</Text>
            <TouchableOpacity><Farbauswahl weekday={props.id}/></TouchableOpacity>
        </View>
    );
};

const Farbauswahl = (props) => {
    const [active, setActive] = useState(0);

    return (

        <View style={styles.screen}>
            <TouchableOpacity
                onPress={active === 0 ? () => [setActive(1),finalAuswahl[props.weekday] = 1]: () => [setActive(0), finalAuswahl[props.weekday] = 0]}
                style={active === 0 ? [styles.roundButton1] : styles.roundButton1active}>
            </TouchableOpacity>
        </View>
    );

};

const listArray = () => {
    console.log('-')
    for (let i = 0; i < 7; i++) {
        console.log(finalAuswahl[i])
    }
};


const styles = StyleSheet.create({


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
    container4: {
        backgroundColor: 'white',
        width: 407,
        height: 380,

    },
    container2: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '30%',
        height: '30%',
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: 'lightblue',
        elevation: 10,
        margin: 10,
    }, container3: {
        alignItems:'flex-end'

    },
});

export default WochenTagAuswahl;
