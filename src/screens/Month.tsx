import { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Calendar} from 'react-native-calendars';
import { Feather } from '@expo/vector-icons'; 

import dayjs from 'dayjs';

import { Header } from '../components/Header';
import { SliderButton } from '../components/SliderButton';

export function Month() {
    const month = dayjs().format('MMMM');

    const { navigate } = useNavigation();
    const [selected, setSelected] = useState('');

    return (
        <View className='flex-1 bg-background pt-6'>
            <Header title='Caléndario'/>

            <ScrollView 
            showsVerticalScrollIndicator={false}>
                <Text className='text-lg font-bold pt-6 px-5 uppercase'>{month}</Text>

                <SliderButton />

                <Calendar
                className='my-3'
                onDayPress={day => {
                    setSelected(day.dateString);
                }}
                markedDates={{
                    [selected]: {selected: true, disableTouchEvent: true, selectedColor: "#306D9C"}
                }}
                />

                <View className='bg-sky-100 px-5 py-6 h-screen'>
                    <View className='flex-row justify-between items-center'>
                        <Text className='text-lg font-bold'>Eventos</Text>

                        <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => navigate('formevent')}
                        >
                            <Feather 
                            name="plus-circle" 
                            size={22} 
                            color="black" />
                        </TouchableOpacity>
                    </View>
                </View> 
            </ScrollView>
        </View>
    )
}