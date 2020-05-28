import React from 'react';
import { View } from 'react-native';
import { TextNunitoBold, TextNunitoRegular } from '../../components/TextNunito';
import styles from './styles';

const CustomDate = props => (
    <View style={[styles.wrapper, props.style]}>
        <TextNunitoRegular style={styles.textDate}>DATA</TextNunitoRegular>
        <View style={styles.wrapperDay}>
            <TextNunitoBold style={styles.textDay}>{props.day}</TextNunitoBold>
        </View>
        <TextNunitoRegular style={styles.textDate}>{props.month}</TextNunitoRegular>
    </View>
)

export default CustomDate;