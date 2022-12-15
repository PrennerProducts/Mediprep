import { StyleSheet, View, Button, Text } from 'react-native';
import { ModelsTests } from '../models/ModelsTests';

export const LogischeTestsScreen = () => {
  ModelsTests.test();
};