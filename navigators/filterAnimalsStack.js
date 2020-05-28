import { createStackNavigator } from 'react-navigation';
import filterAnimalsScreen from '../screens/Animals/filterAnimals';

const FilterAnimalsStack = createStackNavigator({
    FilterAnimals: { screen: filterAnimalsScreen },
});

export default FilterAnimalsStack;