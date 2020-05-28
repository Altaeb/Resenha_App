import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import ResenhaIcon from '../ResenhaIcon';
import { TextNunitoBold } from '../TextNunito'
import styles from './styles';

const Header = ({ title, icon, iconColor, iconSize, onPress, renderRightButton, onPressRightButton }) => (
    <SafeAreaView style={styles.wrapper}>
        <View style={styles.content}>
            <TouchableOpacity onPress={onPress} style={styles.icon}>
                <ResenhaIcon name={icon} size={iconSize} color={iconColor} />
            </TouchableOpacity>
            <TextNunitoBold style={styles.text}> {title} </TextNunitoBold>
            <TouchableOpacity onPress={onPressRightButton}>
                {renderRightButton}
            </TouchableOpacity>
        </View>
    </SafeAreaView>
)

Header.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
}

Header.defaultProps = {
    iconColor: '#777',
    iconSize: 11,
}

export default Header;