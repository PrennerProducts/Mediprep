import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { ListItem, SearchBar } from "react-native-elements";
import { MedikamentenListe } from '../models/MedikamentenListe';

let medtitle = MedikamentenListe.MLDummy.getMedikamentName(1)
let maxmeds = MedikamentenListe.MLDummy.getmaxmeds

const DATA = [
    {
      id: "1",
      title: MedikamentenListe.MLDummy.getMedikamentName(1),
    },
    {
      id: "2",
      title: MedikamentenListe.MLDummy.getMedikamentName(2),
    },
    {
      id: "3",
      title: MedikamentenListe.MLDummy.getMedikamentName(3),
    },
    {
      id: "4",
      title: MedikamentenListe.MLDummy.getMedikamentName(4),
    },
    {
      id: "5",
      title: MedikamentenListe.MLDummy.getMedikamentName(5),
    },
    {
      id: "6",
      title: MedikamentenListe.MLDummy.getMedikamentName(6),
    },
    {
      id: "7",
      title: MedikamentenListe.MLDummy.getMedikamentName(7),
    },
    {
      id: "8",
      title: MedikamentenListe.MLDummy.getMedikamentName(8),
    },
    {
      id: "9",
      title: MedikamentenListe.MLDummy.getMedikamentName(9),
    },
    {
      id: "10",
      title: MedikamentenListe.MLDummy.getMedikamentName(10),
    },

  
  ];




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
      data: DATA,
      error: null,
      searchValue: "",
    };
    this.arrayholder = DATA;
  }
  
  searchFunction = (text) => {
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
    backgroundColor: "lightblue",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
})


