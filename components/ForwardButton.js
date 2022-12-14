/* Button navigiert weiter Robert*/
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const ForwardButton = (props) => {
    return (
        <View style={styles.container}>
        <TouchableOpacity onPress={props.onPress}>
            <Ionicons name="ios-arrow-forward" size={30} color="white" />
        </TouchableOpacity>
        </View>
    );
    };

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 40,
        right: 20,
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: 'rgba(21, 22, 48, 0.1)',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default ForwardButton;
