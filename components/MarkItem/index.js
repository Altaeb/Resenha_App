import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { TextNunitoBold, TextNunitoRegular } from '../TextNunito';
import ResenhaIcon from '../ResenhaIcon';
import { scale } from '../../helpers/scalesHelpers';
import { MARINER } from '../../config/colors';
import styles from './styles';

const MarkItem = props => {
    const maxLimit = 40;

    return (
        <View style={styles.container}>
            <View style={styles.indexWrapper}>
                <TextNunitoBold style={styles.indexText}>{props.index}</TextNunitoBold>
            </View>
            <View style={styles.textWrapper}>
                <TextNunitoRegular style={styles.text}>{((props.text).length > maxLimit) ?
                    (((props.text).substring(0, maxLimit - 3)) + '...') : props.text}
                </TextNunitoRegular>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={props.pressEdit}>
                    <ResenhaIcon name="icon-edit" size={scale(22)} color={MARINER} />
                </TouchableOpacity>
                <TouchableOpacity onPress={props.pressTrash} style={{ marginLeft: scale(30) }}>
                    <ResenhaIcon name="icon-trash" size={scale(22)} color={MARINER} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default MarkItem;
