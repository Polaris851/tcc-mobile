import { useState } from 'react'
import { View, Text, TouchableOpacity} from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import { Picker } from '@react-native-picker/picker'
import { useNavigation } from "@react-navigation/native"

const CursoEnum: { [key: string]: string } =  {
    Quimica: 'Química',
    Mecatronica: 'Mecatrônica',
    Redes: 'Redes de Computadores',
}

export function Register() {
  const { navigate } = useNavigation()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [curso, setCurso] = useState(CursoEnum.Quimica)

    return(
        <View className="flex-1 bg-background justify-center px-8">
            <View className="items-center mb-8 space-y-2">
                <Text className="font-bold text-primary text-2xl">Agenda Escolar</Text>
                <Text className="font-regular text-primary text-xl">Faça parte da nossa comunidade!</Text>
            </View>

            <TextInput
            label="Nome"
            value={name}
            onChangeText={name => setName(name)}
            className='w-auto bg-background my-2'
            mode='outlined'
            outlineColor='#306D9C'
            activeOutlineColor='#306D9C'
            />

            <TouchableOpacity 
                    className='w-auto h-12 my-2 border border-primary justify-center rounded-lg'
                    activeOpacity={0.7}
                >
                    <Picker
                        selectedValue={curso}
                        onValueChange={itemValue => setCurso(itemValue)}
                    >
                        {Object.keys(CursoEnum).map((key) => (
                        <Picker.Item key={key} label={CursoEnum[key]} value={key} />
                        ))}
                    </Picker>
                </TouchableOpacity>


            <TextInput
            label="Email"
            value={email}
            onChangeText={email => setEmail(email)}
            className='w-auto bg-background my-2'
            mode='outlined'
            outlineColor='#306D9C'
            activeOutlineColor='#306D9C'
            />

            <TextInput
            label="Senha"
            value={password}
            onChangeText={password => setPassword(password)}
            className='w-auto bg-background my-2'
            mode='outlined'
            outlineColor='#306D9C'
            activeOutlineColor='#306D9C'
            secureTextEntry
            right={<TextInput.Icon icon="eye" />}
            />

            <Button 
                onPress={() => console.log('Pressed')}
                mode="contained" 
                className='w-auto h-12 my-2 bg-primary justify-center rounded-lg'
            >
                Cadastre-se
            </Button>

            <Text className="font-regular text-sm">Já possui uma conta? {' '}
                <Text
                    className="text-primary text-base underline active:text-secondary"
                    onPress={() => navigate('login')}>
                    Clique aqui
                </Text> 
            </Text>
            
        </View>
    )
}