// import { StatusBar } from 'expo-status-bar';
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
import { RegistrationScreen } from "./Screens/RegistrationScreen.jsx";

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
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    
  },
  img: {
    flex: 1,
    justifyContent: "flex-start",
    width: 413,
    height: 963,
    alignItems: "flex-start", 
  },
});
