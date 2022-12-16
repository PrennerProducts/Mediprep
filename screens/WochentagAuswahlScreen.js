import React from 'react';
import { StyleSheet, View } from 'react-native';
import { modelsTests } from '../models/ModelsTests';
import Logo from '../components/Logo';
import WochenTagAuswahl from "../components/WochenTagAuswahl";


const WochenTagAuswahlScreen = (props) => {
    return (
        <View style={styles.container}>
            <WochenTagAuswahlScreen/>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#032e5b',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default WochenTagAuswahlScreen;

