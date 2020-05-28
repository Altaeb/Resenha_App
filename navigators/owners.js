import { createStackNavigator } from 'react-navigation';
import DoneScreen from '../screens/Owners/done';
import PendingScreen from '../screens/Owners/pending';
import createOwnerStack from './createOwnerStack'
import filterOwnersStack from './filterOwnersStack';

const OwnersStack = createStackNavigator({
    OwnersDone: { screen: DoneScreen },
    OwnersPending: { screen: PendingScreen },
    CreateOwner: { screen: createOwnerStack },
    FilterOwners: { screen: filterOwnersStack },
}, {
        headerMode: 'none',
        initialRouteName: 'OwnersPending',
        transitionConfig: () => ({
            screenInterpolator: (sceneProps) => {
                const { layout, position, scene } = sceneProps;
                const { index } = scene;
                const width = layout.initWidth;

                const translateX = position.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [width, 0, 0],
                });
                if (index <= 1 || scene.route.routeName === 'OwnersDone' || scene.route.routeName === 'OwnersPending') {
                    return {};
                }

                return { transform: [{ translateX }] };
            },
        }),
    });

    OwnersStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;

    let routeName = navigation.state.routes[navigation.state.index].routeName

    if (routeName === 'CreateOwner' || routeName === 'FilterOwners') {
        tabBarVisible = false
    }

    return {
        tabBarVisible,
    }
}


export default OwnersStack;