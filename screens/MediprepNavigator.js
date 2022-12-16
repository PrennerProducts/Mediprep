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


const screens = {
    Homescreen: {
        screen: Homescreen,

    },

    Ladebildschirm: {
        screen: Ladebildschirm
    },

    Befullungstarten: {
        screen: Befullungstarten

},
    GreatSuccessScreen: {
        screen: GreatSuccessScreen

    },
    MedikamentenUebersichtScreen: {
        screen: MedikamentenUebersichtScreen

    },
    WochenTagAuswahlScreen: {
        screen: WochenTagAuswahlScreen

    },


}

const MediprepNavigator = createStackNavigator(screens);




export default createAppContainer(MediprepNavigator);
