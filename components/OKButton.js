import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';

const OKButton = () => {
    return (
        <View style={styles.button}>
            <Text style={styles.font}>Anzahl korrekt</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        height: 80,
        width: 150,
        borderWidth: 3,
        borderColor: 'green',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
        elevation: 24,
        marginLeft: 10,
        marginRight: 10,
    },
    font: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white',
    },
});

export default OKButton;