import { createStackNavigator } from 'react-navigation';
import listPropertiesScreen from '../screens/Properties/listProperties';
import propertieDetailScreen from '../screens/Properties/propertiesDetail'


const CreatePropertiesStack = createStackNavigator({
    ListProperties: { screen: listPropertiesScreen },
    PropertieDetail: { screen: propertieDetailScreen },
}, {
        initialRouteName: 'ListProperties',
    });

export default CreatePropertiesStack;