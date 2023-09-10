import { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

import { BackButton } from '../components/BackButton';

export function FormEvent() {
    const [title, setTitle] = useState("");

    return(
        <View className='flex-1 bg-background pt-6'>
            <BackButton title='Eventos' />

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
                
                <TextInput
                label="Matéria"
                value={title}
                onChangeText={title => setTitle(title)}
                className='w-auto bg-background'
                mode='outlined'
                outlineColor='#306D9C'
                activeOutlineColor='#306D9C'
                />

                <TextInput
                label="Data de Entrega"
                value={title}
                onChangeText={title => setTitle(title)}
                className='w-auto bg-background'
                mode='outlined'
                outlineColor='#306D9C'
                activeOutlineColor='#306D9C'
                />
                
                <TextInput
                label="Data de Alerta"
                value={title}
                placeholder='Começar a alerta em...'
                onChangeText={title => setTitle(title)}
                className='w-auto bg-background'
                mode='outlined'
                outlineColor='#306D9C'
                activeOutlineColor='#306D9C'
                />

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