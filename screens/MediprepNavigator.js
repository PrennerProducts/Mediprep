// Test

import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Homescreen from './Homescreen';
import Ladebildschirm from './Ladebildschirm';

import MedBearbeiten from './MedikamenteVorbereiten';

const screens = {
    Homescreen: {
        screen: Homescreen
    },

    Ladebildschirm: {
        screen: Ladebildschirm
    },

    MedBearbeiten: {
        screen: MedBearbeiten

}
}

const MediprepNavigator = createStackNavigator(screens);


export default createAppContainer(MediprepNavigator);
