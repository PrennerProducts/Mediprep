import React from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import WochenTagAuswahl from "../components/WochenTagAuswahl";


export const WochenTagAuswahlScreen = (props) => {

    return (
        <View style={styles.container}>
            <Text>Hallo</Text>
            <WochenTagAuswahl/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: 400,
        height: 380,
    },
});

export default WochenTagAuswahlScreen;
