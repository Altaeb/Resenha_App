import React from 'react';
import PropTypes from  'prop-types';
import { View, TouchableOpacity } from 'react-native';
import styles from './styles'
import ResenhaIcon from '../ResenhaIcon';

const ShadowBox = props => (
    <TouchableOpacity style={styles.wrapper} onPress={props.onPress}>
        <View style={styles.children}>{props.children}</View>
        <View style={styles.iconShadowBox}>
            <ResenhaIcon name={props.icon} size={60} color={styles.iconColor.color} />
        </View>
    </TouchableOpacity>
);

ShadowBox.propTypes = {
    icon: PropTypes.string.isRequired,
}

export default ShadowBox;