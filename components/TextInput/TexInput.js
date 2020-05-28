import React from 'react';
import { TextInput as Input } from 'react-native';
import styles from './styles';
import TextInputWrapper from '../TextInputWrapper';

class TextInput extends React.PureComponent {
    render() {
        const { labelColor, label, form: { touched, errors, handleChange, handleBlur}, field, questionAction, question } = this.props;
        
        return (
          <TextInputWrapper 
                label={label}
                labelColor={labelColor}
                renderError={errors[field.name]}
                questionAction={questionAction}
                question={question}
            >
                
                <Input
                    {...this.props}
                    placeholderTextColor={this.props.placeHolderColor}
                    placeholder={this.props.placeholder}
                    style={[styles.input, this.props.style]}
                    onChangeText={handleChange(field.name)}
                    onBlur={handleBlur(field.name)}
                />
      
            </TextInputWrapper>
        )
    }
}

export default TextInput;
