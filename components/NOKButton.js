import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';

const NOKButton = () => {
    return (
        <View style={styles.button}>
            <Text style={styles.font}>Anzahl falsch</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        height: 80,
        width: 150,
        borderWidth: 3,
        borderColor: 'red',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        elevation: 24,
    },
    font: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white',
    },
});

export default NOKButton;