import { useState } from 'react';
import { View, Text} from 'react-native';
import { TextInput, Button } from 'react-native-paper';

export function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return(
        <View className="flex-1 bg-background justify-center px-8">
            <View className="items-center m-8 space-y-2">
                <Text className="font-bold text-primary text-2xl">Agenda Escolar</Text>
                <Text className="font-regular text-primary text-xl">Boas vindas!</Text>
            </View>

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
                    Entrar
                </Button>
                <Text className="font-regular text-sm">Não tem uma conta? Cadastre-se</Text>
            </View>

        </View>
    )
}