import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import BackgroundImage from '../common/BackgroundImage';
import StyledButton from '../common/StyledButton';
import commonStyles from '../common/styles';

const User = ({navigation}) => {

    const config = {
        velocityThreshold: 0.3,
        directionalOffsetThreshold: 80
    };
    //Este component recibe el ID del usuario y carga los datos (¿Carga desde el principio y le pasamos props o llamamos a API aqui?)
    //Tenemos que poner la funcionalidad, en un futuro, de poder cambiar el icono del jugador

    return(
        <GestureRecognizer 
            style={commonStyles.compContainer}
            onSwipeRight={()=>navigation.goBack()}
            config={config}>
            <BackgroundImage image={require('../../assets/padel-bg.jpg')}/>
            <View style={commonStyles.mainContainer}>
                <View style={styles.imgContainer}>
                    <Image style={styles.img} source={require('../../assets/user.png')}/>
                </View>
                <View style={styles.dataContainer}>
                    <Text style={styles.text}>User</Text>
                    <Text style={styles.text}>Email</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <StyledButton textColor="#fff" color="#0B569E" type="Editar"/>
                    <StyledButton textColor="#0B569E" color="#edff21" type="Cerrar Sesión"/>
                </View>
            </View>
        </GestureRecognizer>
    )
}

const styles = StyleSheet.create({
    imgContainer: {
        flex: 2,
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    img: {
        height: 150,
        width: 150,
        backgroundColor: '#fff',
        borderRadius: 200,
        borderWidth: 5,
        borderColor: '#0B569E'
    },
    dataContainer: {
        flex: 1,
        height: '100%',
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'space-around',
        marginBottom: 60,
        
    },
    text: {
        fontSize: 25,
        color: '#0B569E',
        borderBottomWidth: 2,
        borderColor: '#edff21',
        width: '90%',
        paddingBottom: 10
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%',
        width: '100%',
    }
})

export default User;