import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  ImageBackground,
  Alert,
  Image,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

// import { Dimensions } from "react-native";

// const windowWidth = Dimensions.get("window").width;
// const windowHeight = Dimensions.get("window").height;

export const RegistrationScreen = ({
  // stateShowKeyboard,
  // operationShowKeyboard,
  navigation,
}) => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onHandleLogin = (text) => setLogin(text);

  const onHandleEmail = (text) => setEmail(text);

  const onHandlePassword = (text) => setPassword(text);

  const onSubmit = () => {
    if (!login || !email || !password) {
      Alert.alert(`Потрібно всі поля заповнити`);
      return;
    }
    console.log(`Login: ${login}, Email: ${email}, Password: ${password}`);
    setEmail("");
    setLogin("");
    setPassword("");
    navigation.navigate("Home")
  };

  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const handleCloseKeyboard = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();

    console.log("dsds");
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
          <View style={{ ...styles.wrapperForm }}>
            <View style={styles.form}>
              <View style={styles.imgContainer}>
                <Image style={styles.imgC} />
                <TouchableOpacity
                  style={styles.addIcon} 
                  // onPress={pickUpPhoto}
                >
              <Image source={require("../../assets/add.png")} />
            </TouchableOpacity>
              </View>

              <Text style={styles.text}>Registaration</Text>
              <View style={styles.divinpt}>
                <TextInput
                  name="login"
                  value={login}
                  onChangeText={onHandleLogin}
                  placeholder="Login"
                  maxLength={40}
                  style={styles.inpt}
                  onFocus={() => {
                    setIsShowKeyboard(true);
                  }}
                />
                <TextInput
                  name="email"
                  value={email}
                  onChangeText={onHandleEmail}
                  placeholder="Email"
                  maxLength={40}
                  style={styles.inpt}
                  onFocus={() => {
                    setIsShowKeyboard(true);
                  }}
                />
                <TextInput
                  name="password"
                  value={password}
                  onChangeText={onHandlePassword}
                  placeholder="Password"
                  secureTextEntry={true}
                  maxLength={16}
                  style={styles.inpt}
                  onFocus={() => {
                    setIsShowKeyboard(true);
                  }}
                />
              </View>

              {!isShowKeyboard && (
                <>
                  <TouchableOpacity style={styles.buttn} onPress={onSubmit}>
                    <Text>Registration</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Login")}
                  >
                    <Text>Уже есть аккаунт? Войти</Text>
                  </TouchableOpacity>
                </>
              )}
            </View>
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
  wrapperForm: {
    // flex: 1,
    // marginTop: windowHeight/2.5,
    // marginTop: windowHeight/2.2,
    paddingBottom: 30,
    paddingTop: 92,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  form: {
    marginHorizontal: 16,
    // // marginHorizontal: 16,
    // marginTop: 400,
    position: "relative",
    // height: 500,
    // // padding: 16,
    // borderTopLeftRadius: 25,
    // borderTopRightRadius: 25,

    // flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-end",
    // paddingBottom: 30,
    // // marginBottom: 0,
  },

  imgContainer: {
    position: "absolute",
    top: -150,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },

  imgC: {
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  addIcon: {
    position: "absolute",
    right: -12,
    bottom: 12,
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
