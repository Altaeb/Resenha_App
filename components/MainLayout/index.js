import React from 'react';
import { SafeAreaView } from 'react-native';
import styles from './styles';

class MainLayout extends React.PureComponent {
    render() {
        return (
            <SafeAreaView style={[styles.wrapper, this.props.style]}>
                {this.props.children}
            </SafeAreaView>
        )
    }
}

export default MainLayout;