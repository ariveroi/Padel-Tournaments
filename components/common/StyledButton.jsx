import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';

const StyledButton = (props) => {
    
    const type = props.type
    const textColor = (props.textColor === undefined) ? 'black' : props.textColor

    return(
        <View style={[styles.login, {backgroundColor: props.color}]}>
            <TouchableOpacity onPress={props.onPress} style={styles.button}>
                <Text style={{fontSize: 30, color:textColor}}>{type}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({  
    login:{
        width: '75%',
        marginTop: 20,
        alignItems: 'center',
        borderRadius: 100
    },
    button:{
        height: 50,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        
    }
})

export default StyledButton