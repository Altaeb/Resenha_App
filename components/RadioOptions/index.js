import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { TextNunitoBold } from '../TextNunito';
import TextInputWrapper from '../TextInputWrapper';
import styles from './styles';


class RadioOptions extends React.PureComponent {
    state = {
        value: 0,
    }
    handleRadioChange = value => {
        const { form: { setFieldValue }, field: { name } } = this.props;
        this.setState({ value: value });
        setFieldValue(name, value)
    }
    render() {
        const { labelColor, label, form: { errors }, field } = this.props;

        return (
            <TextInputWrapper 
                label={label}
                labelColor={labelColor}
                renderError={errors[field.name]}
            >
                {this.props.options.map(item => {
                    return (
                        <View key={item.value} style={styles.buttonContainer}>
                            <TouchableOpacity
                                style={styles.radioWrapper}
                                onPress={() => this.handleRadioChange(item.value)}
                            >   
                                <View style={styles.circle}>
                                    {this.state.value === item.value && (<View style={styles.checkedCircle} />)}
                                </View>
                                <TextNunitoBold style={[styles.labelDefaultStyle, this.props.labelStyle]}>{item.label.toUpperCase()}</TextNunitoBold>
                            </TouchableOpacity>
                        </View>
                    )
                })}
            </TextInputWrapper>
        )
    }
}

export default RadioOptions;
