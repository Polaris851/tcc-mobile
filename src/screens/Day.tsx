import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons'; 

import dayjs from 'dayjs';

import { Header } from '../components/Header';
import { Checkbox } from '../components/Checkbox';

export function Day() {
    const { navigate } = useNavigation();
    
    const dayOfWeek = dayjs().format('dddd');
    const dayAndMonth = dayjs().format('DD/MM');

    return(
        <View className='flex-1 bg-background pt-6'>
            <Header title='Meu Dia' />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View className='flex-row justify-between items-center px-5 pt-6'>
                    <View>
                        <Text className='text-xs font-semibold uppercase'>{dayOfWeek}</Text>
                        <Text className='text-2xl font-bold'>{dayAndMonth}</Text>
                    </View>
                    
                    <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => navigate('formday')}
                    >
                        <Feather 
                        name="plus-circle" 
                        size={22} 
                        color="black" />
                    </TouchableOpacity>
                </View>

                <ProgressBar 
                progress={0.6} 
                color='#306D9C'
                className='justify-center h-3 mx-5 my-6 items-center rounded-md'
                />

                <Checkbox title='Estudar matematica' />
                <Checkbox checked title='Estudar geografia' />
                <Checkbox checked title='Estudar biologia' />

            </ScrollView>

        </View>
    )}