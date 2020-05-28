import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import styles from './styles';

const TabFooter = props => {
    const {
        renderIcon,
        activeTintColor,
        inactiveTintColor,
        onTabPress,
        onTabLongPress,
        getAccessibilityLabel,
        navigation
    } = props;

    const { routes, index: activeRouteIndex } = navigation.state;

    return (
        <View style={styles.container}>
            {routes.map((route, routeIndex) => {
                const isRouteActive = routeIndex === activeRouteIndex;
                const tintColor = isRouteActive ? activeTintColor : inactiveTintColor;

                return (
                    <TouchableOpacity
                        key={routeIndex}
                        style={styles.tabButtonWrapper}
                        onPress={() => {
                            onTabPress({ route });
                        }}
                        onLongPress={() => {
                            onTabLongPress({ route });
                        }}
                        accessibilityLabel={getAccessibilityLabel({ route })}
                    >
                        <View style={[styles.tabButton, isRouteActive ? styles.tabButtonActive : {}]}>
                            {renderIcon({ route, focused: isRouteActive, tintColor })}
                        </View>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

export default TabFooter;
