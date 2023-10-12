import { useState, useEffect } from 'react'
import { View, Text, Alert} from 'react-native'

import { api } from '../lib/axios'
import { DayHeatMap, DAY_SIZE } from '../components/DayHeatMap'
import { generateDateRangeFromMonthStartToToday } from '../utils/generate-date-range-from-month-start-to-today'

import dayjs from 'dayjs'

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

const monthToDateRange  = generateDateRangeFromMonthStartToToday()

interface Props {
    id: string,
    created_at: string,
    completed: boolean
}

export function HeatMap() {
    const startDate = dayjs().startOf('month')
    const week = startDate.format('d')
    const numberWeek = Number(week)
    const [loading, setLoading] = useState(true)
    const [summary, setSummary] = useState(null)

    const mappedDates = []
    for (let i = 0; i < numberWeek; i++) {
      mappedDates.push(i)
    }

    async function fetchData() {
        try {
            setLoading(true)
            const response = await api.get("/summary");
            console.log(response.data)
            calcularEstatisticasTarefas(response.data)
        } catch (error) {
            Alert.alert("Ops", "Não foi possivel carregar o sumário de homeworks")
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    function calcularEstatisticasTarefas(dados: Props[]) {
        const estatisticas = {};
      
        dados.forEach(item => {
          const dataCriacao = new Date(item.created_at);
          const dataFormatada = dataCriacao.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' });
          
        //   if (!estatisticas[dataFormatada]) {
        //     estatisticas[dataFormatada] = {
        //       quantidadeCriadas: 0,
        //       quantidadeCompletadas: 0
        //     };
        //   }
          
        //   estatisticas[dataFormatada].quantidadeCriadas++;
          
        //   if (item.completed) {
        //     estatisticas[dataFormatada].quantidadeCompletadas++;
        //   }
        });
      
        return estatisticas;
      }

    useEffect(() => {
        fetchData()
    }, [])

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

                <View className='flex-row flex-wrap'>
                {   numberWeek > 0 && mappedDates.map((date,i) =>(
                        <View
                        key={`${date}-${i}`}
                        className='m-1'
                        style={{ width: DAY_SIZE}}
                        />))
                }
                {   monthToDateRange.map(date =>(
                        <DayHeatMap 
                        key={date.toISOString()}
                        /> ))
                }
                </View>
            </View>
    )}