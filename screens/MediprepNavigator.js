import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Homescreen from './Homescreen';
import Ladebildschirm from './Ladebildschirm';
import Befullungstarten from './MedikamenteVorbereiten';
import GreatSuccessScreen from './GreatSuccessScreen';
import MedikamentenUebersichtScreen from './MedikamentenUebersichtScreen';
import WochenTagAuswahlScreen from './WochentagAuswahlScreen';
import MedikamentenanzeigeScreen from './MedikamentenanzeigeScreen';
import Kontrolle from './Kontrolle';
import KontrollAnzeigeScreen from "./KontrollAnzeigeScreen";

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

  Kontrolle: {
    screen: Kontrolle,
    navigationOptions: ({ navigation }) => ({
      headerShown: false,
    }),
  },
  KontrollAnzeigeScreen: {
    screen: KontrollAnzeigeScreen,
    navigationOptions: ({ navigation }) => ({
      headerShown: false,
    }),
  },
};

const MediprepNavigator = createStackNavigator(screens);

export default createAppContainer(MediprepNavigator);
