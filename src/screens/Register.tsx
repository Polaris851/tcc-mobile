import { useState } from 'react';
import { View, Text} from 'react-native';
import { TextInput, Button } from 'react-native-paper';

export function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return(
        <View className="flex-1 bg-background justify-center px-8">
            <View className="items-center m-8 space-y-2">
                <Text className="font-bold text-primary text-2xl">Agenda Escolar</Text>
                <Text className="font-regular text-primary text-xl">Faça parte da nossa comunidade!</Text>
            </View>

            <TextInput
            label="Nome"
            value={name}
            onChangeText={name => setName(name)}
            className='w-80 bg-background my-2'
            mode='outlined'
            outlineColor='#306D9C'
            activeOutlineColor='#306D9C'
            />

            <TextInput
            label="Email"
            value={email}
            onChangeText={email => setEmail(email)}
            className='w-80 bg-background my-2'
            mode='outlined'
            outlineColor='#306D9C'
            activeOutlineColor='#306D9C'
            />

            <TextInput
            label="Senha"
            value={password}
            onChangeText={password => setPassword(password)}
            className='w-80 bg-background my-2'
            mode='outlined'
            outlineColor='#306D9C'
            activeOutlineColor='#306D9C'
            secureTextEntry
            right={<TextInput.Icon icon="eye" />}
            />

            <View className="items-center m-8 space-y-2">
                <Button 
                onPress={() => console.log('Pressed')}
                mode="contained" 
                className='w-80 h-12 bg-primary justify-center'
                >
                    Cadastre-se
                </Button>
                <Text className="font-regular text-sm">Já possui uma conta? Clique aqui</Text>
            </View>

        </View>
    )
}