import React from 'react';
import { View } from 'react-native';
import ResenhaIcon from '../ResenhaIcon';
import { WHITE } from '../../config/colors';
import { scale } from '../../helpers/scalesHelpers';
import styles from './styles';

class ImageProfile extends React.PureComponent {
    
    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.image}>
                    <ResenhaIcon name="icon-user" color={WHITE} size={scale(30)} />
                </View>
                <View style={styles.iconEdit}>
                    <ResenhaIcon name="icon-pen" color={WHITE} size={scale(16)} />
                </View>
            </View>
        )
    }
}

export default ImageProfile;