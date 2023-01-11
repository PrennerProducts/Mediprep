import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';
import { MedikamentenListe } from '../models/MedikamentenListe';
import { getMedikamenteFromApi } from '../data/Api';

let medtitle = MedikamentenListe.MLDummy.getMedikamentName(1);
let maxmeds = MedikamentenListe.MLDummy.getmaxmeds;

const Item = ({ title }) => {
  return (
    <View style={styles.item}>
      <Text>{title}</Text>
    </View>
  );
};

const renderItem = ({ item }) => <Item title={item.title} />;
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
    data = await getMedikamenteFromApi();
    this.arrayholder = data;
    const updatedData = this.arrayholder.filter((item) => {
      const item_data = `${item.title.toUpperCase()})`;
      const text_data = text.toUpperCase();
      return item_data.indexOf(text_data) > -1;
    });
    this.setState({ data: updatedData, searchValue: text });
  };
  render() {
    return (
      <View style={styles.container}>
        <SearchBar
          placeholder="Search Here..."
          lightTheme
          round
          value={this.state.searchValue}
          onChangeText={(text) => this.searchFunction(text)}
          autoCorrect={false}
        />
        <FlatList
          data={this.state.data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
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
