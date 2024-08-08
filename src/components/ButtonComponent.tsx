import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

interface Props {
    textButton: string;
    onPress: () => void;
}

export const ButtonComponent = ({ textButton, onPress }: Props) => {
    return (
        <TouchableOpacity
            onPress={onPress}
        >
            <Text>{textButton}</Text>
        </TouchableOpacity>
    )
}