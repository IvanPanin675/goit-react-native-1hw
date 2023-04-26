import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
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

export const LoginScreen = ({
  // stateShowKeyboard,
  // operationShowKeyboard,
  navigation,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onHandleEmail = (text) => setEmail(text);

  const onHandlePassword = (text) => setPassword(text);

  const onSubmit = () => {
    if (!email || !password) {
      Alert.alert(`Потрібно всі поля заповнити`);
      return;
    }
    console.log(`Email: ${email}, Password: ${password}`);
    setEmail("");
    setPassword("");
    navigation.navigate("Home")
  };

  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const handleCloseKeyboard = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={handleCloseKeyboard}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../source/images/PhotoBG.png")}
          style={styles.img}
        >
          <KeyboardAvoidingView // определяем ОС и настраиваем поведение клавиатуры
            behavior={Platform.OS == "ios" ? "padding" : ""}
          >
            <View style={styles.form}>
              <Text style={styles.text}>Login</Text>

              <View style={styles.divinpt}>
                <TextInput
                  name="email"
                  value={email}
                  onChangeText={onHandleEmail}
                  placeholder="Email"
                  maxLength={40}
                  style={styles.inpt}
                  onFocus={() => setIsShowKeyboard(true)}
                />
                <TextInput
                  name="password"
                  value={password}
                  onChangeText={onHandlePassword}
                  placeholder="Password"
                  secureTextEntry={true}
                  maxLength={16}
                  style={styles.inpt}
                  onFocus={() => setIsShowKeyboard(true)}
                />
              </View>

              {!isShowKeyboard && (
                <>
                  <TouchableOpacity style={styles.buttn} onPress={onSubmit}>
                    <Text>Registration</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Registration")}
                  >
                    <Text>Нет аккаунта? Зарегистрироваться</Text>
                  </TouchableOpacity>
                </>
              )}
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "flex-end",
    // width: windowWidth,
    // height: windowHeight,
    // backgroundColor: "#fff",
    // alignItems: "flex-end",
    // justifyContent: "space-between",
  },
  img: {
    position: "relative",
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    //     width: windowWidth,
    // height: windowHeight,
    // flex: 1,
    // justifyContent: "flex-start",
    // resizeMode: "cover", marginTop: 100,
    // alignItems: "flex-end",
  },
  form: {
    // height: 500,
    // padding: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 32,

    // flex: 0.7,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 30,
  },

  text: {
    // fontFamily: "Roboto-Regular",
    fontSize: 30,
  },

  divinpt: {
    //  flex: 1,

    marginTop: 33,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },
  inpt: {
    backgroundColor: "#F6F6F6",
    height: 50,
    width: 343,
    // marginBottom: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    padding: 15,
  },
  buttn: {
    //  flex: 1,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    height: 51,
    width: 343,
    marginTop: 43,
    marginBottom: 16,
    justifyContent: "center",
    alignItems: "center",
  },
});
