import { StatusBar } from "expo-status-bar";
import React from "react";
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
import { RegistrationScreen } from "./Screens/RegistrationScreen.js";

export default function App() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <KeyboardAvoidingView // определяем ОС и настраиваем поведение клавиатуры
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <ImageBackground
            source={require("./source/images/PhotoBG.png")}
            style={styles.img}
          />
          <RegistrationScreen />
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
