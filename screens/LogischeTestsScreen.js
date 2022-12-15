import { StyleSheet, View, Button, Text } from 'react-native';
import { modelsTests } from '../models/ModelsTests';

export const LogischeTestsScreen = () => {
  modelsTests.test();
};