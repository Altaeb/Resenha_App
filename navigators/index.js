import { createStackNavigator } from 'react-navigation';
import AuthenticationStack from './authentication';
import FooterMenuStack from './footermenu';
import WelcomeScreen from '../screens/Welcome';

const RootNavigator = createStackNavigator({
    Welcome: WelcomeScreen,
    Authentication: AuthenticationStack,
    FooterMenu: FooterMenuStack,
}, {
    headerMode: 'none',
    initialRouteName: 'Authentication',
});

export default RootNavigator;