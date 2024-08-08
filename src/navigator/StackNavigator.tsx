import React from 'react'
import { Image1Screen } from '../screen/Image1Screen'
import { Image2Screen } from '../screen/Image2Screen'
import { createStackNavigator } from '@react-navigation/stack';
import { GreaterOrEqualScreen } from '../screen/GreaterOrEqualScreen';
import { ManorOrEqual } from '../screen/ManorOrEqual';
import { Screen } from '../screen/Screen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Menu" component={Screen} />
        <Stack.Screen name="Image 1" component={Image1Screen} />
        <Stack.Screen name="Image 2" component={Image2Screen} />
        <Stack.Screen name=">=" component={GreaterOrEqualScreen} />
        <Stack.Screen name="<=" component={ManorOrEqual} />
    </Stack.Navigator>
  )
}
