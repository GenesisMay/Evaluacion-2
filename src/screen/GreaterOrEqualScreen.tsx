import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { TextInput } from 'react-native-gesture-handler'
import { InputComponent } from '../components/InPutComponent'
import { ButtonComponent } from '../components/ButtonComponent';

export const GreaterOrEqualScreen = () => {

  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [resultado, setResultado] = useState('');

  const mayorIgual = () => {
    const num1 = Number(numero1);
    const num2 = Number(numero2);

    let valor = '';
    if (num1 > num2) {
      valor= 'MAYOR';

    } else if (num1 === num2) {
      valor = 'IGUAL'
    };

    setResultado(valor);
  };

  return (
    <View style={styles.container}>
      <Text>Formulario</Text>
      <Text>Campo 1</Text>
      <InputComponent
      placeholder='Ingrese el número'
      value={numero1}
      onChangeText={setNumero1}
      />
      
      <Text>Campo 2</Text>
      <InputComponent
      placeholder='Ingrese el número'
      value={numero2}
      onChangeText={setNumero2}
      />

      <ButtonComponent textButton='Iniciar' onPress={valor}/>

    </View>
  )
}
