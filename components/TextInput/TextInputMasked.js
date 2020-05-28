import React from 'react';
import { TextInput as Input } from 'react-native';
import styles from './styles';
import TextInputWrapper from '../TextInputWrapper';
import { TextInputMask } from 'react-native-masked-text';

class TextInputMasked extends React.PureComponent {
    render() {
        const { labelColor, label, form: { touched, errors, handleChange, handleBlur }, field } = this.props;

        return (
            <TextInputWrapper
                label={label}
                labelColor={labelColor}
                renderError={errors[field.name]}
            >
                <TextInputMask
                    {...this.props}
                    placeholderTextColor={this.props.placeHolderColor}
                    placeholder={this.props.placeholder}
                    style={[styles.input, this.props.style]}
                    onChangeText={handleChange(field.name)}
                    onBlur={handleBlur(field.name)}
                    value={field.value}
                />
            </TextInputWrapper>
        )
    }
}

export default TextInputMasked;
