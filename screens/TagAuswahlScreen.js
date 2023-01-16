import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ScreenObserver } from '../models/ScreenObserver';
import ZurueckButton from '../components/ZurueckButton';
import React, {useState} from "react";
import WeiterButton from "../components/WeiterButton";
import { SelectList } from 'react-native-dropdown-select-list'

let finalAuswahl = [0, 0, 0, 0];
let morgens=0;
let mittags=0;
let abends=0;
let nachts=0;




export const TageszeitenScreen = ({ navigation }) => {

    const [selectedValue, setSelectedValue] = useState(null);

    //Array bei jedem Neuladen in die Seite auf 0 setzen
    const pressHandlerBack = () => {
        ScreenObserver.dosierung = [0, 0, 0, 0];
        navigation.navigate('TagAuswahlScreen');
    };
    const pressHandler = () => {
   
        console.log(finalAuswahl)  //Variable finalAuswahl beinhaltet die ausgewählten Zeiten im ArrayStyle [morgens, mittags, abends, nachts] 
        alert('Auswahl:  ' + ScreenObserver.dosierung + 'Abends ' + abends);
        let finalAuswahl= [morgens, mittags, abends, nachts];
        
        ScreenObserver.dosierung = finalAuswahl;
    
        

        console.log('Dosierung:' ,ScreenObserver.dosierung);

        
        
        navigation.navigate('TageszeitenScreen');
    };
    //store the selected s value in variable abends
    const handleSelect = (s) => {
        abends = s;
        console.log('Abends: ', abends);
        alert('Auswahl:  ' + ScreenObserver.dosierung + 'Abends ' + abends);
        
    }





        const [selected, setSelected] = useState(null);
        
        const data = [
            {key:'1', value:'Nie einnehmen',  s:1},
            {key:'2', value:'1/4 Tablette', s:1.25},
            {key:'3', value:'1/2 Tablette', s:0.5},
            {key:'4', value:'1 Tablette', s:1},
            {key:'5', value:'1 1/2 Tabletten', s:1.5},
            {key:'6', value:'2', s:'2'},
            {key:'7', value:'3 Tabletten', s:3},
            {key:'8', value:'4 Tabletten', s:4},
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
            save="s" 
            let f
            />
            </View>
            <View style={styles.container3}>
            <Text style={styles.textfontzeit}>Mittags </Text>
            <SelectList 
            search={false}
            defaultOption={data[0]}
            setSelected={(val) => setSelected(val)} 
            data={data} 
            save="s"
            let mittags="s" />

            </View>
            <View style={styles.container3}>
            <Text style={styles.textfontzeit}>Abends </Text>
        
            <SelectList 
            search={false}
            defaultOption={data[0]}
            setSelected={(val) => setSelected(val)}
            onChange={(value) => setSelectedValue(value)}
            data={data}
            save="s"

            
            />
            </View>
            <View style={styles.container3}>
            <Text style={styles.textfontzeit}>Nachts </Text>
            <SelectList 
            search={false}
            defaultOption={data[0]}
            setSelected={(val) => setSelected(val)} 
            data={data} 
            save="value"
            let nachts="s" />
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
