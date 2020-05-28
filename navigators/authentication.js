import { createStackNavigator } from 'react-navigation';
import { SignIn, SignUp } from '../screens/Auhentication';

const AuthenticationStack = createStackNavigator({
  SignIn: {
    screen: SignIn,
  },
  SignUp: {
    screen: SignUp,
  },
}, {
  headerMode: 'none',
  initialRouteName: 'SignIn',
});

export default AuthenticationStack;