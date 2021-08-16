import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import GestureRecognizer from 'react-native-swipe-gestures';
import BackgroundImage from '../common/BackgroundImage';
import StyledButton from '../common/StyledButton';
import commonStyles from '../common/styles';

const MyTournaments = ({navigation}) => {

    const [tournaments, setTournaments] = useState([])

    //Este componente recibirá los torneos en los que el usuario está participando (tanto si es owner como no)
    //Vamos a probar a configurarlo con un context

    const config = {
        velocityThreshold: 0.3,
        directionalOffsetThreshold: 80
    };

    const listaTorneos = tournaments.map(torneo => (
        <Text style={styles.text}>{torneo.name}</Text>
    ))

    return(
        <GestureRecognizer 
            style={commonStyles.compContainer}
            onSwipeRight={()=>navigation.goBack()}
            config={config}>
            <BackgroundImage image={require('../../assets/padel-bg.jpg')}/>
            <View style={commonStyles.mainContainer}>
                <View style={styles.container}>
                    <View style={styles.tournaments}>
                        {
                            (tournaments.length===0)
                            ?
                            <View style={styles.buttonContainer}>
                                <StyledButton onPress={()=>navigation.push('JoinTournament')} color="#0B569E" textColor="#fff" type="Apuntante!"/>
                                <StyledButton onPress={()=>navigation.push('CreateTournament')} textColor="#0B569E" color="#edff21" type="Crea uno!"/>
                            </View>
                            :
                            <ScrollView style={styles.scrollview}>
                                {listaTorneos}
                            </ScrollView>
                        }
                        
                    </View>
                </View>
            </View>
        </GestureRecognizer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        // paddingTop: '20%',
        // paddingBottom: '20%'
    },
    tournaments: {
        backgroundColor: 'rgba(255,255,255,1)',
        width: '90%',
        height: '70%',
        borderRadius: 20,
        padding: 10,
    },
    text: {
        fontSize: 25,
        color: '#0B569E',
        borderBottomWidth: 2,
        borderColor: '#edff21',
        width: '100%',
        paddingBottom: 10,
        textAlignVertical: 'center',
        marginBottom: 10
    },
    buttonContainer: {
        flex: 1,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default MyTournaments;