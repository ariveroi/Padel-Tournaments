import React, {useState} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import BackgroundImage from '../common/BackgroundImage';
import StyledButton from '../common/StyledButton';
import commonStyles from '../common/styles';

const JoinTournament = ({navigation}) => {
    
    const [tournament, setTournament] = useState('')

    const joinTournament = e => {
        e.preventDefault()
        // Aquí metemos la llamada GET a la API para ver si existe un torneo con este access ID
        // Si la API nos devuelve un OK, navegamos a la pantalla del torneo
        alert(tournament)
    }
    const config = {
        velocityThreshold: 0.3,
        directionalOffsetThreshold: 80
    };

    return(
        <GestureRecognizer 
            style={commonStyles.compContainer}
            onSwipeRight={()=>navigation.goBack()}
            config={config}>
            <BackgroundImage image={require('../../assets/padel-bg.jpg')}/>
            <View style={commonStyles.mainContainer}>
                <TextInput placeholder="Introduce tu código!" style={styles.input} value={tournament} onChangeText={(text) =>{setTournament(text)}}/>
                <View style={styles.buttons}>
                    <StyledButton textColor="#0B569E" color="#edff21" type="Unirse!" onPress={joinTournament}/>
                    {/* <StyledButton textColor="#fff" color="#0B569E" type="Atrás" onPress={()=>navigation.push('Main')}/> */}
                </View>
            </View>
        </GestureRecognizer>
    )
}

const styles = StyleSheet.create({
    input:{
        height: 100,
        width: '75%',
        backgroundColor: '#fff',
        fontSize: 25,
        textAlign: 'center',
        borderColor: '#0B569E',
        borderWidth: 5,
        borderRadius: 15
    },
    buttons:{
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default JoinTournament;