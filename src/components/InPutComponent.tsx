import React from 'react';
import { TextInput, View } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props {
    placeholder: string;
    value: string; 
    onChangeText: (text: string) => void;
}

export const InputComponent = ({placeholder, value, onChangeText,   }: Props) =>(
    
    <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        keyboardType="numeric"
    />
);