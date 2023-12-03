import React, {useState} from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import { useRouter } from 'expo-router'
import styles from './welcome.style'
import { SIZES, icons } from '../../../constants'

const Welcome = () => {
  const router = useRouter()
  return (
    <View>
      <View style={styles.container} >
        <Text style={styles.userName} >Hey, You!</Text>
        <Text style={styles.welcomeMessage} >Find your perfect job!</Text>

      </View>

      <View style={styles.searchContainer} >
        <View style={styles.searchWrapper} >
          <TextInput style={styles.searchInput} value='' onChange={() => {}} placeholder='Define your dream role...' />

        </View>

      </View>
    </View>
  )
}

export default Welcome