import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps <any, any>{};

export const Screen = ({navigation}: Props) => {
    return (
    <View style={styles.container}>
        <Text style={styles.title}>- Bienvenido -</Text>
        
    <View>
    <Button 
        title='Imagen 1'
        onPress={()=>navigation.navigate('Image 1')}/>
    </View>
    
    <Button 
        title='Imagen 2'
        onPress={()=>navigation.navigate('Image 2')}/>
    
    <Button 
        title='>='
        onPress={()=>navigation.navigate('>=')}/>
    
    <Button 
        title='<='
        onPress={()=>navigation.navigate('<=')}/>

    </View>
    )
}