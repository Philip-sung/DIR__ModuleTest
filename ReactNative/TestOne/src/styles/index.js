import React from 'react';
import {
  StyleSheet,
} from 'react-native';

const colorSet = StyleSheet.create({
    mainColorTheme: {
        base1: '#fff',
        base2: '#ddd',
        stress1: '#c01718'
    }
});

const fontSet = StyleSheet.create({
    titleBright: {
        fontSize: 22,
        fontWeight: 'bold',
        color: colorSet.mainColorTheme.base1,
        backgroundColor: 'transparent'
    },
    titleBlack: {
        fontSize: 22,
        color: '#000',
    },
    contentBright: {
        fontSize: 16,
        color: colorSet.mainColorTheme.base1,
        backgroundColor: 'transparent'
    },
});

const textStyle = StyleSheet.create({
    Headline: {
        fontSize: 20,
        color: ''
    }
})

const alignStyle = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    top: {
        flex: 1,
        flexDirection:'column',
        justifyContent: 'center',
        paddingBottom: 0,
        alignItems: 'center'
    }
});

const componentStyle = StyleSheet.create({
    defaultButton: {
        borderStyle: 'solid',
        borderColor: '#d5d5d5',
        borderWidth: 1,
        backgroundColor: '#eee',
        borderRadius: 3,
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 10,
        marginBottom: 10
    },
    dashedButton: {
        borderStyle: 'dashed',
        backgroundColor: '#000000',
        color: '#fff'
    },
    hairlineButton: {
        borderWidth: StyleSheet.hairlineWidth
    },
    roundButton: {
        borderRadius: 30
    },
    transparentButton: {
        backgroundColor: 'rgba(0,0,0,0.0)',
        padding: 10,
        paddingLeft: 40,
        paddingRight: 40
    }
});


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        fontSize: 25,
        fontWeight: '500',
    },
    main: {
        flex: 1,
        paddingVertical: 20,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    content: {
        padding: 20,
        margin: 0,
        backgroundColor: '#999',
        width: 125,
        height: 125,
        borderWidth: 2,
        borderColor: 'red',
        textAlign: 'center'
    },
    backgroundImage: {
        flex: 1,
    }
});

export { styles, fontSet, alignStyle, componentStyle }