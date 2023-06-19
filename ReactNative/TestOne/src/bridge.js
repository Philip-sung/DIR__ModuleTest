import React, { Children } from 'react';
import PropTypes from 'prop-types';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  useColorScheme,
  View,
  TouchableOpacity,
  TouchableHighlight,
  ImageBackground,
} from 'react-native';

import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';

  
import { DemoButton } from './components/testButton';
import { styles, fontSet, alignStyle, componentStyle } from "./styles";

const backgroundimg = require('./static/img/Background.png')
const daplyIcon = require('./static/img/DaplyWhite.png')

/* Screen-Initial
const Screen = () => (
    <SafeAreaView style={styles.container}>
        
    </SafeAreaView>
);*/

//Image-Background
const Screen = () => (
    <SafeAreaView style={[styles.container, {backgroundColor:'#000'}]}>
    <StatusBar
      barStyle={'light-content'}
    />
        <ImageBackground source={backgroundimg} style={styles.backgroundImage}>
            <View style={alignStyle.top}>
                <Image source={daplyIcon} style={{width:220, height:150}}></Image>
                <Text style={fontSet.contentBright}>우리들의 데이트 플레이리스트 </Text>
                <TouchableOpacity style={[componentStyle.defaultButton, componentStyle.transparentButton, componentStyle.roundButton, {marginTop: 300, paddingLeft:80, paddingRight: 80}]}>
                    <Text style={{color: '#fff'}}>Login</Text>
                </TouchableOpacity>
            </View>
            </ImageBackground>
    </SafeAreaView>
);

//Screen-2 : Flex-Box
// const Screen = () => (
//     <SafeAreaView style={styles.container}>
//         <View style={styles.main}>
//             <Text style={styles.content}>Column1</Text>
//             <Text style={styles.content}>Column2</Text>
//             <Text style={styles.content}>Column3</Text>
//         </View>
//     </SafeAreaView>
// );

/* Screen-1
const Screen = () => (
    <SafeAreaView style={styles.container}>
        <View>
        <Text style={testStyleSet.titleBlack}>Hello, World!</Text>
        </View>
        <View style={[testAlign.center]}>
        <DemoButton onPress={() => {}}>
            <Text style={testStyleSet.titleWhite}>Philip Sung</Text>
        </DemoButton>
        </View>
    </SafeAreaView>
);*/

export { Screen };