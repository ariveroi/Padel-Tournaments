import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

const NavigationButton = (props) => {
    return(
        <TouchableOpacity onPress={props.onPress} style={styles.button}>
            <Text style={styles.text}>{props.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        borderBottomColor: '#edff21',
        borderBottomWidth: 5,
        margin: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        height: 65
    },
    text: {
        fontSize: 25,
        color: '#0B569E'
    }
})

export default NavigationButton;