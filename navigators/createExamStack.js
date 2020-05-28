import { createStackNavigator } from 'react-navigation';
import createExamScreen from '../screens/Exams/createExam';
import detailExamScreen from '../screens/Exams/detailExam';
import shareExamScreen from '../screens/Exams/shareExam';

const CreateExamStack = createStackNavigator({
    CreateExam: { screen: createExamScreen },
    DetailExam: { screen: detailExamScreen },
    ShareExam: { screen: shareExamScreen },
}, {
        initialRouteName: 'CreateExam',
    });

export default CreateExamStack;