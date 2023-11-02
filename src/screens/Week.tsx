import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'

import dayjs from 'dayjs'
import clsx from "clsx"

import { Header } from '../components/Header'
import { SliderButton } from '../components/SliderButton'
import { CardDiscipline } from '../components/CardDiscipline'
import { CardDayWeek } from '../components/CardDayWeek'

const DayWeekEnum: { [key: string]: string } =  {
    Segunda: 'Segunda-Feira',
    Terca: 'Terça-Feira',
    Quarta: 'Quarta-Feira',
    Quinta: 'Quinta-Feira',
    Sexta: 'Sexta-Feira',
}

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
    const lastSunday = dayjs().day(0);
    const startDate = lastSunday;
    
    const daysOfWeek = [];
    
    for (let i = 0; i < 7; i++) {
      const day = startDate.add(i, 'day');
      daysOfWeek.push(day.format('DD ddd'));
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
                            <View 
                                key={`${weekDay}-${i}`}
                                className={clsx('w-12 h-16 m-1 rounded-lg',
                                { ['border-2 border-primary'] : currentDate == weekDay},
                                { ['bg-primary'] : currentDate != weekDay} )}
                            >
                                <Text className={clsx('text-base p-1 font-semibold text-center',
                                    { ['text-primary'] : currentDate == weekDay},
                                    { ['text-white'] : currentDate != weekDay},
                                )}>
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
                            color="black" 
                        />
                    </TouchableOpacity>
                </View>

                {  
                    Object.keys(DayWeekEnum).map(key => (
                        <CardDayWeek
                            key={key}
                            title={DayWeekEnum[key]}
                            titleEnum={key}
                        />
                    ))
                }

                <View className='bg-secondary mt-4 px-5 py-6 h-auto'>
                    <View className='flex-row justify-between items-center'>
                        <Text className='text-lg font-bold'>Matérias</Text>

                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={() => navigate('formclass')}
                        >
                            <Feather 
                                name="plus-circle" 
                                size={22} 
                                color="black" 
                            />
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