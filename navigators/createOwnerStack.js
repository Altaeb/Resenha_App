import { createStackNavigator } from 'react-navigation';
import listOwnersScreen from '../screens/Owners/listOwners';
import ownerDetailScreen from '../screens/Owners/ownerDetail';

const CreateOwnerStack = createStackNavigator({
    ListOwners: { screen: listOwnersScreen },
    OwnerDetail: { screen: ownerDetailScreen },
}, {
        initialRouteName: 'ListOwners',
    });

export default CreateOwnerStack;