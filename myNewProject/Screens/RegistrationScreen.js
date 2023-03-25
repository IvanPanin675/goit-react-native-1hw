import React, { useState } from "react";
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export const RegistrationScreen = () => {
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
  };

  return (
    <View style={styles.form}>
      <Text>Registaration</Text>
      <View style={styles.divinpt}>
        <TextInput
          name="login"
          value={login}
          onChangeText={onHandleLogin}
          placeholder="Login"
          maxLength={40}
          style={styles.inpt}
        />
        <TextInput
          name="email"
          value={email}
          onChangeText={onHandleEmail}
          placeholder="Email"
          maxLength={40}
          style={styles.inpt}
        />
        <TextInput
          name="password"
          value={password}
          onChangeText={onHandlePassword}
          placeholder="Password"
          secureTextEntry={true}
          maxLength={16}
          style={styles.inpt}
        />
      </View>
      <TouchableOpacity style={styles.buttn} onPress={onSubmit}>
        <Text>Registration</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    // marginHorizontal: 16,
    // flex: 1,
    height: 549,
    padding: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 30,
      // marginBottom: 16,
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
