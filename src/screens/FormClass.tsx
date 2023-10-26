import { useState } from 'react'
import { View, TouchableOpacity, ScrollView, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import {Picker} from '@react-native-picker/picker'

import { TextInput, Button } from 'react-native-paper'

import { api } from '../lib/axios'
import { BackButton } from '../components/BackButton'
import { InputDayTime } from '../components/InputDayTime'

const FieldEnum: { [key: string]: string } =  {
    Matematica: 'Matemática',
    Naturezas: 'Ciências da Natureza',
    Humanas: 'Ciências Humanas',
    Linguagens: 'Linguagens',
    Tecnico: 'Técnico',
  }

export function FormClass() {
    const { navigate } = useNavigation()

    const [discipline, setDiscipline] = useState("")
    const [startTime, setStartTime] = useState("")
    const [finishTime, setFinishTime] = useState("")
    const [dayWeek, setDayWeek] = useState("")
    const [field, setField] = useState(FieldEnum.Matematica)

    async function handleCreateNewDiscipline() {
        try {
            if(!discipline.trim()) {
                Alert.alert("Matérias", "Informe os dados das matérias.")
                return
            }

            await api.post("/disciplines", {discipline, field})

            setDiscipline("")
            setField(FieldEnum.Matematica)

            Alert.alert("Matérias", "Matéria criada com sucesso!", [{ text: "OK", onPress: () => { navigate('week')} }])
        } catch (error) {
            console.log(error)
            Alert.alert("Ops", "Não foi possível criar a matéria.")
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
            <BackButton title='Matérias' />

            <ScrollView 
            className='mx-5 space-y-4 mt-6'
            showsVerticalScrollIndicator={false}>
                <TextInput
                label="Matéria"
                value={discipline}
                placeholder='Coloque o nome da máteria...'
                onChangeText={discipline => setDiscipline(discipline)}
                className='w-auto bg-background'
                mode='outlined'
                outlineColor='#306D9C'
                activeOutlineColor='#306D9C'
                />

                <TouchableOpacity 
                className='w-auto h-12 mt-6 border border-primary justify-center rounded-lg'>
                    <Picker
                    selectedValue={field}
                    onValueChange={itemValue => setField(itemValue)}>
                        {Object.keys(FieldEnum).map((key) => (
                        <Picker.Item key={key} label={FieldEnum[key]} value={key} />
                        ))}
                    </Picker>
                </TouchableOpacity>
                
                <InputDayTime onTimeStart={handleTimeStart} onTimeFinish={handleTimeFinish} onDay={handleDay} />

                <Button 
                onPress={handleCreateNewDiscipline}
                mode="contained" 
                className='w-auto h-12 bg-primary justify-center rounded-lg'
                >
                    Salvar
                </Button>
            </ScrollView>
        </View>
    )}