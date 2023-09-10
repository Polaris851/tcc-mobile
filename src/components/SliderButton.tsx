import { Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'

export function SliderButton() {
    const { navigate } = useNavigation();
    const route = useRoute();
    return(
        <View
        className='flex-row my-2 items-center justify-center mx-5 bg-sky-100 h-16 w-auto rounded-2xl'
        >
            <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigate('month')}
            >
                <View className='w-40 mx-2 justify-center' style={route.name == 'month' && styles.slider}>
                    <Text className='text-xl font-bold text-center' style={route.name == 'month' && styles.valueText}>Mês</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigate('week')}
            >
                <View className='mx-2 w-40 justify-center' style={route.name == 'week' && styles.slider}>
                    <Text className='text-xl font-bold text-center' style={route.name == 'week' && styles.valueText}>Semana</Text>
                </View>
            </TouchableOpacity>
        </View>
    )}

    const styles = StyleSheet.create({
        slider: {
          height: '70%',
          backgroundColor: '#306D9C',
          borderRadius: 12,
        },
        valueText: {
            color: '#fff'
        },
      });