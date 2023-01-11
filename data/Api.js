import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { useState, useEffect, loading } from 'react';
import ReactLoading from 'react-loading';

export const getMedikamenteFromApi = async () => {
  const [data, setData] = useState([]);
  const url = 'https://lupre.at/api.json';

  try {
    useEffect(() => {
      fetch(url)
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((errror) => console.error(errror));
      //.finally(() => setloading(false));
    }, []);
  } catch (error) {
    console.error(error);
  }
  console.log(data);
  return data;
};
