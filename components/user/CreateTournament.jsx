import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import BackgroundImage from '../common/BackgroundImage';
import StyledButton from '../common/StyledButton';
import commonStyles from '../common/styles';

const CreateTournament = ({navigation}) => {

    const [participante, setParticipante] = useState('')
    const [participantes, setParticipantes] = useState([])
    const [reload, setReload] = useState(false)


    const config = {
        velocityThreshold: 0.3,
        directionalOffsetThreshold: 80
    };

    const remove = (value) => { 
        participantes.splice(participantes.indexOf(value), 1)
        setReload(!reload)
    }

    const listaParticipantes = participantes.map(part => {
        return(
            <TouchableOpacity onPress={()=>remove(part)} key={part}>
                <Text  style={styles.participante}>{part}</Text>
            </TouchableOpacity>
        )
    })

    const createTorneo = e => {
        if (participantes.length > 1) {
            alert(participantes)
            // Aqui llamamos a la API para crear el torneo, pasando los participantes y el usuario que lo ha creado
            // La API por ella sola le asignará un código de acceso aleatorio
            // Luego navegamos a la pantalla del torneo
        }else{
            alert('Debes introducir más participantes!')
        }
    }

    const newPaticipante = e => {
        e.preventDefault()
        participantes.push(participante)
        setParticipante('')
    }

    return(
        <GestureRecognizer 
            style={commonStyles.compContainer}
            onSwipeRight={()=>navigation.goBack()}
            config={config}>
            <BackgroundImage image={require('../../assets/create-padel-bg.jpg')}/>
            <View style={commonStyles.mainContainer}>
                <View style={styles.container}>
                    <View style={styles.addRow}>
                        <TextInput style={styles.input} placeholder="Añadir participante..." value={participante} onChangeText={text => setParticipante(text)}/>
                        <TouchableOpacity onPress={newPaticipante} style={styles.addButton}>
                            <Text style={styles.addButtonText}>+</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.participantsContainer}>

                    </View>
                    <ScrollView style={styles.row}>
                        <View style={styles.scrollview}>
                            {listaParticipantes}
                        </View>
                    </ScrollView>
                    <StyledButton textColor="#fff" color="#0B569E" type="Crear" onPress={createTorneo}/>
                    {/* <StyledButton textColor="#0B569E" color="#edff21" type="Atrás" onPress={()=>navigation.push('Main')}/> */}
                </View>
            </View>
        </GestureRecognizer>
    )
}

const styles = StyleSheet.create({
    container:{
        width: '90%',
        height: '75%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    input:{
        height: 65,
        width: '80%',
        backgroundColor: '#fff',
        fontSize: 25,
        textAlign: 'center',
        borderColor: '#0B569E',
        borderWidth: 5,
        borderRadius: 15
    },
    row: {
        width: '100%',
        height: '40%',
        margin: 5
    },
    participante:{
        backgroundColor: '#fff',
        margin: 5,
        textAlignVertical: 'center',
        borderRadius: 50,
        padding:10,
        fontSize: 20,
        color: '#0B569E'
    },
    scrollview: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: 5
    },
    addRow:{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    addButton: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    addButtonText:{
        fontSize: 30,
        backgroundColor: '#edff21',
        color: '#0B569E',
        width: 40,
        height: 40,
        borderRadius: 50,
        textAlign: 'center',
        textAlignVertical: 'center'
    }
})

export default CreateTournament;