import React, { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";


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
      return
    }
    console.log(`Login: ${login}, Email: ${email}, Password: ${password}`);
    setEmail('');
    setLogin('');
    setPassword('')
  };

  return (
      <View style={ styles.form }>
        <Text>Registaration</Text>
        <TextInput
          name="login"
          value={login}
          onChangeText={onHandleLogin}
          placeholder="Login"
          maxLength={40}
        />
        <TextInput
          name="email"
          value={email}
          onChangeText={onHandleEmail}
          placeholder="Email"
          maxLength={40}
        />
        <TextInput
          name="password"
          value={password}
          onChangeText={onHandlePassword}
          placeholder="Password"
          secureTextEntry={true}
          maxLength={16}
        />
        <Button onPress={onSubmit} title={"Registration"} />
      </View>
  );
};

const styles = StyleSheet.create({
  form: {

    flex: 1,
    height: 549,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 30
  },
});