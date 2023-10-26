import { useState } from 'react'
import { Modal, StyleSheet, Text, Pressable, View, TouchableOpacityProps } from 'react-native';
import { Feather } from '@expo/vector-icons'

interface Props extends TouchableOpacityProps {
    title: string,
}

export function ModalDelete({ title, ...rest }: Props) {
    const [modalVisible, setModalVisible] = useState(false);

    return(
    <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View className='align-center justify-center flex-1'>
            <View className='bg-white rounded-xl items-center m-10 p-10' style={styles.modalView}>
                <Feather 
                name="trash" 
                size={36} 
                color="black" />
              <Text className="text-center text-xl m-5">Deseja excluir {title}?</Text>
              <View className='flex-row space-x-2 items-center'>
                <Pressable
                    className='bg-primary w-32 p-4 rounded-xl'
                    {...rest}>
                    <Text className='text-white text-center font-bold'>Excluir</Text>
                </Pressable>
                <Pressable
                    className='border-2 w-32 border-primary p-4 rounded-xl'
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text className='text-primary text-center font-bold'>Cancelar</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
        <Pressable
          onPress={() => setModalVisible(true)}>
            <Feather 
            name="trash" 
            size={20} 
            color="white" />
        </Pressable>
      </View>
    )}

    const styles = StyleSheet.create({
        modalView: {
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 4,
          elevation: 5,
        },
      });