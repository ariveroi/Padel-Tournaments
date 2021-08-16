import React, { useState } from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import BackgroundImage from '../common/BackgroundImage';
import StyledButton from '../common/StyledButton';
import commonStyles from '../common/styles';
import axios from 'axios'


const RegisterPwd = ({route, navigation}) => {

    const [pwd1, setPwd1] = useState('')
    const [pwd2, setPwd2] = useState('')

    const {email, username} = route.params

    const register = e => {
        // Tendremos que validar que los datos de las contraseñas son correctos
        e.preventDefault()
        if (pwd1 != '' && pwd1 === pwd2){
            // Una vez tenemos los datos del usuario, hacemos un POST a la API para crear este nuevo usuario
            // Si se crea correctamente, navegamos a Main Screen
            const data = {
                email: email,
                username: username,
                password: pwd1
            }
            axios.post('http://127.0.0.1:8000/api/register', data)
            .then(res => {
                alert('Usuario Creado!')
                navigation.navigate('InitialScreen')
            })
        }else{
            alert('Las contraseñas no coinciden')
        }
    }

    return(
        <View style={commonStyles.compContainer}>
            <BackgroundImage image={require('../../assets/register-padel2-bg.jpg')}/>
            <View style={commonStyles.mainContainer}>
                <View style={styles.container}>
                    <TextInput secureTextEntry={true} style={styles.input} placeholder="Escriba la contraseña" value={pwd1} onChangeText={text => setPwd1(text)}/>
                    <TextInput secureTextEntry={true} style={styles.input} placeholder="Repita la contraseña" value={pwd2} onChangeText={text => setPwd2(text)}/>
                </View>
                <View style={styles.buttonContainer}>
                    <StyledButton textColor="#0B569E" color="#edff21" type="Registrarse" onPress={register}/>
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
        borderColor: '#0B569E',
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

export default RegisterPwd;