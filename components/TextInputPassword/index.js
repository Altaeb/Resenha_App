import React from 'react';
import { TextInput as Input, SafeAreaView, TouchableOpacity } from 'react-native';
import { TextNunitoBold } from '../TextNunito';
import { GRAY, ALTO } from '../../config/colors';
import styles from './styles';
import ResenhaIcon from '../ResenhaIcon';
import TextInputWrapper from '../TextInputWrapper';
import Icon from 'react-native-vector-icons/FontAwesome';

const eye = <Icon name="eye" size={30} color={ALTO} />;
const closeEye = <Icon name="eye-slash" size={30} color={ALTO} />;

class TextInputPassword extends React.PureComponent {
    state = {
        viewPassword: true,
    }
    viewPassword = () => {
        this.setState({ viewPassword: !this.state.viewPassword });
    }
    render() {
        const { labelColor, label, form: { touched, errors, handleChange, handleBlur }, field } = this.props;

        return (
            <TextInputWrapper 
                label={label}
                labelColor={labelColor}
                renderError={touched[field.name] && errors[field.name]}
            >
                <Input
                    {...this.props}
                    secureTextEntry={this.state.viewPassword}
                    placeholderTextColor={this.props.placeHolderColor}
                    placeholder={this.props.placeholder}
                    style={[styles.input, this.props.style]}
                    onChangeText={handleChange(field.name)}
                    onBlur={handleBlur(field.name)}
                />
                <TouchableOpacity onPress={this.viewPassword} style={styles.viewPassword}>
                  {this.state.viewPassword
                  ?eye
                :closeEye}
                    {/* <ResenhaIcon name="icon-eye" size={15} color={ALTO} /> */}
                </TouchableOpacity>
            </TextInputWrapper>
        )
    }
}

export default TextInputPassword;
