import { createStackNavigator } from 'react-navigation';
import DoneScreen from '../screens/Properties/done';
import PendingScreen from '../screens/Properties/pending';
import createPropertiesStack from './createPropertiesStack';
import filterPropertiesStack from './filterPropertiesStack';

const PropertiesStack = createStackNavigator({
    PropertiesDone: { screen: DoneScreen },
    PropertiesPending: { screen: PendingScreen },
    CreateProperties: { screen: createPropertiesStack },
    FilterProperties: { screen: filterPropertiesStack },
}, {
        headerMode: 'none',
        initialRouteName: 'PropertiesPending',
        transitionConfig: () => ({
            screenInterpolator: (sceneProps) => {
                const { layout, position, scene } = sceneProps;
                const { index } = scene;
                const width = layout.initWidth;

                const translateX = position.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [width, 0, 0],
                });
                if (index <= 1 || scene.route.routeName === 'PropertiesDone' || scene.route.routeName === 'PropertiesPending') {
                    return {};
                }

                return { transform: [{ translateX }] };
            },
        }),
    });

PropertiesStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;

    let routeName = navigation.state.routes[navigation.state.index].routeName

    if (routeName === 'CreateProperties' || routeName === 'FilterProperties') {
        tabBarVisible = false
    }

    return {
        tabBarVisible,
    }
}

export default PropertiesStack;