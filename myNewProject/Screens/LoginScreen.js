import React, { useState } from "react";
import {
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
  stateShowKeyboard,
  operationShowKeyboard,
  togglePage,
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
    console.log(`Login: ${login}, Email: ${email}, Password: ${password}`);
    setEmail("");
    setPassword("");
  };

    console.log(togglePage)
  return (
    <View style={styles.form} >
      <Text style={styles.text}>Login</Text>
      <View style={styles.divinpt}>
        <TextInput
          name="email"
          value={email}
          onChangeText={onHandleEmail}
          placeholder="Email"
          maxLength={40}
          style={styles.inpt}
          onFocus={() => operationShowKeyboard(false)}
        />
        <TextInput
          name="password"
          value={password}
          onChangeText={onHandlePassword}
          placeholder="Password"
          secureTextEntry={true}
          maxLength={16}
          style={styles.inpt}
          onFocus={() => operationShowKeyboard(false)}
        />
      </View>
      {stateShowKeyboard ? (
        <>
          <TouchableOpacity style={styles.buttn} onPress={onSubmit}>
            <Text>Registration</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => togglePage(true)}>
            <Text>Нет аккаунта? Зарегистрироваться</Text>
          </TouchableOpacity>
        </>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    // height: 500,
    // padding: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,

    flex: 0.7,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 30,
  },

  text: {
    fontFamily: "Roboto-Regular",
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
    // marginBottom: 16,
    justifyContent: "center",
    alignItems: "center",
  },
});
