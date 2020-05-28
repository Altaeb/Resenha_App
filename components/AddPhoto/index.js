import React from  'react';
import { View } from 'react-native';
import ResenhaIcon from '../ResenhaIcon';
import { GRAY } from '../../config/colors';
import styles from './styles'

class AddPhoto extends React.PureComponent {
    render() {
        return(
            <View style={styles.wrapper}>
                <ResenhaIcon name="icon-plus" size={15} color={GRAY} />
            </View>
        )
    }
}

export default AddPhoto;