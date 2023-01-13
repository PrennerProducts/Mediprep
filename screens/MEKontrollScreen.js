import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView} from 'react-native';
import { ScreenObserver } from '../models/ScreenObserver';
import DefaultButton from '../components/DefaultButton';
import { Table, Row, Rows } from 'react-native-table-component';

const befuellungsTextausrechnen = (befuellung) => {
    let text = '\n';
    let tag = '';
    let zeit = '';
    for (let i = 0; i <28; i++){
        if (befuellung[i] != 0){
            if (i === 0) text += 'Montag\n';
            else if (i === 4) text += 'Dienstag\n';
            else if (i === 8) text += 'Mittwoch\n';
            else if (i === 12) text += 'Donnerstag\n';
            else if (i === 16) text += 'Freitag\n';
            else if (i === 20) text += 'Samstag\n';
            else if (i === 24) text += 'Sonntag\n';
            let rest = i % 4;
            if (rest === 0) zeit = '\t\t\t\tMorgen: ';
            else if (rest === 1) zeit = '\t\t\t\tMittag: ';
            else if (rest === 2) zeit = '\t\t\t\tAbend: ';
            else zeit = '\t\t\t\tNacht: ';
            text += tag + zeit + befuellung[i] + '\n';
        }
    }
    return text;
}

const MEKontrollScreen = ({ navigation }) => {
    let befuellung = [];
    for (let i = 0; i<28; i++){
           if (ScreenObserver.tempMed.befuellung[i] != 0) befuellung[i] = ScreenObserver.tempMed.befuellung[i];
           else befuellung[i] = '';
    }
    const befuellungTabelle = {

        HeadTable: ['MO', 'DI', 'MI', 'DO', 'FR', 'SA', 'SO'],
        DataTable: [
          [befuellung[0], befuellung[4], befuellung[8], befuellung[12], befuellung[16], befuellung[20], befuellung[24]],
          [befuellung[1], befuellung[5], befuellung[9], befuellung[13], befuellung[17], befuellung[21], befuellung[25]],
          [befuellung[3], befuellung[6], befuellung[10], befuellung[14], befuellung[18], befuellung[22], befuellung[26]],
          [befuellung[4], befuellung[7], befuellung[11], befuellung[15], befuellung[19], befuellung[23], befuellung[27]]
        ]
    }
    //let befuellungsText = befuellungsTextausrechnen(ScreenObserver.tempMed.befuellung);
    const pressHandlerBack = () => {
        //Zurueck-Button gedrueckt
        navigation.navigate('MedikamenteBearbeitenScreen');
    };
    const pressHandler = () => {
        //Weiter-Button gedrueckt
        navigation.navigate('MESuccessScreen');
    };
    const noimage = {
        uri: '../assets/noimage.png',
        width: 100,
        height: 250,
      };
    return (

        <View>   

            <ScrollView>
                <View style={styles.container}>  
                    <Text style={styles.textHeader}>Wollen Sie dieses Medikament speichern?</Text>
                    <Text style={styles.textMedikament} >{ScreenObserver.tempMed.name}</Text> 
                    <Image source={{uri: ScreenObserver.tempMed.bild}} style={styles.image} />
                </View>
                <View style={styles.tableContainer}>
                    <Table borderStyle={{borderWidth: 2, borderColor: '#0041C8'}}>
                        <Row data={befuellungTabelle.HeadTable} style={styles.HeadStyle} textStyle={styles.TableHeaderText}/>
                        <Rows data={befuellungTabelle.DataTable} textStyle={styles.TableText}/>
                    </Table>
                    <Image source={noimage} />
                </View>
            </ScrollView>

            <View style={styles.buttonsContainer}>
                <DefaultButton 
                    buttonStyle = {styles.buttonAbbruch} 
                    textstyle = {styles.buttonAbbruch}
                    buttonText = {'Verwerfen'}
                    pressHandler = {pressHandlerBack}
                    />
                <DefaultButton 
                    buttonStyle = {styles.buttonSpeichern} 
                    textstyle = {styles.buttonSpeichern}
                    buttonText = {'Speichern'}
                    pressHandler = {pressHandler}
                    />
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        top: 30,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    buttonsContainer: {
        position: 'absolute',
        left: 45,
        bottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonAbbruch: {
        height: 80,
        width: 150,
        right: 10,
        borderColor: '#6b93ff',
        alignItems: 'center',
        backgroundColor: '#7A003E',
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    buttonSpeichern: {
        height: 80,
        width: 150,
        left: 10,
        borderColor: '#6b93ff',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0041C8',
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    image: {
        height:200,
        width:200,
    },
    textHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    textMedikament: {
        //position: 'absolute',
        //top: 120,
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'left',
    },
    tableContainer: { 
        flex: 1,
        top: 20,
        padding: 10,
        paddingTop: 10,
        backgroundColor: '#ffffff',
        flexDirection: 'column',
    },
    HeadStyle: { 
        height: 80,
        alignContent: "center",
        backgroundColor: '#0041C8',
    },
    TableHeaderText: { 
        margin: 10,
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 15,
        color: '#ffffff',
    },
    TableText: { 
        margin: 10,
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 30,
        color: 'black',
    }
});

export default MEKontrollScreen;
