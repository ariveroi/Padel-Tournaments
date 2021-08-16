import React from 'react';
import { StyleSheet, Text, View, Button, ImageBackground, TouchableOpacity} from 'react-native';
import BackgroundImage from './common/BackgroundImage';
import StyledButton from './common/StyledButton';
import commonStyles from './common/styles';

const InitialScreen = ({navigation}) => {
    return(
        <View style={commonStyles.compContainer}>
            <BackgroundImage image={require('../assets/padel-bg.jpg')}/>
            <View style={commonStyles.mainContainer}>
                <View style={styles.titles}>
                    <Text style={styles.title}>iPadel</Text>
                </View>
                <View style={styles.buttomContainer}>
                    <StyledButton textColor="#0B569E" color="#fff" type="Login" onPress={()=>navigation.navigate('Login')}/>
                    <StyledButton textColor="#0B569E" color="#edff21" type="Register" onPress={()=>navigation.push('Register')}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buttomContainer:{
        flex: 1,
        marginBottom: 25,
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    titles:{
        marginTop: '50%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
        fontSize: 100,
        fontWeight: '500',
        color: '#edff21',
        fontFamily: "sans-serif"
    },
});

export default InitialScreen;