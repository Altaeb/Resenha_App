import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import ResenhaIcon from '../ResenhaIcon'
import { WHITE } from '../../config/colors';
import styles from './styles';

const RoundedButton = ({ size, color, onPress, iconSize, style, icon }) => (
    <TouchableOpacity onPress={onPress} style={[styles.button, {
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: color, 
    }, style]}>
        <View>
            <ResenhaIcon name={icon} color={WHITE} size={iconSize} />
        </View>
    </TouchableOpacity>
)

RoundedButton.defaultProps = {
    iconSize: 20,
}

export default RoundedButton;
