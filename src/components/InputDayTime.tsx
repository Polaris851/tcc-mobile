import { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-paper'

import { Feather } from '@expo/vector-icons';
import { InputTimePicker } from './InputTimePicker';

interface Props {
    onTimeStart: Function,
    onTimeFinish: Function,
    onDay: Function,
}

export function InputDayTime({onTimeStart, onTimeFinish, onDay}: Props) {
    const [dayWeek, setDayWeek] = useState('')

    function handleTimeStart(dateEvent: string) {
        onTimeStart(dateEvent)
    }

    function handleTimeFinish(dateEvent: string) {
        onTimeFinish(dateEvent)
    }

    function handleDay(dateEvent: string) {
        onDay(dateEvent)
    }
    
    return(
        <View>
            <View className='flex-row mt-6 justify-between items-center'>
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
                label="Dia da semana"
                value={dayWeek}
                onChangeText={dayWeek => handleDay(dayWeek)}
                className='w-36 h-16 m-0 p-0 bg-background'
                mode='outlined'
                outlineColor='#306D9C'
                activeOutlineColor='#306D9C'
                />

                <InputTimePicker title='Começa' onTime={handleTimeStart}/>

                <InputTimePicker title='Termina' onTime={handleTimeFinish}/>

            </View>
        </View>
    )}
