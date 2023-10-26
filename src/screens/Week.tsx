import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons';

import dayjs from 'dayjs'

import { Header } from '../components/Header'
import { SliderButton } from '../components/SliderButton'
import { CardDiscipline } from '../components/CardDiscipline'

const FieldEnum: { [key: string]: string } =  {
    Matematica: 'Matemática',
    Naturezas: 'Ciências da Natureza',
    Humanas: 'Ciências Humanas',
    Linguagens: 'Linguagens',
    Tecnico: 'Técnico',
  }

export function Week() {
    const currentMonth = dayjs().format('MMMM')
    const currentDate = dayjs().format('DD ddd')
    const currentDay = dayjs().day()
    const lastSunday = dayjs().day(-1)
    const startDate = lastSunday.add(currentDay, 'day')

    const daysOfWeek = [];
    for (let i = 0; i < 7; i++) {
        daysOfWeek.push(startDate.add(i, 'day').format('DD ddd'))
    }

    const { navigate } = useNavigation()

    return (
        <View className='flex-1 bg-background pt-6'>
            <Header title='Caléndario'/>

            <ScrollView showsVerticalScrollIndicator={false}>
                <Text className='text-lg font-bold pt-6 px-5 uppercase'>{currentMonth}</Text>

                <SliderButton />

                <View className='flex-row my-6 justify-center'>
                    {
                        daysOfWeek.map((weekDay, i) => (
                            currentDate == weekDay ? <View 
                            key={`${weekDay}-${i}`}
                            className='border-2 border-primary w-12 h-16 m-1 rounded-lg'>
                                <Text className='text-base p-1 text-primary font-semibold text-center'>
                                    {weekDay}
                                </Text>
                            </View> : <View 
                            key={`${weekDay}-${i}`}
                            className='bg-primary w-12 h-16 m-1 rounded-lg'>
                                <Text className='text-base p-1 text-white font-semibold text-center'>
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

                <View className='bg-secondary px-5 py-6 h-auto'>
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
                    {
                        Object.keys(FieldEnum).map(key => (
                            <CardDiscipline 
                            key={key}
                            field={FieldEnum[key]}
                            FieldEnum={key}
                            />
                        ))
                    }
                </View>
            </ScrollView>
        </View>
    )
}