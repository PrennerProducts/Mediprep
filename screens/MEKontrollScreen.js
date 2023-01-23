import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView} from 'react-native';
import { ScreenObserver } from '../models/ScreenObserver';
import DefaultButton from '../components/DefaultButton';
import { Table, Row, } from 'react-native-table-component';
import { Dimensions } from 'react-native';
import { white } from 'color-name';

const {width} = Dimensions.get('window');
const frameWidth = width;

const DaytimesImage = () => {
    return (<Image source={require('../assets/IconsDaytimes.png')} style={{width: frameWidth*0.96, height: 80}}/>);  
}

const MEKontrollScreen = ({ navigation }) => {
    //console.log(ScreenObserver.tempMed);
    let befuellung = [];
    for (let i = 0; i<28; i++){
           if (ScreenObserver.tempMed.befuellung[i] != 0) befuellung[i] = ScreenObserver.tempMed.befuellung[i];
           else befuellung[i] = '-';
    }
    const tabelle = {
        zeitangaben: ['Morgen', 'Mittag', 'Abend', 'Nacht'],
        tage: [['Montag'], ['Dienstag'], ['Mittwoch'], ['Donnerstag'], ['Freitag'], ['Samstag'], ['Sonntag'], ['Täglich']],
        daten: [
          [befuellung[0], befuellung[1], befuellung[2], befuellung[3]],
          [befuellung[4], befuellung[5], befuellung[6], befuellung[7]],
          [befuellung[8], befuellung[9], befuellung[10], befuellung[11]],
          [befuellung[12], befuellung[13], befuellung[14], befuellung[15]],
          [befuellung[16], befuellung[17], befuellung[18], befuellung[19]],
          [befuellung[20], befuellung[21], befuellung[22], befuellung[23]],
          [befuellung[24], befuellung[25], befuellung[26], befuellung[27]]
        ]
    }
    const pressHandlerBack = () => {
        //ScreenObserver.dayly = false;
        //ScreenObserver.days = [];
        //ScreenObserver.dosierung = [];
        navigation.navigate('TageszeitenScreen');
    };
    const pressHandler = () => {
        navigation.navigate('MESuccessScreen');
    };
    const MEButtons = () => {
        return (
            <View style={styles.buttonsContainer}>
                <DefaultButton 
                    buttonStyle = {styles.buttonAbbruch} 
                    textstyle = {styles.buttonAbbruch}
                    buttonText = {'Zurück'}
                    pressHandler = {pressHandlerBack}
                    />
                    <Image style={{width: frameWidth*0.05, height: 80}}/> 
                <DefaultButton 
                    buttonStyle = {styles.buttonSpeichern} 
                    textstyle = {styles.buttonSpeichern}
                    buttonText = {'Speichern'}
                    pressHandler = {pressHandler}
                    />
            </View>
        );
    }

    if (ScreenObserver.dayly === false){
        return (
            <View style={{backgroundColor: 'white'}}>   
                <ScrollView>
                    <View style={styles.container}>  
                        <Text style={styles.textA} marginTop={10}>Möchten Sie das Medikament speichern?{'\n'}</Text>
                        <Text style={styles.textMedikament} >{ScreenObserver.tempMed.name}</Text> 
                        <Image source={{uri: ScreenObserver.tempMed.bild}} style={styles.image} />    
                    </View>

                    { ScreenObserver.days[0] === 1 ? 
                    <View style={styles.tableContainer}>
                        <Table borderStyle={{borderWidth: 0, borderLeftWidth: 2, borderColor: '#0041C8'}}>
                            <Row data={tabelle.tage[0]} style={styles.DayStyle} textStyle={styles.DayText}/>
                            </Table>
                            <DaytimesImage/>
                            <Table borderStyle={{borderWidth: 2, borderLeftWidth: 2, borderColor: '#0041C8'}}>
                            <Row data={tabelle.zeitangaben} style={styles.TimesStyle} textStyle={styles.TimesText}/>
                            <Row data={tabelle.daten[0]} style={styles.DataStyle} textStyle={styles.DataText}/>
                        </Table>
                    </View> : null }
                    
                    { ScreenObserver.days[1] === 1 ? 
                    <View style={styles.tableContainer}>
                        <Table borderStyle={{borderWidth: 0, borderLeftWidth: 2, borderColor: '#0041C8'}}>
                            <Row data={tabelle.tage[1]} style={styles.DayStyle} textStyle={styles.DayText}/>
                            </Table>
                            <DaytimesImage/> 
                            <Table borderStyle={{borderWidth: 2, borderLeftWidth: 2, borderColor: '#0041C8'}}>
                            <Row data={tabelle.zeitangaben} style={styles.TimesStyle} textStyle={styles.TimesText}/>
                            <Row data={tabelle.daten[1]} style={styles.DataStyle} textStyle={styles.DataText}/>
                        </Table>
                    </View>: null }

                    { ScreenObserver.days[2] === 1 ? 
                    <View style={styles.tableContainer}>
                        <Table borderStyle={{borderWidth: 0, borderLeftWidth: 2, borderColor: '#0041C8'}}>
                            <Row data={tabelle.tage[2]} style={styles.DayStyle} textStyle={styles.DayText}/>
                            </Table>
                            <DaytimesImage/>
                            <Table borderStyle={{borderWidth: 2, borderLeftWidth: 2, borderColor: '#0041C8'}}>
                            <Row data={tabelle.zeitangaben} style={styles.TimesStyle} textStyle={styles.TimesText}/>
                            <Row data={tabelle.daten[2]} style={styles.DataStyle} textStyle={styles.DataText}/>
                        </Table>
                    </View>: null }
                    
                    { ScreenObserver.days[3] === 1 ? 
                    <View style={styles.tableContainer}>
                        <Table borderStyle={{borderWidth: 0, borderLeftWidth: 2, borderColor: '#0041C8'}}>
                            <Row data={tabelle.tage[3]} style={styles.DayStyle} textStyle={styles.DayText}/>
                            </Table>
                            <DaytimesImage/> 
                            <Table borderStyle={{borderWidth: 2, borderLeftWidth: 2, borderColor: '#0041C8'}}>
                            <Row data={tabelle.zeitangaben} style={styles.TimesStyle} textStyle={styles.TimesText}/>
                            <Row data={tabelle.daten[3]} style={styles.DataStyle} textStyle={styles.DataText}/>
                        </Table>
                    </View>: null }

                    { ScreenObserver.days[4] === 1 ? 
                    <View style={styles.tableContainer}>
                        <Table borderStyle={{borderWidth: 0, borderLeftWidth: 2, borderColor: '#0041C8'}}>
                            <Row data={tabelle.tage[4]} style={styles.DayStyle} textStyle={styles.DayText}/>
                            </Table>
                            <DaytimesImage/> 
                            <Table borderStyle={{borderWidth: 2, borderLeftWidth: 2, borderColor: '#0041C8'}}>
                            <Row data={tabelle.zeitangaben} style={styles.TimesStyle} textStyle={styles.TimesText}/>
                            <Row data={tabelle.daten[4]} style={styles.DataStyle} textStyle={styles.DataText}/>
                        </Table>
                    </View>: null }

                    { ScreenObserver.days[5] === 1 ? 
                    <View style={styles.tableContainer}>
                        <Table borderStyle={{borderWidth: 0, borderLeftWidth: 2, borderColor: '#0041C8'}}>
                            <Row data={tabelle.tage[5]} style={styles.DayStyle} textStyle={styles.DayText}/>
                            </Table>
                            <DaytimesImage/>
                            <Table borderStyle={{borderWidth: 2, borderLeftWidth: 2, borderColor: '#0041C8'}}>
                            <Row data={tabelle.zeitangaben} style={styles.TimesStyle} textStyle={styles.TimesText}/>
                            <Row data={tabelle.daten[5]} style={styles.DataStyle} textStyle={styles.DataText}/>
                        </Table>
                    </View>: null }

                    { ScreenObserver.days[6] === 1 ? 
                    <View style={styles.tableContainer}>
                        <Table borderStyle={{borderWidth: 0, borderLeftWidth: 2, borderColor: '#0041C8'}}>
                            <Row data={tabelle.tage[6]} style={styles.DayStyle} textStyle={styles.DayText}/>
                            </Table>
                            <DaytimesImage/> 
                            <Table borderStyle={{borderWidth: 2, borderLeftWidth: 2, borderColor: '#0041C8'}}>
                            <Row data={tabelle.zeitangaben} style={styles.TimesStyle} textStyle={styles.TimesText}/>
                            <Row data={tabelle.daten[6]} style={styles.DataStyle} textStyle={styles.DataText}/>
                        </Table>
                    </View>: null }

                    <Image style={{width: frameWidth, height: 150}}/> 

                    <MEButtons/>
                </ScrollView>
            </View>
        );
    }
    else {
        return (
            <View style={{backgroundColor: 'white'}} >   
            <ScrollView>
                <View style={styles.container}>  
                    <Text style={styles.textA} marginTop={10}>Möchten Sie das Medikament speichern?{'\n'}</Text>
                    <Text style={styles.textMedikament} >{ScreenObserver.tempMed.name}</Text> 
                    <Image source={{uri: ScreenObserver.tempMed.bild}} style={styles.image} />
                </View>
                <View style={styles.tableContainer}>
                        <Table borderStyle={{borderWidth: 0, borderLeftWidth: 2, borderColor: '#0041C8'}}>
                            <Row data={tabelle.tage[7]} style={styles.DayStyle} textStyle={styles.DayText}/>
                            </Table>
                            <DaytimesImage/>
                            <Table borderStyle={{borderWidth: 2, borderLeftWidth: 2, borderColor: '#0041C8'}}>
                            <Row data={tabelle.zeitangaben} style={styles.TimesStyle} textStyle={styles.TimesText}/>
                            <Row data={tabelle.daten[0]} style={styles.DataStyle} textStyle={styles.DataText}/>
                        </Table>
                    </View>
                <Image style={{width: frameWidth, height: 150, backgroundColor: 'white'}}/> 
                    <View style={styles.buttonsContainer}>
                    <DefaultButton 
                        buttonStyle = {styles.buttonAbbruch} 
                        textstyle = {styles.buttonAbbruch}
                        buttonText = {'Zurück'}
                        pressHandler = {pressHandlerBack}
                        />
                    <Image style={{width: frameWidth*0.05, height: 80}}/> 
                    <DefaultButton 
                        buttonStyle = {styles.buttonSpeichern} 
                        textstyle = {styles.buttonSpeichern}
                        buttonText = {'Speichern'}
                        pressHandler = {pressHandler}
                        />
                </View>
            </ScrollView>
        </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        top: 30,
        alignItems: 'center',
        backgroundColor: 'white',
        bottom: 100,
    },
    buttonsContainer: {
        position: 'absolute',
        width: frameWidth,
        bottom: 0,
        paddingLeft: frameWidth * 0.05,
        paddingRight: frameWidth*0.05,
        paddingTop: 10,
        paddingBottom: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems:'flex-start',
        justifyContent:'flex-start',
        backgroundColor: '#ffffff',
        
    },
    buttonAbbruch: {
        height: 80,
        width: frameWidth*0.425,
        backgroundColor: '#7A003E',
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        textAlignVertical: 'center',
        justifyContent:'flex-start',
    },
    buttonSpeichern: {
        height: 80,
        width: frameWidth*0.425,
        backgroundColor: '#0041C8',
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        textAlignVertical: 'center',
        justifyContent:'flex-start',
    },
    image: {
        alignContent: 'center',
        height: frameWidth * 0.4,
        width: frameWidth * 0.4,
        marginBottom: 20,
    },
    textA: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'left',
        marginTop: 30, 
        marginLeft: 25,
        marginRight:25 
    },
    textMedikament: {
        fontSize: 40,
        fontWeight: 'bold',
    },
    tableContainer: { 
        top: 0,
        width: frameWidth,
        paddingTop: 20,
        paddingLeft: frameWidth*0.02,
        paddingRight: frameWidth*0.02,
        backgroundColor: '#ffffff',
        flexDirection: 'column',
        align: 'flex-center',
    },
    TimesStyle: { 
        height: 30,
        alignContent: "center",
        backgroundColor: '#0041C8',
    },
    DayStyle: { 
        height: 60,
        alignContent: "center",
        backgroundColor: '#0041C8',
    },
    DayText: {
        margin: 10,
        fontWeight: 'bold',
        textAlign: 'left',
        fontSize: 30,
        color: '#ffffff',
    },
    TimesText: { 
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'top',
        fontSize: 15,
        color: '#ffffff',
    },
    DataStyle: { 
        height: 80,
        alignContent: "center",
        backgroundColor: '#ffffff',
    },
    DataText: { 
        margin: 0,
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 30,
        color: 'black',
    }
});

export default MEKontrollScreen;
