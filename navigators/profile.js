import { createStackNavigator } from 'react-navigation';
import ProfileScreen from '../screens/Profile/index';
import FaqScreen from '../screens/Profile/faq';
import EditProfileScreen from '../screens/Profile/editProfile';
import TermsScreen from '../screens/Profile/terms';
import AboutScreen from '../screens/Profile/about';

const ProfileStack = createStackNavigator({
    Profile: { screen: ProfileScreen },
    Faq: { screen: FaqScreen },
    EditProfile: { screen: EditProfileScreen },
    Terms: { screen: TermsScreen },
    About: { screen: AboutScreen },
}, {
        initialRouteName: 'Profile',
    });

export default ProfileStack;