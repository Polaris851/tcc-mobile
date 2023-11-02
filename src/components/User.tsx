import { Text, View} from 'react-native'

export function User() {

    return(
        <View className='flex-row items-center pt-6 space-x-4'>
            <View className='bg-primary w-14 h-14 rounded-full'></View>

            <View>
                <Text className='text-lg font-bold'>Letícia Polari Romera</Text>
                <View className='flex-row space-x-2'>
                    <Text className='text-base font-bold'>Curso:</Text>
                    <Text className='text-base font-regular'>Redes</Text>
                </View>
            </View>
        </View>
    )}