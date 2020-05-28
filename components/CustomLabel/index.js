import React from 'react';
import { View } from 'react-native';
import { TextNunitoBold, TextNunitoRegular } from '../../components/TextNunito';
import styles from './styles';
import { DOVE_GRAY } from '../../config/colors';
import { scale } from '../../helpers/scalesHelpers';

const CustomLabel = props => (
    <View style={[styles.wrapper, { backgroundColor: props.bgColor }]}>
        <TextNunitoBold style={{ color: DOVE_GRAY, fontSize: scale(12) }}>{props.text.toUpperCase()}</TextNunitoBold>
    </View>
);

export default CustomLabel;