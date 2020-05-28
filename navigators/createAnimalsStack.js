import { createStackNavigator, NavigationActions } from 'react-navigation';
import createAnimalScreen from '../screens/Animals/createAnimal';
import detailAnimalScreen from '../screens/Animals/detailAnimal';
import listAnimalsScreen from '../screens/Animals/listAnimals';
import listMarksScreen from '../screens/Animals/reviewAnimal/listMarks';
import createMarkScreen from '../screens/Animals/reviewAnimal/createMark';
import reviewAnimalScreen from '../screens/Animals/reviewAnimal';
import NavigationService from '../helpers/NavigationService';
import { Alert } from 'react-native';

const CreateAnimalStack = createStackNavigator({
    CreateAnimal: { screen: createAnimalScreen },
    ListAnimals: { screen: listAnimalsScreen },
    DetailAnimal: { screen: detailAnimalScreen },
    ReviewAnimal: { screen: reviewAnimalScreen },
    ListMarks: { screen: listMarksScreen },
    CreateMark: { screen: createMarkScreen },
}, {
        initialRouteName: 'CreateAnimal',
    });

export default CreateAnimalStack;