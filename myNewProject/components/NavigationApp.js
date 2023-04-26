import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

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

import Auth from "./Auth.js";
import Home from "./Home.js";

// import * as Font from "expo-font";
// import { AppLoading } from "expo";

// const loadFonts = async () => {
//   await Font.loadAsync({
//     "Roboto-Regular": require("../source/images/fonts/Roboto/Roboto-Regular.ttf"),
//     "Roboto-Bold": require("../source/images/fonts/Roboto/Roboto-Bold.ttf"),
//   });
// };

export const NavigationApp = () => {
  // const [isReady, setIsReady] = useState(false);

  // if (!isReady) {
  //   return (
  //     <AppLoading startAsync={loadFonts} onFinish={() => setIsReady(true)} />
  //   );
  // }

  const [isAuth, setIsAuth] = useState(true);

  return (
    <>
      <NavigationContainer>{isAuth ? <Home /> : <Auth />}</NavigationContainer>
    </>
  );
};
