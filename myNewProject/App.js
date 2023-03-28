import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { LoginScreen } from "./Screens/LoginScreen.js";

import { RegistrationScreen } from "./Screens/RegistrationScreen.js";

// import * as Font from 'expo-font';
// import { AppLoading } from 'expo';

// const loadFonts = async () => {
//   await Font.loadAsync({
//     "Roboto-Regular": require("./source/images/fonts/Roboto/Roboto-Regular.ttf"),
//     "Roboto-Bold": require("./source/images/fonts/Roboto/Roboto-Bold.ttf"),
//   });
// };

export default function App() {
  //   const [isReady, setIsReady] = useState(false)
  // if (!isReady) {
  //     return <AppLoading startAsync={loadFonts} onFinish={() => setIsReady(true)}/>
  // }

  const [isShowKeyboard, setIsShowKeyboard] = useState(true);

  const handleCloseKeyboard = () => {
    Keyboard.dismiss();
    setIsShowKeyboard(true);
  };


  
  const [isTogglePage, setIsTogglePage] = useState(true);

  return (
    <TouchableWithoutFeedback onPress={handleCloseKeyboard}>
      <View style={styles.container}>
        <KeyboardAvoidingView // определяем ОС и настраиваем поведение клавиатуры
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <ImageBackground
            source={require("./source/images/PhotoBG.png")}
            style={styles.img}
          />
          {isTogglePage ? (
            <RegistrationScreen
              stateShowKeyboard={isShowKeyboard}
              operationShowKeyboard={setIsShowKeyboard}
              togglePage={setIsTogglePage}
            />
          ) : (
            <LoginScreen
              stateShowKeyboard={isShowKeyboard}
              operationShowKeyboard={setIsShowKeyboard}
              togglePage={setIsTogglePage}
            />
          )}

          <StatusBar style="auto" />
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "flex-end",
    // backgroundColor: "#fff",
    alignItems: "flex-end",
    // justifyContent: "space-between",
  },
  img: {
    position: "relative",
    // zIndex:-1,
    // flex: 1,
    // resizeMode: "cover",
    justifyContent: "flex-end",
    flex: 1,
    // justifyContent: "flex-start",
    // resizeMode: "cover",
    width: 413,
    height: 963,
    // alignItems: "flex-end",
  },
});
