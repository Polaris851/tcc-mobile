import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'; 

import dayjs from 'dayjs';

import { Header } from '../components/Header';
import { SliderButton } from '../components/SliderButton';

const weekDays = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'];

export function Week() {
    const { navigate } = useNavigation();

    const month = dayjs().format('MMMM');
    
    return (
        <View className='flex-1 bg-background pt-6'>
            <Header title='Caléndario'/>

            <ScrollView showsVerticalScrollIndicator={false}>
                <Text className='text-lg font-bold pt-6 px-5 uppercase'>{month}</Text>

                <SliderButton />

                <View className='flex-row my-6 justify-center'>
                    {
                        weekDays.map((weekDay, i) => (
                            <View 
                            key={`${weekDay}-${i}`}
                            className='bg-primary w-12 h-16 m-1 p-1 rounded-lg'
                            >
                                <Text className='text-lg text-white font-semibold text-center'>
                                    {`0${i+1}`}
                                </Text>
                                <Text className='text-sm text-white font-regular text-center'>
                                    {weekDay}
                                </Text>
                            </View>
                        ))
                    }
                </View> 

                <View className='flex-row justify-between items-center mx-5 my-4'>
                        <Text className='text-lg font-bold'>Semana</Text>

                        <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => navigate('formweek')}
                        >
                            <Feather 
                            name="plus-circle" 
                            size={22} 
                            color="black" />
                        </TouchableOpacity>
                    </View>

                <View className='bg-sky-100 px-5 py-6 h-screen'>
                    <View className='flex-row justify-between items-center'>
                        <Text className='text-lg font-bold'>Matérias</Text>

                        <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => navigate('formclass')}
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