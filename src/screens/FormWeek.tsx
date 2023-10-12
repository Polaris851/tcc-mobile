import { useState } from 'react'
import { View, ScrollView, Text, TouchableOpacity, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { TextInput, Button } from 'react-native-paper'
import { Feather } from '@expo/vector-icons'

import { api } from '../lib/axios'
import { BackButton } from '../components/BackButton'

export function FormWeek() {
    const { navigate } = useNavigation()

    const [title, setTitle] = useState("")
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
                

                <View>
                    <View className='flex-row justify-between items-center'>
                        <Text className='text-lg font-bold'>Dia e Horario</Text>

                        <TouchableOpacity
                        activeOpacity={0.7}
                        >
                            <Feather 
                            name="plus-circle" 
                            size={22} 
                            color="black" />
                        </TouchableOpacity>
                    </View>
                    
                    <View className='flex-row my-3 space-x-2'>
                            <TextInput
                            label="Dia da Aula"
                            value={title}
                            onChangeText={title => setTitle(title)}
                            className='w-36  bg-background'
                            mode='outlined'
                            outlineColor='#306D9C'
                            activeOutlineColor='#306D9C'
                            />

                            <TextInput
                            label="Começa"
                            value={title}
                            onChangeText={title => setTitle(title)}
                            className='w-24 bg-background'
                            mode='outlined'
                            outlineColor='#306D9C'
                            activeOutlineColor='#306D9C'
                            />

                            <TextInput
                            label="Termina"
                            value={title}
                            onChangeText={title => setTitle(title)}
                            className='w-24 bg-background'
                            mode='outlined'
                            outlineColor='#306D9C'
                            activeOutlineColor='#306D9C'
                            />
                    </View>
                </View>

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