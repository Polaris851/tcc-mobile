import { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import {Picker} from '@react-native-picker/picker'

import { Feather } from '@expo/vector-icons';
import { InputTimePicker } from './InputTimePicker';

interface Props {
    onTimeStart: Function,
    onTimeFinish: Function,
    onDay: Function,
}

const FieldEnum: { [key: string]: string } =  {
    Segunda: 'Segunda-Feira',
    Terça: 'Terça-Feira',
    Quarta: 'Quarta-Feira',
    Quinta: 'Quinta-Feira',
    Sexta: 'Sexta-Feira',
  }

export function InputDayTime({onTimeStart, onTimeFinish, onDay}: Props) {
    const [dayWeek, setDayWeek] = useState('')
    const [field, setField] = useState(FieldEnum.Segunda)

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
            
            <View className='flex-row my-3'>
                <TouchableOpacity 
                className='w-32 h-16 m-1 border border-primary justify-center rounded-lg'>
                    <Picker
                    selectedValue={field}
                    onValueChange={itemValue => setField(itemValue)}>
                        {Object.keys(FieldEnum).map((key) => (
                        <Picker.Item key={key} label={FieldEnum[key]} value={key} />
                        ))}
                    </Picker>
                </TouchableOpacity>

                <InputTimePicker title='Começa' onTime={handleTimeStart}/>

                <InputTimePicker title='Termina' onTime={handleTimeFinish}/>

            </View>
        </View>
    )}
