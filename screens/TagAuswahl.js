import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ScreenObserver } from '../models/ScreenObserver';
import ZurueckButton from '../components/ZurueckButton';
import {useState} from "react";
const finalAuswahl = [0, 0, 0, 0, 0, 0, 0];

export const WochenTagAuswahlScreen = ({ navigation }) => {

    const pressHandlerBack = () => {
        navigation.navigate('Homescreen');
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
                <View style={styles.hidden} />
            </View>
        </View>
    );
};
const WochenTag = (props) => {
    const [active, setActive] = useState(0);
    const pressHandler6 = () => {
        //console.log('Ausgewählt: ' + datenbankEintrag[props.id]);
        ScreenObserver.wochentag = props.id;
        //console.log(ScreenObserver);
        props.navigation3.navigate('MedikamentenanzeigeScreen');
    };
    return (
        <TouchableOpacity onPress={
            active === 0
            ? () => [setActive(1), (finalAuswahl[props.weekday] = 1)]
            : () => [setActive(0), (finalAuswahl[props.weekday] = 0)]
        }
        style={active === 0 ? [styles.farblicheauswahl] : styles.farblicheauswahlActive}>

            <View>

                <Text style={styles.wochentag}>{props.display}</Text>

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
    kugel: {
        justifyContent: 'flex-end',
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
