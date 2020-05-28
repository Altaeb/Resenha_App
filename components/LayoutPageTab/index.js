import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { TextNunitoBold } from '../../components/TextNunito';
import ResenhaIcon from '../../components/ResenhaIcon';
import { LinearGradient } from 'expo-linear-gradient';
import { WHITE } from '../../config/colors';
import styles from './styles';

class LayoutPageTab extends React.PureComponent {
    render() {
        const { 
            filterRoute, 
            navigation, 
            navigation: { state: { routeName } },
            tabName, 
            tabLeft,
            tabRight,
            icon,
        } = this.props;

        return (
            <View style={styles.container}>
                <LinearGradient
                    colors={['#1f6cbc', '#29b5ea', '#2bc4f3']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 2, y: 2 }}
                    style={styles.wrapper}
                >
                    <View style={styles.content}>
                        <View style={styles.text}>
                            <ResenhaIcon name={icon} size={23} color={WHITE} />
                            <TextNunitoBold style={styles.tabName}>
                                {tabName}
                            </TextNunitoBold>
                        </View>
                        <TouchableOpacity style={styles.icon} onPress={() => navigation.push(filterRoute)}>
                            <ResenhaIcon name={'icon-filtrar-btn'} size={23} color={WHITE} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.tabsWrapper}>
                        <TouchableOpacity 
                            style={[styles.tabs, routeName === tabLeft.route ? styles.activeTab : {}]} 
                            onPress={() => navigation.push(tabLeft.route)}
                        >
                            <TextNunitoBold style={styles.tabsText}>{tabLeft.title}</TextNunitoBold>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={[styles.tabs, routeName === tabRight.route ? styles.activeTab : {}]} 
                            onPress={() => navigation.push(tabRight.route)}
                        >
                            <TextNunitoBold style={styles.tabsText}>{tabRight.title}</TextNunitoBold>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
                {this.props.children}
            </View>
        )
    }
}

LayoutPageTab.propTypes = {
    filterRoute: PropTypes.string.isRequired,
    tabName: PropTypes.string.isRequired,
    tabLeft: PropTypes.shape({
        title: PropTypes.string.isRequired,
        route: PropTypes.string.isRequired,
    }).isRequired,
    tabRight: PropTypes.shape({
        title: PropTypes.string.isRequired,
        route: PropTypes.string.isRequired,
    }).isRequired,
}

export default withNavigation(LayoutPageTab);