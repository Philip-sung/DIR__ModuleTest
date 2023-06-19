import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions
} from 'react-native';
import { Screen } from './bridge';

const getDimesions = () => {
  const { width, height, scale } = Dimensions.get('window');
  console.log(`width: ${width}, height: ${height}, scale: ${scale}`);
}

function App(): JSX.Element {
  return (
    <Screen />
  );
}

export default App;
