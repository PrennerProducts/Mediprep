import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';

const NOKButton = () => {
    return (
        <View style={styles.button}>
            <Text style={styles.font}>Falsch</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        height: 80,
        width: 150,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#900028',
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 10,
    },
    font: {
        fontSize: 36,
        fontWeight: 'bold',
        color: 'white',
    },
});

export default NOKButton;