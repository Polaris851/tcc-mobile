import { useState } from 'react'
import { View, ScrollView, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { TextInput, Button } from 'react-native-paper'

import { api } from '../lib/axios'
import { BackButton } from '../components/BackButton'
import { DateTimePicker } from '../components/DateTimePicker'


export function FormEvent() {
    const { navigate } = useNavigation()

    const [title, setTitle] = useState('')
    const [discipline, setDiscipline] = useState('')
    const [dueDate, setDueDate] = useState('')
    const [alertDate, setAlertDate] = useState('')
    const [description, setDescription] = useState('')

    async function handleCreateNewEvent() {
        try {
            if(!title.trim() && !discipline.trim() && !dueDate.trim()) {
                Alert.alert("Eventos", "Informe os dados do evento.")
                return
            }

            await api.post("/monthlyevents", { title, discipline, dueDate, alertDate, description })

            setTitle("")
            setDiscipline("")
            setDescription("")

            Alert.alert("Eventos", "Evento criado com sucesso!", [{ text: "OK", onPress: () => { navigate('month')} }])
        } catch (error) {
            console.log(error)
            Alert.alert("Ops", "Não foi possível criar o evento.")
        }
    }

    function handleDateEvent(dateEvent: string) {
        setDueDate(dateEvent)
    }

    function handleDateAlertEvent(dateEvent: string) {
        setAlertDate(dateEvent)
    }

    return(
        <View className='flex-1 bg-background pt-6'>
            <BackButton title='Eventos' />

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
                
                <TextInput
                label="Matéria"
                value={discipline}
                onChangeText={discipline => setDiscipline(discipline)}
                className='w-auto bg-background'
                mode='outlined'
                outlineColor='#306D9C'
                activeOutlineColor='#306D9C'
                />

                <DateTimePicker title='Data de Entrega' onDate={handleDateEvent} />
                
                <DateTimePicker title='Data de Alerta' onDate={handleDateAlertEvent}/>

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
                onPress={handleCreateNewEvent}
                mode="contained" 
                className='w-auto h-12 bg-primary justify-center rounded-lg'>
                    Salvar
                </Button>
            </ScrollView>
        </View>
    )}