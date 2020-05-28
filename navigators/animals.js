import { createStackNavigator } from 'react-navigation';
import DoneScreen from '../screens/Animals/done';
import PendingScreen from '../screens/Animals/pending';
import createAnimalsStack from './createAnimalsStack'
import filterAnimalsStack from './filterAnimalsStack';

const AnimalsStack = createStackNavigator({
    AnimalsDone: { screen: DoneScreen },
    AnimalsPending: { screen: PendingScreen },
    CreateAnimal: { screen: createAnimalsStack },
    FilterAnimals: { screen: filterAnimalsStack },
}, {
        headerMode: 'none',
        initialRouteName: 'AnimalsPending',
        transitionConfig: () => ({
            screenInterpolator: (sceneProps) => {
                const { layout, position, scene } = sceneProps;
                const { index } = scene;
                const width = layout.initWidth;

                const translateX = position.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [width, 0, 0],
                });
                if (index <= 1 || scene.route.routeName === 'AnimalsDone' || scene.route.routeName === 'AnimalsPending') {
                    return {};
                }

                return { transform: [{ translateX }] };
            },
        }),
    });

AnimalsStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;

    let routeName = navigation.state.routes[navigation.state.index].routeName

    if (routeName === 'CreateAnimal' || routeName === 'FilterAnimals') {
        tabBarVisible = false
    }

    return {
        tabBarVisible,
    }
}
export default AnimalsStack;