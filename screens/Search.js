import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight,SafeAreaView, StatusBar,TouchableOpacity, Alert } from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';
import { Medikament } from '../models/Medikament';
import { getMedikamenteFromApi } from '../data/Api';
import { ScreenObserver } from '../models/ScreenObserver';



const Item = ({ name }) => {
  return (
    <View style={styles.item}>
      <Text style={{ fontSize: 25, fontWeight: 'bold' }}>{name}</Text>
    </View>
  );
};

const renderItem = ({ item }) => <Item name={item.name} />;




// Class beginnt hier//
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: null,
      searchValue: '',

      //selectedId State
      selectedId: null,
      tempItem: '',
      tempText: '',
      tempKy: '',

    };
  }

 

  searchFunction = async (text) => {
    let data = await getMedikamenteFromApi();
    this.arrayholder = data;
    const updatedData = this.arrayholder.filter((item) => {
      const item_data = `${item.name.toUpperCase()})`;
      this.tempItem = item_data;
      const text_data = text.toUpperCase();
      this.tempText = text_data;
      console.log('TTTTTTTT ITEMDATA: ' + item_data );
      return item_data.indexOf(text_data) > -1;
    });
    this.setState({ data: updatedData, searchValue: text });
  };

  // Mit Klick auf ein Suchergebnis Speichern des Medikamentennames im temporären Objekt und weiter zu Abfrage Intervall.
  onPressHandler = () => {
    //this.setState({selectedId: this.state.item.name});
    console.log('This.tempItem: '+ this.state.selectedId); ;


    
    const tempMedikament = new Medikament(this.state.data[0].name, this.state.data[0].img);
    ScreenObserver.tempMed = tempMedikament;
  
    //Weiterleitung zu Screen Abfrage Intervall
    // ... 

    // LOG
    //console.log('TempMedikament= ', tempMedikament);
    //console.log('MyLog Name = ', this.state.data[0].name, 'MyBild= ', this.state.data[0].img);	
    console.log('Observer TempMedikament= ', ScreenObserver.tempMed);
    //alert('Pressed:  ' + this.state.data[0].name);
    //navigation.navigate('Neuer Screen');
    this.props.navigation.navigate('TagAuswahlScreen');

    }

   


  render() {
    return (
      <View style={styles.container}>
        
      <View style= {styles.container}>
        <SearchBar
          placeholder="Search Here..."
          lightTheme
          round
          value={this.state.searchValue}
          onChangeText={(text) => this.searchFunction(text)}
          autoCorrect={false}
        />
        </View>
        <View style={styles.container}>
        <TouchableHighlight activeOpacity={0.6} underlayColor="#DDDDDD" onPressIn={this.onPressHandler}>
        <FlatList
          data={this.state.data}
          renderItem={renderItem}
          keyExtractor={(item) => item.name}
          onSelect={console.log('Selected: ' + this.state.tempItem)}

        />
     
        </TouchableHighlight>
      </View>
      </View>
    );
  }
}

export default Search;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    padding: 2,
  },
  item: {
    backgroundColor: 'lightblue',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});
