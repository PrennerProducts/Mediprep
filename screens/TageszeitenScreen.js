import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ScreenObserver } from '../models/ScreenObserver';
import ZurueckButton from '../components/ZurueckButton';
import React, {useState} from "react";
import WeiterButton from "../components/WeiterButton";
import { SelectList } from 'react-native-dropdown-select-list'



export const TageszeitenScreen = ({ navigation }) => {
    let finalAuswahl = [0, 0, 0, 0];
    //console.log(ScreenObserver.days);

    //Array bei jedem Neuladen in die Seite auf 0 setzen
    const pressHandlerBack = () => {
        ScreenObserver.dayly = false;
        ScreenObserver.days = [];
        for (let i = 0; i<28; i++){
            ScreenObserver.tempMed.befuellung[i] = 0;
        }
        ScreenObserver.dosierung = [0, 0, 0, 0];
        navigation.replace('EinnahmeScreen');
        
    };
    const pressHandler = () => {
        ScreenObserver.dosierung = [selectedMorgen,selectedMittag,selectedAbends,selectedNacht];
        for (let i = 0; i<7; i++){
            if (ScreenObserver.days[i] === 1){
                ScreenObserver.tempMed.befuellung[i*4] = selectedMorgen;
                ScreenObserver.tempMed.befuellung[(i*4)+1] = selectedMittag;
                ScreenObserver.tempMed.befuellung[(i*4)+2] = selectedAbends;
                ScreenObserver.tempMed.befuellung[(i*4)+3] = selectedNacht;
            }
        }

        //console.log('FinalAuswahl' +finalAuswahl);  //Variable finalAuswahl beinhaltet die ausgewählten Zeiten im ArrayStyle [morgens, mittags, abends, nachts]
        //alert('Auswahl:  ' + ScreenObserver.dosierung );


        //console.log('Dosierung:' +ScreenObserver.dosierung);

        navigation.navigate('MEKontrollScreen');
    };



    const [selectedMorgen, setSelectedMorgen] = useState(null);
    const [selectedMittag, setSelectedMittag] = useState(null);
    const [selectedAbends, setSelectedAbends] = useState(null);
    const [selectedNacht, setSelectedNacht] = useState(null);


    const data = [
        {key:'0', value:'  ----   '},
        {key:'0.25', value:'  1/4  '},
        {key:'0.5', value:' 1/2 '},
        {key:'1', value:'    1    '},
        {key:'1.5', value:'1 1/2'},
        {key:'2', value:'    2   '},
        {key:'3', value:'    3   '},
        {key:'4', value:'    4   '}
       
    ]

    return (
        <View style={styles.container}>
            <Text style={styles.textfontINT}>
                Bitte geben Sie die verordnete Dosierung an:
            </Text>
            <View style={styles.container2}>
            <View style={styles.container3}/>
            <View style={styles.container3}>
                <Text style={styles.textfontzeit}>Morgen      </Text>
                <SelectList
                    style={styles.dropdown}
                    containerStyle={styles.shadow}
                    inputStyles={{fontSize: 20}}
                    dropdownTextStyles={{fontSize: 20}}
                    search={false}
                    defaultOption={data[0]}
                    setSelected={(val) => setSelectedMorgen(val)}
                    //setSelect={(val) => handleSelectmorgens(val)}
                    data={data}
                    save="key"

                    


                />
            </View>
            <View style={styles.container3}>
                <Text style={styles.textfontzeit}>Mittag        </Text>
                <SelectList
                    style={styles.dropdown}
                    containerStyle={styles.shadow}
                    inputStyles={{fontSize: 20}}
                    dropdownTextStyles={{fontSize: 20}}
                    search={false}
                    defaultOption={data[0]}
                    setSelected={(val) => setSelectedMittag(val)}
                    //setSelected={(val) => handleSelectmittags(val)}
                    data={data}
                    save="key"
                    
                />

            </View>
            <View style={styles.container3}>
                <Text style={styles.textfontzeit}>Abend        </Text>

                <SelectList
                    style={styles.dropdown}
                    containerStyle={styles.shadow}
                    inputStyles={{fontSize: 20}}
                    dropdownTextStyles={{fontSize: 20}}
                    search={false}
                    defaultOption={data[0]}
                    setSelected={(val) => setSelectedAbends(val)}
                    //setSelected={(val) => handleSelectabends(val)}
                    data={data}
                    save="key"


                />
            </View>
            <View style={styles.container3}>
                <Text style={styles.textfontzeit}>Nacht         </Text>
                <SelectList
                    style={styles.dropdown}
                    containerStyle={styles.shadow}
                    inputStyles={{fontSize: 20}}
                    dropdownTextStyles={{fontSize: 20}}
                    search={false}
                    defaultOption={data[0]}
                    setSelected={(val) => setSelectedNacht(val)}
                    //setSelected={(val) => handleSelectnachts(val)}
                    data={data}
                    save="key"
                />
            </View>
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
        textAlign: 'left',
    },
    textfontzeit: {
        marginBottom:5,
        fontSize: 30,
        color: 'black',
        //elevation: 42,
        textAlign: 'left',
        fontWeight: 'bold',
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
        alignItems: 'left',
        justifyContent: 'left',

    },
    tagauswahltextActive: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'white',
        margin: 4,
        //alignItems: 'center',
        justifyContent: 'center',
        textDecorationLine: 'underline',

    },

    tagauswahlrahmen: {
        marginTop: 15,
        backgroundColor: '#032E5B',
        justifyContent: 'left',
        //alignItems: 'center',
        width: 100,

    },
    tagauswahlrahmenActive: {
        marginTop: 15,
        backgroundColor: 'lightblue',
        justifyContent: 'left',
        //alignItems: 'center',
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
    container2: {
        marginTop: 30,
        bottom: 10,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        align: 'left',
      
        
    },
    container3: {
        marginTop: 30,
        bottom: 10,
        flexDirection: 'row',
        align: 'flex-start',
        justifyContent: 'flex-start',
    },

    dropdown: {
        backgroundColor: 'white',
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
        marginTop: 20,
    },

    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
});

export default TageszeitenScreen
