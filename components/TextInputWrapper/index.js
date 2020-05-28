import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { TextNunitoBold } from '../TextNunito';
import styles from './styles'
import { GRAY, WHITE } from '../../config/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

class TextInputWrapper extends React.PureComponent {
    render() {
        return (
            <SafeAreaView style={styles.wrapper}>
                <View style={styles.labelWrapper}>
                    <TextNunitoBold style={[styles.label, {
                        color: this.props.labelColor,
                    }]}>
                        {this.props.label}
                    </TextNunitoBold>
                    {this.props.question &&
                        <TouchableOpacity
                            onPress={this.props.questionAction}
                            style={styles.questionButton}
                        >
                            <TextNunitoBold style={{ color: WHITE, fontSize: 11 }}>?</TextNunitoBold>
                        </TouchableOpacity >
                    }
                </View>
                {this.props.children}
                {this.props.renderError !== null &&
                    <TextNunitoBold style={styles.errorLabel}>{this.props.renderError}</TextNunitoBold>
                }
            </SafeAreaView>
        )
    }
}


TextInputWrapper.defaultProps = {
    labelColor: GRAY,
    renderError: null,
}

export default TextInputWrapper;