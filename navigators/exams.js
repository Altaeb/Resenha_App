import { createStackNavigator } from 'react-navigation';
import SentScreen from '../screens/Exams/sent';
import PendingScreen from '../screens/Exams/pending';
import createExamStack from './createExamStack'
import filterExamStack from './filterExamStack';

const ExamsStack = createStackNavigator({
    ExamSent: { screen: SentScreen },
    ExamPending: { screen: PendingScreen },
    CreateExam: { screen: createExamStack },
    FilterExam: { screen: filterExamStack },
}, {
        headerMode: 'none',
        initialRouteName: 'ExamPending',
        transitionConfig: () => ({
            screenInterpolator: (sceneProps) => {
                const { layout, position, scene } = sceneProps;
                const { index } = scene;
                const width = layout.initWidth;

                const translateX = position.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [width, 0, 0],
                });
                if (index <= 1 || scene.route.routeName === 'ExamPending' || scene.route.routeName === 'ExamSent') {
                    return {};
                }

                return { transform: [{ translateX }] };
            },
        }),
    });

ExamsStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;

    let routeName = navigation.state.routes[navigation.state.index].routeName

    if (routeName === 'CreateExam' || routeName === 'FilterExam') {
        tabBarVisible = false
    }

    return {
        tabBarVisible,
    }
}
export default ExamsStack;