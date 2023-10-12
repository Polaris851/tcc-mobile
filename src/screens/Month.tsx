import { useState, useCallback } from 'react'
import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import {Calendar} from 'react-native-calendars'
import { Feather } from '@expo/vector-icons'

import dayjs from 'dayjs';

import { api } from '../lib/axios'
import { Header } from '../components/Header'
import { SliderButton } from '../components/SliderButton'
import { Calendars } from '../components/Calendars'
import { CardEvent } from '../components/CardEvent'
import { Loading } from '../components/Loading'

interface DayInfoProps {
    id: string,
    title: string,
    discipline: string,
    dueDate: string,
}

type MyDataArray = DayInfoProps[];

export function Month() {
    const month = dayjs().format('MMMM')

    const { navigate } = useNavigation()

    const [selected, setSelected] = useState('')
    const [ loading, setLoading ] = useState(true)
    const [ dayInfo, setDayInfo ] = useState<MyDataArray | null>(null)


    async function fetchEvents() {
        try {
           setLoading(true)

            const response = await api.get("/events")
            setDayInfo(response.data)
            console.log(response.data)
        } catch (error) {
            console.log(error)
            Alert.alert("Ops", "Não foi possível carregar as informações dos eventos.")
        } finally {
            setLoading(false)
        }
    }

    useFocusEffect(useCallback(() => {
        fetchEvents()
    }, []))

    if(loading) {
        return(
            <Loading />
        )
    }

    return (
        <View className='flex-1 bg-background pt-6'>
            <Header title='Caléndario'/>

            <ScrollView 
            showsVerticalScrollIndicator={false}>
                <Text className='text-lg font-bold pt-6 px-5 uppercase'>{month}</Text>

                <SliderButton />

               {/* <Calendars /> */}

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

                    
                {
                    dayInfo?.map(a => (
                        <CardEvent 
                        key={a.id}
                        title={a.title}
                        discipline={a.discipline}
                        dueDate={dayjs(a.dueDate).format('DD/MM')}
                        />
                    ))

                }
                </View> 
            </ScrollView>
        </View>
    )
}