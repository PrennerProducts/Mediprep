import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight } from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';
import { Medikament } from '../models/Medikament';
import { getMedikamenteFromApi } from '../data/Api';
import { ScreenObserver } from '../models/ScreenObserver';





  const Item = ({title}) => {
    return (
        <View style={styles.item}>
          <Text style={{fontSize: 25, fontWeight: 'bold'}}>{title}</Text>
        </View>
    );
  };

  const renderItem = ({item}) => <Item title={item.title}/>;

  class Search extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: false,
        error: null,
        searchValue: '',
      };
    }

    searchFunction = async (text) => {
      let data = await getMedikamenteFromApi();
      this.arrayholder = data;
      const updatedData = this.arrayholder.filter((item) => {
        const item_data = `${item.title.toUpperCase()})`;
        const text_data = text.toUpperCase();
        return item_data.indexOf(text_data) > -1;
      });
      this.setState({data: updatedData, searchValue: text});
    };

    // Mit Klick auf ein Suchergebnis Speichern des Medikamentennames im temporären Objekt und weiter zu Abfrage Intervall.
    onPressHandler = () => {
      const tempMedikament = new Medikament(this.state.data[0].title, this.state.data[0].img);
      ScreenObserver.tempMed = tempMedikament;

      //Weiterleitung zu Screen Abfrage Intervall
      // ...

      // LOG
      //console.log('TempMedikament= ', tempMedikament);
      //console.log('MyLog Name = ', this.state.data[0].title, 'MyBild= ', this.state.data[0].img);
      console.log('Observer TempMedikament= ', ScreenObserver.tempMed);
      //alert('Pressed:  ' + this.state.data[0].title);
      //navigation.navigate('TagAuswahlScreen');
      this.props.navigation.navigate("TagAuswahlScreen");
    }

    render() {
      return (
          <View style={styles.container}>

            <View style={styles.container}>
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
                    keyExtractor={(item) => item.id}
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
