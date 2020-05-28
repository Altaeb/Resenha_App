import React from 'react';
import { TouchableOpacity, SafeAreaView, View } from 'react-native';
import { TextNunitoBold } from '../TextNunito';
import { scale } from '../../helpers/scalesHelpers'
import ResenhaIcon from '../ResenhaIcon';
import styles from './styles';

const CustomButton = ({
    text,
    icon,
    color,
    style,
    onPress,
    iconSize,
    iconColor,
    textSize,
    backgroundColor,
}) => (
        <SafeAreaView>
            <TouchableOpacity onPress={onPress}>
                <View style={[styles.button, style, { backgroundColor: backgroundColor }]}>
                    {icon.length > 0 &&
                        <View style={styles.icon}>
                            <ResenhaIcon name={icon} size={iconSize} color={iconColor} />
                        </View>
                    }
                    <TextNunitoBold style={{ color: color, fontSize: scale(textSize) }}>
                        {text.toUpperCase()}
                    </TextNunitoBold>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    )

CustomButton.defaultProps = {
    icon: '',
    iconSize: 15,
    iconColor: '#000',
    backgroundColor: '#FFF',
    textSize: 15,
    color: '#000',
    style: {},
}

export default CustomButton;
