import { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

import { BackButton } from '../components/BackButton';

export function FormDay() {
    const [title, setTitle] = useState("");

    return(
        <View className='flex-1 bg-background pt-6'>
            <BackButton title='Meu Dia' />

            <ScrollView 
            className='mx-5 space-y-4 mt-6'
            showsVerticalScrollIndicator={false}>
                <TextInput
                label="Título"
                value={title}
                placeholder='O que você vai fazer hoje...'
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