import React, { Component, } from 'react';
import {StyleSheet, Text, View, FlatList, TouchableHighlight, TouchableOpacity, ScrollView} from 'react-native';
import { SearchBar } from 'react-native-elements';
import { Medikament } from '../models/Medikament';
import { getMedikamenteFromApi } from '../data/Api';
import { ScreenObserver } from '../models/ScreenObserver';
import ZurueckButton from "../components/ZurueckButton";



let data = null;
class Search extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      loading: false,
      error: null,
      searchValue: '',
      selectedItem: '',
    }; 
   
  }

  


  
 //HandleSelect
  handleSelect = (item) => {
    this.setState({selectedItem: item });
    this.state.selectedItem = item;
    this.onPressHandler();
  }

   
  searchFunction = async (text) => {

    if(data === null){
       data = await getMedikamenteFromApi();
    }
    
    this.arrayholder = data;
    const updatedData = this.arrayholder.filter((item) => {
      const item_data = `${item.name.toUpperCase()})`;
      const text_data = text.toUpperCase();
      return item_data.indexOf(text_data) > -1;
    });
    this.setState({ data: updatedData, searchValue: text });
  };

  // Mit Klick auf ein Suchergebnis Speichern des Medikamentennames im temporären Objekt und weiter zu Abfrage Intervall.
  onPressHandler = () => {
    const tempMedikament = new Medikament(this.state.selectedItem.name, this.state.selectedItem.img);
    ScreenObserver.tempMed = tempMedikament;

    //Weiterleitung zu Screen Abfrage Intervall
    this.props.navigation.navigate('EinnahmeScreen');
    }
    
  //HandleBack
   pressHandlerBack = () => {
    this.props.navigation.navigate('MedikamenteBearbeitenScreen');
};
    
  render() {
    return (
      <View style={styles.container}>
      <Text style={{ fontSize: 25, fontWeight: 'bold', textAlign: 'left', marginTop: 60, marginLeft: 25, marginRight:25, marginBottom: 20 }}>Bitte geben Sie das Medikament im Suchfeld ein:</Text>
      <View style= {styles.container2}>
        <SearchBar
          containerStyle={{backgroundColor: 'white'}}
          inputContainerStyle={{backgroundColor: 'white'}}
          inputStyle={{color: 'black', fontWeight: 'bold'}}
          placeholder="Hier Medikament suchen..."
          lightTheme={false}
          placeholderTextColor="grey"
          round
          value={this.state.searchValue}
          onChangeText={(text) => this.searchFunction(text)}
          autoCorrect={false}
        />
        </View>
        <View style={styles.auflistung}>
        <FlatList
          data={this.state.data}
          renderItem={({item}) =>(
            <TouchableHighlight onPress={() => this.handleSelect(item)} activeOpacity={0.6} underlayColor="#DDDDDD">
              <View style={styles.item}>
                <Text style={{ fontSize: 25, fontWeight: 'bold' }}>{item.name}</Text>
              </View>
            </TouchableHighlight>
          )}
          keyExtractor={(item) => item.name}
        />
      </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={this.pressHandlerBack}>
            <ZurueckButton style={styles.button} />
          </TouchableOpacity>
          <View style={styles.hidden} />
        </View>
      </View>

    );
  }
}

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    padding: 2,
    backgroundColor: 'white',
  },
  container2: {
    marginTop: 0,
    padding: 2,
    backgroundColor: 'white',
  },

  auflistung: {
    marginTop: 30,
    padding: 2,
    height: "61%",
  },
  item: {
    flex:1,
    backgroundColor: 'lightblue',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  buttonsContainer: {
    position: 'relative',
    bottom: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft:-40,
  },

  button: {
    height: 120,
    width: 80,
    borderWidth: 3,
    borderColor: '#6b93ff',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#02005c',
    elevation: 24,
  },

  hidden: {
    height: 85,
    width: 150,

  },
});
