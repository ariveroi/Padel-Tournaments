import React from 'react';
import {StyleSheet, ImageBackground} from 'react-native';

const BackgroundImage = (props) => {
    return(
        <ImageBackground
            source={props.image}
            style={styles.image}
        />
    )
}

const styles = StyleSheet.create({
    image:{
        width: '100%',
        height: '100%',
        position: 'absolute'
    },
})

export default BackgroundImage;