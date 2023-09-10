import { View, Text} from 'react-native';
import { generateRangeDatesFromMonthStart } from '../utils/generate-range-between-dates';
import { DayHeatMap, DAY_SIZE } from '../components/DayHeatMap';

import dayjs from 'dayjs';

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

const datesFromMonthStart = generateRangeDatesFromMonthStart();

export function HeatMap() {
    const startDate = dayjs().startOf('month');
    const week = startDate.format('d');
    const numberWeek = Number(week);

    const mappedDates = [];
    for (let i = 0; i < numberWeek; i++) {
      mappedDates.push(i);
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

                <View className='flex-row flex-wrap'>
                {   numberWeek > 0 && mappedDates.map((date,i) =>(
                        <View
                        key={`${date}-${i}`}
                        className='m-1'
                        style={{ width: DAY_SIZE}}
                        />))
                }
                {   datesFromMonthStart.map(date =>(
                        <DayHeatMap 
                        key={date.toISOString()}
                        /> ))
                }
                </View>
            </View>
    )}