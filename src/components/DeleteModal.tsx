import { useState } from 'react'
import { Modal, StyleSheet, Text, View, TouchableOpacityProps, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'

interface Props extends TouchableOpacityProps {
    title: string,
    color: string,
}

export function DeleteModal({ title, color, ...rest }: Props) {
    const [modalVisible, setModalVisible] = useState(false)

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
                <TouchableOpacity
                    className='bg-primary w-32 p-4 rounded-xl'
                    activeOpacity={0.7}
                    {...rest}>
                    <Text className='text-white text-center font-bold'>Excluir</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    className='border-2 w-32 border-primary p-4 rounded-xl'
                    onPress={() => setModalVisible(!modalVisible)} 
                    activeOpacity={0.7}>
                    <Text className='text-primary text-center font-bold'>Cancelar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          activeOpacity={0.7}>
            <Feather 
            name="trash" 
            size={20} 
            color={color} />
        </TouchableOpacity>
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