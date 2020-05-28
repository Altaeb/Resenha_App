import React from 'react';
import {  TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { withNavigation } from 'react-navigation';
import ResenhaIcon from '../components/ResenhaIcon';
import { TextNunitoBold } from '../components/TextNunito';
import { MARINER, BLACK16 } from '../config/colors';
import { scale } from '../helpers/scalesHelpers';

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#FFF',
        height: scale(70),
        paddingTop: Platform.OS == "ios" ? 0 : scale(30),
        elevation: 5,
        shadowColor: BLACK16,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: .4,
        shadowRadius: 2,
        borderBottomWidth: 0,
    },
    text: {
        fontSize: scale(18),
        color: MARINER,
    },
    icon: {
        width: scale(40),
        justifyContent: 'center',
        alignItems: 'center',
    },
    rightButton: {
        marginRight: scale(10),
    }
})


const withHeader = (title, icon, rightButton, goBackAction) => WrappedComponent => {
    class Header extends React.Component {
        render() {
            return <WrappedComponent {...this.props} />
        }
    }

    Header.navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        return {
            headerTitle: (<TextNunitoBold style={styles.text}>{title}</TextNunitoBold>),
            headerLeft: (<TouchableOpacity style={styles.icon} onPress={() => (goBackAction ? goBackAction(navigation) : navigation.goBack(null))} >
                <ResenhaIcon name={icon} size={14} color={'#777'} />
            </TouchableOpacity>),
            headerRight: (<TouchableOpacity onPress={() => params.backButtonDispatch()}>
                {params.rightButton || rightButton}
            </TouchableOpacity>),
            headerStyle: styles.wrapper,
            headerRightContainerStyle: styles.rightButton 
        }
    }
    return Header;
    // return withNavigation();
}


export default withHeader;
