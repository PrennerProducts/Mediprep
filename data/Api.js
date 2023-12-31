/*
import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { useState, useEffect } from 'react';
*/

export const getMedikamenteFromApi = async () => {
  const url = 'https://lupre.at/api.json';
  try {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  } catch (error) {
   console.error(error);
  }
};

