import { createStackNavigator } from 'react-navigation';
import filterOwnersScreen from '../screens/Owners/filterOwners';

const FilterOwnersStack = createStackNavigator({
    FilterOwners: { screen: filterOwnersScreen },
});

export default FilterOwnersStack;