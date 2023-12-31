import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Homescreen from './Homescreen';
import Ladebildschirm from './Ladebildschirm';
import GreatSuccessScreen from './GreatSuccessScreen';
import MedikamentenUebersichtScreen from './MedikamentenUebersichtScreen';
import WochenTagAuswahlScreen from './WochentagAuswahlScreen';
import MedikamentenanzeigeScreen from './MedikamentenanzeigeScreen';
import KontrollAnzeigeScreen from './KontrollAnzeigeScreen';
import CustomSearch from './Search';
import MedikamenteBearbeitenScreen from './MedikamenteBearbeitenScreen';
import FalscheBefuellung from "./FalscheBefuellung";
import TagAuswahlScreen from "./TagAuswahlScreen";
import TageszeitenScreen from './TageszeitenScreen';
import Search from "./Search";
import MEKontrollScreen from './MEKontrollScreen';
import MESuccessScreen from './MESuccessScreen';
import EinnahmeScreen from './EinnahmeScreen';
/* Navigation Anleitung:

1. Importiere den bereits erstellten Screen den du verwenden möchtest
2. Füge ihn in die screens Konstante ein (Achtung, nicht den Screen als erstes reihen, da dies automatisch der Startbildschirm ist beim Starten der App)
3. In deinem neuen Screen.js File füge folgendes ein:
- PressHandler (verwende bitte eine neue Nummer, damit es nicht zu Verwechslungen kommt)
- Übergibe {navigation} als Parameter in deiner Screen Funktion
- Übergib dem TouchableOpacity mit onPress den pressHandler
4. Teste ob der Button funktioniert, falls nicht hilft dir Robert gerne weiter :)


*/

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

  TageszeitenScreen: {
    screen: TageszeitenScreen,
    navigationOptions: ({ navigation }) => ({
      headerShown: false,
    }),
  },
  

  TagAuswahlScreen: {
    screen: TagAuswahlScreen,
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

  Search: {
    screen: Search,
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

  MedikamenteBearbeitenScreen: {
    screen: MedikamenteBearbeitenScreen,
    navigationOptions: ({ navigation }) => ({
      headerShown: false,
    }),
  },
  
  FalscheBefuellung: {
    screen: FalscheBefuellung,
    navigationOptions: ({ navigation }) => ({
      headerShown: false,
    }),
  },

  MEKontrollScreen: {
    screen: MEKontrollScreen,
    navigationOptions: ({ navigation }) => ({
      headerShown: false,
    }),
  },

  MESuccessScreen: {
    screen: MESuccessScreen,
    navigationOptions: ({ navigation }) => ({
      headerShown: false,
    }),
  },
  EinnahmeScreen: {
    screen: EinnahmeScreen,
    navigationOptions: ({ navigation }) => ({
      headerShown: false,
    }),
  },


};


const MediprepNavigator = createStackNavigator(screens);

export default createAppContainer(MediprepNavigator);
