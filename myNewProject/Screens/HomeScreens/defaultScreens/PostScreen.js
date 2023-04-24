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

export const PostScreen = ({ navigation }) => {
  return (
    <>
      <TouchableOpacity onPress={() => navigation.navigate("ComentScreen")}>
        <Text>Go to COMENTSCREEN</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </>
  );
};
