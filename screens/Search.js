import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight } from 'react-native';
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

const renderItem = ({ item }) => (
  <TouchableHighlight onPress={() => this.handleSelect(item)} activeOpacity={0.6} underlayColor="#DDDDDD">
<Item name={item.name} />;
</TouchableHighlight>
);

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
    console.log('HandleSelect: ', item.name);
    console.log('HandleSelect State : ', this.state.selectedItem);
    this.onPressHandler();
  }

  searchFunction = async (text) => {
    
    let data = await getMedikamenteFromApi();
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
    console.log('Observer TempMedikament= ', ScreenObserver.tempMed);

    
    //Weiterleitung zu Screen Abfrage Intervall
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
