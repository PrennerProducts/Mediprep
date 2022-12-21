import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import pfeil from '../assets/pfeil.png';


const TablettenSummeAnzeige = (props) => {

    return (
        <View style={styles.tablettenbox}>
            <Tablettenfachcontainer
                highlightFach={props.highlightFach}
                stueckProFachGroeße = {props.stueckProFachGroeße}
                containerId={0}
                containerName=""
            />
            <Tablettenfachcontainer
                highlightFach={props.highlightFach}
                stueckProFachGroeße = {props.stueckProFachGroeße}
                containerId={1}
                containerName=""
            />
            <Tablettenfachcontainer
                highlightFach={props.highlightFach}
                stueckProFachGroeße = {props.stueckProFachGroeße}
                containerId={2}
                containerName=""
            />
            <Tablettenfachcontainer
                highlightFach={props.highlightFach}
                stueckProFachGroeße = {props.stueckProFachGroeße}
                containerId={3}
                containerName=""
            />


        </View>
    );
};

const Tablettenfachcontainer = (props) => {

    return (
        <View style={styles.tablettenfachContainer}>
            <Tablettenfach
                fachId={props.containerId}
                highlightFach={props.highlightFach}
                stueckProFachGroeße={props.stueckProFachGroeße}
            />
    </View>
       );
};


const Tablettenfach = (props) => {

    let mystyle;
    function chechHighlightFach(fachId) {
        if (props.fachId === fachId) {
            return true;

        }
    }

    if (chechHighlightFach(props.highlightFach, props.fachId)) {
        mystyle = styles.tablettenfach_pfeil;
        return (
            <View style={mystyle}>
                <Image
                    source={pfeil}
                    style={{
                        width: 80,
                        height: 80,
                        marginTop: 0,
                        position: 'absolute',
                        top: 0,
                    }}
                />
                <View style={styles.tabblettenfachHeading}>
                    <Text style={styles.stueckStyle}>Anzahl</Text>
                    <Text style={styles.zahlStyle}>
                        {props.stueckProFachGroeße[props.fachId][0]} Ganze
                    </Text>
                    <Text style={styles.zahlStyle}>
                        {props.stueckProFachGroeße[props.fachId][1]} Halbe
                    </Text>
                    <Text style={styles.zahlStyle}>
                        {props.stueckProFachGroeße[props.fachId][2]} Viertel
                    </Text>
                </View>

            </View>
        );
    } else {
        return <View></View>;
    }
};


const styles = StyleSheet.create({
    tablettenbox: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '97%',
        height: '37%',
        margin: 10,
        magrinTop: 0,
    },
    text: {
        fontSize: 20,
    },
    tablettenfachContainer: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '25%',
        height: '100%',
        margin: 4,
        marginBottom: 4,
        marginTop: 0,
    },
    tablettenfach: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '84%',
        height: '10%',
        marginBottom: '10%',
        margin: '5%',
        borderWidth: 1,
    },
    tablettenfach_pfeil: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '84%',
        height: '10%',
        marginBottom: '10%',
        margin: '5%',
    },
    tabblettenfachHeading: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#00003B',
        marginTop: 70,
        marginLeft:20,
        marginRight:20,
    },
    zahlStyle: {
        width: '100%',
        height: '20%',
        flexDirection: 'row',
        color: 'black',
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: 27,
        marginTop: 10,
    },
    stueckStyle: {
        width: '200%',
        height: '20%',
        flexDirection: 'row',
        color: 'black',
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: 27,
        marginTop: 0,

    },
});

export default TablettenSummeAnzeige;