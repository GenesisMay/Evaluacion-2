import React from 'react'
import { Image, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'

export const Image2Screen = () => {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Segunda Imagen</Text>
    <Image 
      style={styles.image}
      source={{uri:'https://www.questionpro.com/blog/wp-content/uploads/2022/07/2066-Encuestas-llamativas.jpg'}}/>
  </View>
  )
}
