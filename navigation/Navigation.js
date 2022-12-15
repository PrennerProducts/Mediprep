import { createStackNavigator } from '@react-navigation/stack'
import { LogischeTestsScreen } from '../screens/LogischeTestsScreen';
import { Homescreen } from '../screens/Homescreen';
import { MedikamentenanzeigeScreen } from '../screens/MedikamentenanzeigeScreen';
import { StyleSheet, View, Button, Text, TouchableOpacity } from 'react-native';

const Stack = createStackNavigator();

const StackNav = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen
            name='Overview'
            component={NavigatorScreen}
            options={{
                title: 'Mediprep',
                headerStyle: {
                    backgroundColor: '#dcdcdc',
                }
            }}
            />
            <Stack.Screen name="Homescreen" component={Homescreen} />
            <Stack.Screen name="LogischeTestsScreen" component={LogischeTestsScreen} />
            <Stack.Screen name="MedikamentenanzeigeScreen" component={MedikamentenanzeigeScreen} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        top: 40,
        left: 20,
        borderRadius: 10,
        backgroundColor: 'rgba(21, 22, 48, 0.1)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 36,
        fontWeight: 'bold',
        color: 'black',
        elevation: 42,
      },
      button:{
        backgroundColor: 'white',
        height: 50,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
      },
});

export const MainNavigation = () => {
    return(
<StackNav/>
    )
}

const NavigatorScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Homescreen', { name: '' })}
                >
                <Text>Homescreen</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('LogischeTestsScreen', { name: '' })}
                >
                <Text>Model Tests ausfuehren</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('MedikamentenanzeigeScreen', { name: '', medikamentID: 3 })}
                >
                <Text>Medikament anzeigen</Text>
            </TouchableOpacity>
        </View>
    );
  };