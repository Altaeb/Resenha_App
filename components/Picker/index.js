import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Alert, SafeAreaView } from 'react-native';
import ResenhaIcon from '../ResenhaIcon';
import { scale } from '../../helpers/scalesHelpers';
import { TextNunitoBold } from '../TextNunito';
import TextInputWrapper from '../TextInputWrapper';
import { ALTO, MARINER } from '../../config/colors';
import RNPickerSelect from 'react-native-picker-select';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: ALTO,
        borderRadius: 10,
        paddingRight: 30,
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: ALTO,
        borderRadius: 10,
        paddingRight: 30,
    },
});

class Picker extends React.PureComponent {
    state = {
        itemValue: this.props.value,
    };

    componentWillMount() {
        if (this.props.initialValue) {
            this.setState({
                itemValue: this.props.items[0].value,
            });
        }
    }


    renderPicker() {
        const { labelColor, label, form: { errors, setFieldValue }, field } = this.props;

        return (
            <TextInputWrapper 
                label={label}
                labelColor={labelColor}
                renderError={errors[field.name]}
            >
                <RNPickerSelect
                    {...this.props}
                    placeholder={{ label: this.props.placeholder, key: '0', value: null, color: '#9EA0A4' }}
                    items={this.props.items}
                    onValueChange={value => { setFieldValue(field.name, value); }}
                    style={{
                        ...pickerSelectStyles,
                        iconContainer: {
                            top: scale(20),
                            right: scale(15),
                        },
                    }}
                    value={this.state.itemValue}
                    useNativeAndroidPickerStyle={false}
                    Icon={() => {
                        return <ResenhaIcon name={'arrow-drop-down'} size={6} color={MARINER} />;
                    }}
                />
            </TextInputWrapper>
        )
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.inputWrapper}>
                    {this.props.touchable && <TouchableOpacity onPress={this.props.onPress}>{this.renderPicker()}</TouchableOpacity>}
                    {!this.props.touchable && this.renderPicker()}
                </View>
            </View>
        );
    }
}

Picker.defaultProps = {
    touchable: false,
}

export default Picker;
