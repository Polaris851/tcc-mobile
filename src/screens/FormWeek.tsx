import { useState } from 'react'
import { View, ScrollView, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { TextInput, Button } from 'react-native-paper'

import { api } from '../lib/axios'
import { BackButton } from '../components/BackButton'
import { InputDayTime } from '../components/InputDayTime'

export function FormWeek() {
    const { navigate } = useNavigation()

    const [title, setTitle] = useState("")
    const [startTime, setStartTime] = useState("")
    const [finishTime, setFinishTime] = useState("")
    const [dayWeek, setDayWeek] = useState("")
    const [description, setDescription] = useState('')

    async function handleCreateNewWeekActivity() {
        try {
            if(!title.trim()) {
                Alert.alert("Semana", "Informe os dados da atividade da semana.")
                return
            }
            
            await api.post("/weeklyactivities", {title, description})

            setTitle("")
            setDescription("")

            Alert.alert("Semana", "Atividade criada com sucesso!", [{ text: "OK", onPress: () => { navigate('week')} }])
        } catch (error) {
            console.log(error)
            Alert.alert("Ops", "Não foi possível criar a atividade.")
        }
    }

    function handleTimeStart(dateEvent: string) {
        setStartTime(dateEvent)
    }

    function handleTimeFinish(dateEvent: string) {
        setFinishTime(dateEvent)
    }

    function handleDay(dateEvent: string) {
        setDayWeek(dateEvent)
    }

    return(
        <View className='flex-1 bg-background pt-6'>
            <BackButton title='Semana' />

            <ScrollView 
            className='mx-5 space-y-4 mt-6'
            showsVerticalScrollIndicator={false}>
                <TextInput
                label="Título"
                value={title}
                onChangeText={title => setTitle(title)}
                className='w-auto bg-background'
                mode='outlined'
                outlineColor='#306D9C'
                activeOutlineColor='#306D9C'
                />
                
                <InputDayTime onTimeStart={handleTimeStart} onTimeFinish={handleTimeFinish} onDay={handleDay} />

                <TextInput
                label="Descrição"
                value={description}
                onChangeText={description => setDescription(description)}
                className='w-auto bg-background'
                mode='outlined'
                outlineColor='#306D9C'
                activeOutlineColor='#306D9C'
                />
                
                <Button 
                onPress={handleCreateNewWeekActivity}
                mode="contained" 
                className='w-auto h-12 bg-primary justify-center rounded-lg'>
                    Salvar
                </Button>
            </ScrollView>
        </View>
    )}