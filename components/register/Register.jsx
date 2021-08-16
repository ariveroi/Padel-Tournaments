import React, { useState } from 'react';
import {StyleSheet, View} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import BackgroundImage from '../common/BackgroundImage';
import StyledButton from '../common/StyledButton';
import commonStyles from '../common/styles';

const Register = ({navigation}) => {

    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')

    return(
        <View style={commonStyles.compContainer}>
            <BackgroundImage image={require('../../assets/register-padel-bg.jpg')}/>
            <View style={commonStyles.mainContainer}>
                <View style={styles.container}>
                    <TextInput autoCompleteType="email" keyboardType="email-address" style={styles.input} placeholder="Correo Electrónico" value={email} onChangeText={text => setEmail(text)}/>
                    <TextInput autoCompleteType="username" style={styles.input} placeholder="Nombre de usuario" value={username} onChangeText={text => setUsername(text)}/>
                </View>
                <View style={styles.buttonContainer}>
                    <StyledButton textColor="#0B569E" color="#edff21" type="Siguiente" onPress={()=>navigation.navigate('RegisterPwd', {
                        email: email,
                        username: username
                    })}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        alignItems: 'center',
        marginTop: '35%',
        
    },
    input: {
        height: 65,
        width: '80%',
        backgroundColor: '#fff',
        fontSize: 20,
        textAlign: 'center',
        borderColor: '#edff21',
        borderWidth: 3,
        borderRadius: 10,
        margin: 10,
        opacity: 0.9,
        color: '#0B569E'
    },
    buttonContainer: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: 40
    }
})

export default Register;