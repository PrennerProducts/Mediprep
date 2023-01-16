import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ScreenObserver } from '../models/ScreenObserver';
import ZurueckButton from '../components/ZurueckButton';
import React, {useState} from "react";
import WeiterButton from "../components/WeiterButton";
//import { SelectList } from 'react-native-dropdown-select-list'



export const TageszeitenScreen = ({ navigation }) => {
    //Array bei jedem Neuladen in die Seite auf 0 setzen
    const pressHandlerBack = () => {
        ScreenObserver.dayly = false;
        ScreenObserver.days = [];
        navigation.navigate('Homescreen');
    };
    const pressHandler = () => {
        
        
        navigation.navigate('TageszeitenScreen');
    };

        const [selected, setSelected] = React.useState("");
        
        const data = [
            {key:'1', value:'Nie einnehmen',  s:'1'},
            {key:'2', value:'1/4 Tablette', s:'1/4'},
            {key:'3', value:'1/2 Tablette', s:'1/2'},
            {key:'4', value:'1 Tablette', s:'1'},
            {key:'5', value:'1 1/2 Tabletten', s:'1 1/2'},
            {key:'6', value:'2 Tabletten', s:'2'},
            {key:'7', value:'3 Tabletten', s:'3'},
            {key:'8', value:'4 Tabletten', s:'4'},
        ]

    return (
        <View style={styles.container}>
            <Text style={styles.textfontINT}>
                Wie oft möchten Sie die Medikamente einnehmen?
            </Text>
           <View style={styles.container3}>
            <Text style={styles.textfontzeit}>Morgens </Text>
            <SelectList 
            search={false}
            defaultOption={data[0]}
            setSelected={(val) => setSelected(val)} 
            data={data} 
            save="s" />
            </View>
            <View style={styles.container3}>
            <Text style={styles.textfontzeit}>Mittags </Text>
            <SelectList 
            search={false}
            defaultOption={data[0]}
            setSelected={(val) => setSelected(val)} 
            data={data} 
            save="value" />
            </View>
            <View style={styles.container3}>
            <Text style={styles.textfontzeit}>Abends </Text>
            <SelectList 
            search={false}
            defaultOption={data[0]}
            setSelected={(val) => setSelected(val)} 
            data={data} 
            save="value" />
            </View>
            <View style={styles.container3}>
            <Text style={styles.textfontzeit}>Nachts </Text>
            <SelectList 
            search={false}
            defaultOption={data[0]}
            setSelected={(val) => setSelected(val)} 
            data={data} 
            save="value" />
            </View>
            
            <View style={styles.buttonsContainer}>
                <TouchableOpacity onPress={pressHandlerBack}>
                    <ZurueckButton style={styles.button} />
                </TouchableOpacity>
                <TouchableOpacity onPress={pressHandler}>
                    <WeiterButton style={styles.button} />
                </TouchableOpacity>
            </View>
        </View>
    );

    
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    textfont: {
        marginBottom:5,
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        //elevation: 42,
        textAlign: 'center',
    },
    textfontzeit: {
        marginBottom:5,
        fontSize: 20,
        color: 'black',
        //elevation: 42,
        textAlign: 'center',
    },
    textfontINT: {
        margin: 5,
        marginTop: 50,
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        //elevation: 42,
        textAlign: 'center',
    },

    tagauswahltext: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'white',
        margin: 4,
        alignItems: 'center',
        justifyContent: 'center',

    },
    tagauswahltextActive: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'white',
        margin: 4,
        alignItems: 'center',
        justifyContent: 'center',
        textDecorationLine: 'underline',

    },

    tagauswahlrahmen: {
        marginTop: 15,
        backgroundColor: '#032E5B',
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,

    },
    tagauswahlrahmenActive: {
        marginTop: 15,
        backgroundColor: 'lightblue',
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,



    },
    rahmen: {
        paddingTop: 20,
        bottom: 30,
        width: 250,
    },
    rahmen1: {
        flexDirection: 'row',
        paddingTop: 20,
        bottom: 30,

    },
    farblicheauswahl: {
        marginTop: 15,
        //flexDirection: 'row',
        //borderWidth: 3,
        //borderColor: '#6b93ff',
        //borderRadius: 30,
        backgroundColor: '#032E5B',
        justifyContent: 'center',
        alignItems: 'center',


    },
    farblicheauswahlActive: {
        marginTop: 15,
        //flexDirection: 'row',
        //borderWidth: 5,
        //borderColor: '#6b93ff',
        //borderRadius: 30,
        backgroundColor: 'lightblue',
        justifyContent: 'center',
        alignItems: 'center',
    },

    wochentag: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'white',
        margin: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    wochentagActive: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'white',
        margin: 4,
        alignItems: 'center',
        justifyContent: 'center',
        textDecorationLine: 'underline',
    },
    buttonsContainer: {
        position: 'absolute',
        bottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        height: 120,
        width: 50,
        borderWidth: 3,
        borderColor: '#6b93ff',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#02005c',
        elevation: 24,
    },
    container3: {
     
        marginTop: 30,
        bottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default TageszeitenScreen
