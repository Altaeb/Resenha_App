import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import ResenhaIcon from '../../components/ResenhaIcon';

class Home extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ResenhaIcon name="icon-eye" size={50} color={'#000'} />
                <Text>Open up App.js to start working on your app!</Text>
                <Button
                    title="Go to welcome"
                    onPress={() => this.props.navigation.navigate('Welcome')}
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Home;