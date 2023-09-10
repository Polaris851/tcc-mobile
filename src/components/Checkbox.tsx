import { Text, TouchableOpacity, View} from 'react-native';
import { Feather } from '@expo/vector-icons'; 

interface Props {
    title: string,
    checked?: boolean,
}

export function Checkbox({ checked = false, title}: Props) {
return(
    <TouchableOpacity
    activeOpacity={0.7}
    className='flex-row mb-2 items-center mx-5'
    >
        {
            checked ?
            <View className='w-8 h-8 bg-primary items-center justify-center rounded-lg'>
                <Feather 
                name="check" 
                size={20} 
                color='white'/>
            </View>:
            <View className='w-8 h-8 border-2 border-primary items-center justify-center rounded-lg'/>
        }

        <Text className='text-lg font-semibold ml-3'>
            {title}
        </Text>
    </TouchableOpacity>
)}