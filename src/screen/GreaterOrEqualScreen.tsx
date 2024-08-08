import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme';
import { InputComponent } from '../components/InPutComponent'
import { ButtonComponent } from '../components/ButtonComponent';

export const GreaterOrEqualScreen = () => {

  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [resultado, setResultado] = useState('');

  const mayorIgual = () => {
    const num1 = Number(numero1);
    const num2 = Number(numero2);

    if (num1 > num2) {
      setResultado(`MAYOR: ${num1}`);
    } else if (num1 < num2) {
      setResultado(`MAYOR: ${num2}`);
    } else {
      setResultado('IGUALES');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Formulario</Text>

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

      <ButtonComponent 
      textButton='Iniciar' 
      onPress={mayorIgual}/>
      {resultado !== '' && (
        <Text>Resultado: {resultado}</Text>
      )
      }
    </View>
  )
}
