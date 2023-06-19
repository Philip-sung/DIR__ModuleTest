import React, { Children } from 'react';
import PropTypes from 'prop-types';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableHighlight,
} from 'react-native';
import { testStyleSet, testComponent, testAlign } from "../styles";

const DemoButton = ({ children, ...otherProps}) => (
    <TouchableHighlight
        style={[testComponent.testDefaultButton, testComponent.testDashedButton]}
        {...otherProps}
        underlayColor='#fff'
        activeOpacity={0.8}
    >
        {children}
    </TouchableHighlight>
);

export { DemoButton };