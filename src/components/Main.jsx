import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import BackgroundImage from './common/BackgroundImage';
import NavigationButton from './common/NavigationButton';
import commonStyles from './common/styles';

const Torneos = ({navigation, route}) => {
    return(
        <View style={commonStyles.compContainer}>
            <BackgroundImage image={require('../assets/padel-bg.jpg')}/>
            <View style={commonStyles.mainContainer}>
                <View style={styles.container}>
                    <NavigationButton onPress={()=>navigation.push('User')} text="Usuario"/>
                    <NavigationButton onPress={()=>navigation.push('JoinTournament')} text="Unirse"/>
                    <NavigationButton onPress={()=>navigation.push('CreateTournament')} text="Crear"/>
                    <NavigationButton onPress={()=>navigation.push('MyTournaments')} text="Mis Torneos"/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: '85%',
        height: '60%',
        // backgroundColor: '#fff',
        // opacity: 0.8,
        flexDirection: 'column',
        justifyContent: 'space-between'
        // paddingBottom: 10
    },
})

export default Torneos