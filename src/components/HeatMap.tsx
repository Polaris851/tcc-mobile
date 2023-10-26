import { useState, useEffect } from 'react'
import { View, Text, Alert} from 'react-native'

import { api } from '../lib/axios'
import { DayHeatMap, DAY_SIZE } from '../components/DayHeatMap'
import { generateDateRangeFromMonthStartToToday } from '../utils/generate-date-range-from-month-start-to-today'

import dayjs from 'dayjs'
import { Loading } from './Loading'

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

const monthToDateRange  = generateDateRangeFromMonthStartToToday()

interface Props {
    id: string,
    created_at: string,
    completed: boolean
}

type SummaryProps = Array<{
    id: string;
    date: string;
    amount: number;
    completed: number;
  }>

export function HeatMap() {
    const startDate = dayjs().startOf('month')
    const week = startDate.format('d')
    const numberWeek = Number(week)
    const [loading, setLoading] = useState(true)
    const [summary, setSummary] = useState<SummaryProps | null>(null)

    const mappedDates = []
    for (let i = 0; i < numberWeek; i++) {
      mappedDates.push(i)
    }

    async function fetchData() {
        try {
            setLoading(true)
            const response = await api.get('/summary');
            setSummary(response.data)
          } catch (error) {
            Alert.alert('Ops', 'Não foi possível carregar o sumário de hábitos.')
            console.log(error)
          } finally {
            setLoading(false)
          }
    }

    useEffect(() => {
        fetchData()
    }, [])

    if (loading) {
        return (
          <Loading />
        )
      }

    return(
            <View>
                <View className='flex-row mt-6 mb-2'>
                    {
                        weekDays.map((weekDay, i) => (
                            <Text 
                            key={`${weekDay}-${i}`}
                            className='text-base font-semibold text-center m-1'
                            style={{ width: DAY_SIZE}}
                            >
                                {weekDay}
                            </Text>
                        ))
                    }
                </View>

                {
                summary && (
                    <View className='flex-row flex-wrap'>
                    {
                        monthToDateRange.map(date => {
                        const dayWithHabits = summary.find(day => {
                            return dayjs(date).isSame(day.date, 'day')
                        })

                        return (
                            <DayHeatMap 
                            key={date.toISOString()}
                            date={date}
                            amountOfHabits={dayWithHabits?.amount}
                            amountCompleted={dayWithHabits?.completed}
                            />
                        )
                        })
                    }
                    </View>
                )
                }

                {/* <View className='flex-row flex-wrap'>
                {   numberWeek > 0 && mappedDates.map((date,i) =>(
                        <View
                        key={`${date}-${i}`}
                        className='m-1'
                        style={{ width: DAY_SIZE }}
                        />))
                }
                {   monthToDateRange.map(date =>(
                        <DayHeatMap 
                        key={date.toISOString()}
                        /> ))
                }
                </View> */}
            </View>
    )}