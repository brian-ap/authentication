import { createStackNavigator, createAppContainer } from 'react-navigation';
import LandingPage from '../containers/LandingPage/LandingPage';
import LoginForm from '../containers/LoginForm/LoginForm';
import SignUpForm from '../containers/SignUpForm/SignUpForm';

export default createAppContainer(createStackNavigator(
  {
    Home: LandingPage,
    Login: LoginForm,
    SignUp: SignUpForm,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'orange',
      },
    },
  },
));
