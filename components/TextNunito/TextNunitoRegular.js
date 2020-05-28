import React from 'react';
import { StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
    text: {
        fontFamily: 'NunitoRegular',
    }
})

const TextNunitoRegular = props => (
    <Text {...props} style={[styles.text, props.style]}>{props.children}</Text>
);

export default TextNunitoRegular;

