import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import InitialScreen from './components/InitialScreen';
import Main from './components/Main';
import JoinTournament from './components/user/JoinTournament';
import CreateTournament from './components/user/CreateTournament';
import Register from './components/register/Register';
import RegisterPwd from './components/register/RegisterPwd';
import User from './components/user/User';
import MyTournaments from './components/user/MyTournaments';
import Login from './components/register/Login';

const Stack = new createStackNavigator();

const LoginNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen options={{headerShown:false}} name="InitialScreen" component={InitialScreen}/>
    <Stack.Screen options={{headerShown: false}} name="Register" component={Register}/>
    <Stack.Screen options={{headerShown: false}} name="RegisterPwd" component={RegisterPwd}/>
    <Stack.Screen options={{headerShown: false}} name="Login" component={Login}/>
  </Stack.Navigator>
)

const MainNavigator = () => (
  <Stack.Navigator>
    {/* <Stack.Screen /> */}
    <Stack.Screen options={{headerShown:false}} name="Main" component={Main}/>
    <Stack.Screen options={{headerShown: false}} name="JoinTournament" component={JoinTournament}/>
    <Stack.Screen options={{headerShown: false}} name="CreateTournament" component={CreateTournament}/>
    <Stack.Screen options={{headerShown: false}} name="User" component={User}/>
    <Stack.Screen options={{headerShown: false}} name="MyTournaments" component={MyTournaments}/>
  </Stack.Navigator>
)

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}}  name="LoginScreen" component={LoginNavigator}/>
        <Stack.Screen options={{headerShown:false}}  name="Main" component={MainNavigator}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;