// import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TestScreen from "./components/TestScreen";

import InitialScreen from "./components/InitialScreen";

import Home from "./components/HomeScreens/Home";
import Tournaments from "./components/HomeScreens/Tournaments";

import JoinTournament from "./components/user/JoinTournament";
import CreateTournament from "./components/user/CreateTournament";
import Register from "./components/register/Register";
import RegisterPwd from "./components/register/RegisterPwd";
import User from "./components/user/User";
import Login from "./components/register/Login";

const Stack = new createStackNavigator();
const Tab = new createBottomTabNavigator();

const AddTournamentScreen = () => (
  <Stack.Navigator>
    <Stack.Screen options={{ headerShown: false }} name="InitialScreen" component={InitialScreen} />
    <Stack.Screen options={{ headerShown: false }} name="Register" component={Register} />
    <Stack.Screen options={{ headerShown: false }} name="RegisterPwd" component={RegisterPwd} />
    <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
  </Stack.Navigator>
);

const HomeScreen = () => (
  <Stack.Navigator>
    {/* <Stack.Screen /> */}
    {/* <Stack.Screen options={{ headerShown: false }} name="Test" component={TestScreen} /> */}
    <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
    <Stack.Screen options={{ headerShown: true }} name="Mis Torneos" component={Tournaments} />
    <Stack.Screen
      options={{ headerShown: false }}
      name="JoinTournament"
      component={JoinTournament}
    />
    <Stack.Screen
      options={{ headerShown: false }}
      name="CreateTournament"
      component={CreateTournament}
    />
    <Stack.Screen options={{ headerShown: false }} name="User" component={User} />
    {/* <Stack.Screen options={{ headerShown: false }} name="MyTournaments" component={MyTournaments} /> */}
  </Stack.Navigator>
);

const ProfileScreen = () => {
  return <></>;
};

const App = () => {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}}  name="LoginScreen" component={LoginNavigator}/>
        <Stack.Screen options={{ headerShown: true }} name="Main" component={MainNavigator} />
      </Stack.Navigator> */}
      <Tab.Navigator>
        <Tab.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
        <Tab.Screen options={{ headerShown: false }} name="Add" component={AddTournamentScreen} />
        <Tab.Screen options={{ headerShown: false }} name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
