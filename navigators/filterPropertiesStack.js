import { createStackNavigator } from 'react-navigation';
import filterPropertiesScreen from '../screens/Properties/filterProperties';

const FilterPropertiesStack = createStackNavigator({
    FilterProperties: { screen: filterPropertiesScreen },
});

export default FilterPropertiesStack;