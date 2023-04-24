import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  ImageBackground,
  Alert,
  Button,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { PostScreen } from "./defaultScreens/PostScreen";
import { ComentScreen } from "./defaultScreens/ComentScreen";
import { GeolocationScreen } from "./defaultScreens/GeolocationScreen";

const DefaultStack = createStackNavigator();

export const DefaultScreen = ({ navigation }) => {
  return (
    <DefaultStack.Navigator initialRouteName="PostScreen">
      <DefaultStack.Screen name="PostScreen" component={PostScreen} />
      <DefaultStack.Screen name="ComentScreen" component={ComentScreen} />
      <DefaultStack.Screen name="GeolocationScreen" component={GeolocationScreen} />
    </DefaultStack.Navigator>
  );
};
