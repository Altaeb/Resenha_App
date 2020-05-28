import React from 'react';
import { SafeAreaView, TouchableOpacity, View } from 'react-native';
import ResenhaIcon from '../ResenhaIcon';
import { WHITE } from '../../config/colors';
import { TextNunitoBold, TextNunitoRegular } from '../TextNunito';
import styles from './styles';


const DefaultModal = ({ title, subtitle, text, onPress, children, iconModal, iconSize, iconColor }) => {
    const textEmpty = text.length > 0;

    return (
        <SafeAreaView>
            <View style={styles.wrapper}>
                <View style={styles.topContent}>
                    <TouchableOpacity onPress={onPress} style={styles.topContentIcon}>
                        <ResenhaIcon name="icon-close" size={15} color={WHITE} />
                    </TouchableOpacity>
                    <TextNunitoBold style={styles.topContentText}>
                        {title}
                    </TextNunitoBold>
                </View>
                <View style={styles.subContent}>
                    <TextNunitoBold style={styles.subtitle}>{subtitle}</TextNunitoBold>

                    <View style={styles.modalIcon}>
                        <ResenhaIcon name={iconModal} size={iconSize} color={iconColor} />
                    </View>

                    {textEmpty && <TextNunitoRegular style={styles.subTextContent}>{text}</TextNunitoRegular>}
                </View>

                <View style={styles.contentChildren}>
                    {children}
                </View>
            </View>
        </SafeAreaView>
    )
}

DefaultModal.defaultProps = {
    text: '',
}

export default DefaultModal;
