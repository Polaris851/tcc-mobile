import { View, Text, TouchableOpacity} from 'react-native';
import { Feather } from '@expo/vector-icons'; 

interface Props {
    title: string,
    discipline: string,
    dueDate: string,
}

export function CardEvent({ title, discipline, dueDate }: Props) {
    return(
        <View className='w-auto h-16 mt-6 bg-primary flex-row justify-between items-center px-6 rounded-3xl'>
           <Text className='text-white capitalize'>
                <Text className='font-bold text-lg'>{title}</Text> - <Text className='text-base'>{discipline}</Text>
            </Text> 
            <Text className='text-white font-bold text-lg'>{dueDate}</Text>
        </View>
    )}