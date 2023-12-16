import {StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import Routes from './src/routes';
import AuthProvider from './src/contexts/auth';

export default function finance() {

  return (
    <NavigationContainer>
      <AuthProvider>
      <StatusBar
        backgroundColor='#f0f4ff' barStyle="dark-content"
      />
      <Routes/>
      </AuthProvider>
    </NavigationContainer>
  );
}
