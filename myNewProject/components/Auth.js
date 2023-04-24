import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { LoginScreen } from "../Screens/AuthScreens/LoginScreen.js";
import { RegistrationScreen } from "../Screens/AuthScreens/RegistrationScreen.js";
import Home from "./Home.js";

const MainStack = createStackNavigator();

const Auth = () => {
  return (
    <MainStack.Navigator initialRouteName="Login">
      <MainStack.Screen
        options={{ headerShown: false }}
        name="Registration"
        component={RegistrationScreen}
      />
      <MainStack.Screen
        options={{ headerShown: false }}
        name="Login"
        component={LoginScreen}
      />
      <MainStack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={Home}
      />
    </MainStack.Navigator>
  );
};

export default Auth;
