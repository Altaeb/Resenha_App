import { createStackNavigator } from 'react-navigation';
import filterExamScreen from '../screens/Exams/filterExam';

const FilterExamStack = createStackNavigator({
    FilterExam: { screen: filterExamScreen },
});

export default FilterExamStack;