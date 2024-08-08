import React from 'react'
import { Image, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'

export const Image1Screen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Primera Imagen</Text>
      <Image 
        style={styles.image}
        source={{uri:'https://static.vecteezy.com/system/resources/previews/008/327/504/non_2x/a-girl-with-a-laptop-is-working-the-girl-is-browsing-the-internet-conversations-online-conferences-the-concept-of-online-education-flat-illustration-vector.jpg'}}/>
    </View>
  )
}
