import { Text, TouchableOpacity, View, TouchableOpacityProps } from 'react-native';
import { Feather } from '@expo/vector-icons'; 

interface Props extends TouchableOpacityProps {
    title: string,
    checked?: boolean,
}

export function Checkbox({ title, checked = false, ...rest }: Props) {
return(
    <TouchableOpacity
    activeOpacity={0.7}
    className='flex-row mb-2 items-center mx-5'
    {...rest} >
        {
            checked ?
            <View 
            className='w-8 h-8 bg-primary items-center justify-center rounded-lg'>
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