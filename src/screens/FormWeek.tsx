import { useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { Feather } from '@expo/vector-icons'; 

import { BackButton } from '../components/BackButton';

export function FormWeek() {
    const [title, setTitle] = useState("");

    return(
        <View className='flex-1 bg-background pt-6'>
            <BackButton title='Semana' />

            <ScrollView 
            className='mx-5 space-y-4 mt-6'
            showsVerticalScrollIndicator={false}>
                <TextInput
                label="Título"
                value={title}
                onChangeText={title => setTitle(title)}
                className='w-auto bg-background'
                mode='outlined'
                outlineColor='#306D9C'
                activeOutlineColor='#306D9C'
                />
                

                <View>
                    <View className='flex-row justify-between items-center'>
                        <Text className='text-lg font-bold'>Dia e Horario</Text>

                        <TouchableOpacity
                        activeOpacity={0.7}
                        >
                            <Feather 
                            name="plus-circle" 
                            size={22} 
                            color="black" />
                        </TouchableOpacity>
                    </View>
                    
                    <View className='flex-row my-3 space-x-2'>
                            <TextInput
                            label="Dia da Aula"
                            value={title}
                            onChangeText={title => setTitle(title)}
                            className='w-36  bg-background'
                            mode='outlined'
                            outlineColor='#306D9C'
                            activeOutlineColor='#306D9C'
                            />

                            <TextInput
                            label="Começa"
                            value={title}
                            onChangeText={title => setTitle(title)}
                            className='w-24 bg-background'
                            mode='outlined'
                            outlineColor='#306D9C'
                            activeOutlineColor='#306D9C'
                            />

                            <TextInput
                            label="Termina"
                            value={title}
                            onChangeText={title => setTitle(title)}
                            className='w-24 bg-background'
                            mode='outlined'
                            outlineColor='#306D9C'
                            activeOutlineColor='#306D9C'
                            />
                    </View>
                </View>

                <TextInput
                label="Descrição"
                value={title}
                onChangeText={title => setTitle(title)}
                className='w-auto bg-background'
                mode='outlined'
                outlineColor='#306D9C'
                activeOutlineColor='#306D9C'
                />
                
                <Button 
                onPress={() => console.log('Pressed')}
                mode="contained" 
                className='w-auto h-12 bg-primary justify-center rounded-lg'
                >
                    Salvar
                </Button>
            </ScrollView>
        </View>
    )}