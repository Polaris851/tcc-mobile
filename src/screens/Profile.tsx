import { View, Text, ScrollView} from 'react-native'

import dayjs from 'dayjs'

import { Header } from '../components/Header'
import { HeatMap } from '../components/HeatMap'
import { User } from '../components/User'


export function Profile() {
    const month = dayjs().format('MMMM')

    return(
        <View className='flex-1 bg-background pt-6'>
            <Header title='Perfil' />

            <ScrollView
            className='px-5'
            showsVerticalScrollIndicator={false}>
                <User />

                <Text className='text-lg font-bold pt-6 uppercase'>{month}</Text>
                
                <HeatMap />
                
            </ScrollView>
        </View>
    )}
