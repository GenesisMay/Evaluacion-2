import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props {
    textButton: string;
    onPress: () => void;
}

export const ButtonComponent = ({ textButton, onPress }: Props) => {
    return (
        <TouchableOpacity
        style={styles.button1}
            onPress={onPress}
        >
            <Text>{textButton}</Text>
        </TouchableOpacity>
    )
}