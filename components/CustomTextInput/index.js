import React from 'react';
import { TextInput as Input, SafeAreaView, View } from 'react-native';
import { GRAY, MARINER } from '../../config/colors';
import ResenhaIcon from '../ResenhaIcon';
import styles from './styles';

class CustomTextInput extends React.PureComponent {
    state = {
        text: '',
    }
    render() {
        return (
            <SafeAreaView style={styles.wrapper}>
                <Input
                    placeholderTextColor={this.props.placeHolderColor}
                    {...this.props}
                    placeholder={this.props.placeholder}
                    style={[styles.input, this.props.style]}
                    onChangeText={this.props.onChangeText}
                />
                <View style={styles.icon}>
                    <ResenhaIcon name={this.props.icon} color={MARINER} size={20} />
                </View>
            </SafeAreaView>
        )
    }
}

CustomTextInput.defaultProps = {
    labelColor: GRAY,
}

export default CustomTextInput;
