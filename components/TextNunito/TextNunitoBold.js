import React from 'react';
import { StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
    text: {
        fontFamily: 'NunitoBold',
    }
})

const TextNunitoBold = props => (
    <Text {...props} style={[styles.text, props.style]}>{props.children}</Text>
);

export default TextNunitoBold;
