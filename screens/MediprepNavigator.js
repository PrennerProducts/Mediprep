// Test

import { setStatusBarBackgroundColor } from 'expo-status-bar';
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator, HeaderStyleInterpolators } from 'react-navigation-stack';

import Homescreen from './Homescreen';
import Ladebildschirm from './Ladebildschirm';

import Befullungstarten from './MedikamenteVorbereiten';
import GreatSuccessScreen from './GreatSuccessScreen';
import MedikamentenUebersichtScreen from './MedikamentenUebersichtScreen';
import WochenTagAuswahlScreen from './WochentagAuswahlScreen';
import MedikamentenanzeigeScreen from './MedikamentenanzeigeScreen';
import MedikamentenanzeigeScreen2 from './MedikamentenanzeigeScreen2';

const screens = {
    Homescreen: {
        screen: Homescreen,
        navigationOptions: ({ navigation }) => ({
            headerShown: false,
          }),
    },

    Ladebildschirm: {
        screen: Ladebildschirm,
        navigationOptions: ({ navigation }) => ({
            headerShown: false,
          }),
    },

    Befullungstarten: {
        screen: Befullungstarten,
        navigationOptions: ({ navigation }) => ({
            headerShown: false,
          }),
    },

    GreatSuccessScreen: {
        screen: GreatSuccessScreen,
        navigationOptions: ({ navigation }) => ({
            headerShown: false,
          }),
    },

    MedikamentenUebersichtScreen: {
        screen: MedikamentenUebersichtScreen,
        navigationOptions: ({ navigation }) => ({
            headerShown: false,
          }),
    },

    WochenTagAuswahlScreen: {
        screen: WochenTagAuswahlScreen,
        navigationOptions: ({ navigation }) => ({
            headerShown: false,
          }),
    },

    MedikamentenanzeigeScreen: {
        screen: MedikamentenanzeigeScreen,
        navigationOptions: ({ navigation }) => ({
            headerShown: false,
          }),
    },

    MedikamentenanzeigeScreen2: {
        screen: MedikamentenanzeigeScreen2,
        navigationOptions: ({ navigation }) => ({
            headerShown: false,
          }),
    },
}

const MediprepNavigator = createStackNavigator(screens);




export default createAppContainer(MediprepNavigator);
