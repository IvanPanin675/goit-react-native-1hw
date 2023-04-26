import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  ImageBackground,
  Alert,
  Button,
  Keyboard,
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  View,
} from "react-native";
import { Camera } from "expo-camera";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import * as Location from "expo-location";
import { AppLoading } from "expo";

export const CreatePostScreen = ({ navigation }) => {
  const [permission, requestPermission] = Camera.useCameraPermissions();
  // const [permissionLoc, requestPermissionLoc] = Location.requestForegroundPermissionsAsync();
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState("");
  const [namePhoto, setNamePhoto] = useState("");
  const [location, setLocation] = useState("");
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [address, setAddress] = useState();

  const [errorMsg, setErrorMsg] = useState(null);

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Дозвіл на використання геолокації не надано");
        return;
      }
    })();
  }, []);

  const onHandleNamePhoto = (text) => setNamePhoto(text);

  //  const onHandleLocationPhoto = (text) => setLocationPhoto(text);

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  const takeFoto = async () => {
    const photoUri = await camera.takePictureAsync();
    setPhoto(photoUri.uri);
    takeLocation();
  };

  const takeLocation = async () => {
    if (!errorMsg) {
      let locationNow = await Location.getCurrentPositionAsync({});
      setLocation(locationNow.coords);
      let addressNow = await Location.reverseGeocodeAsync({ longitude: locationNow.coords.longitude, latitude: locationNow.coords.latitude })
      // Знаходимо локацію
      setAddress(`${addressNow[0].country}, ${addressNow[0].city}, ${addressNow[0].street}`)
      
      // Ми готові відправляти ото це все... ну для кнопок
      setIsReady(true);
    } else {
      setIsReady(true);
      Alert.alert(errorMsg);
    }
  };

  const deleteThisFoto = async () => {
    setPhoto("");
    setIsReady(false);
    setAddress('')
  };

  const sendPhoto = () => {
    if (namePhoto === "" || address === "") {
      Alert.alert("Потрібно добавити назву і локацію")
      return
    }
    navigation.navigate("PostScreen", { photo, namePhoto, location, address });
    setPhoto("");
    setIsReady(false);
  };

  const handleCloseKeyboard = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={handleCloseKeyboard}>
      <View style={styles.container}>
        <Camera style={styles.camera} ref={setCamera}>
          {photo ? (
            <View style={styles.photoContainer}>
              <Image style={styles.photo} source={{ uri: photo }} />
              {/* <TouchableOpacity onPress={takeFoto} style={styles.btnOk}>
              <Ionicons name="md-add-outline" size={34} color="white" />
            </TouchableOpacity> */}
              <TouchableOpacity
                onPress={deleteThisFoto}
                style={styles.btnDelete}
              >
                <AntDesign name="close" size={24} color="black" />
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity onPress={takeFoto} style={styles.btncmr}>
              <Image
                style={{
                  width: 20,
                  height: 18,
                }}
                source={require("../../assets/Vector.png")}
              />
            </TouchableOpacity>
          )}
        </Camera>
        <KeyboardAvoidingView // определяем ОС и настраиваем поведение клавиатуры
          behavior={Platform.OS == "ios" ? "padding" : ""}
        >
          <View>
            <TextInput
              name="namePhoto"
              value={namePhoto}
              onChangeText={onHandleNamePhoto}
              placeholder="Найменування"
              maxLength={40}
              style={styles.inpt}
              onFocus={() => setIsShowKeyboard(true)}
            />
            {isReady && <TextInput
              name="address"
              value={address}
              onChangeText={setAddress}
              placeholder="Локація"
              style={styles.inpt}
              onFocus={() => setIsShowKeyboard(true)}
            />}
          </View>
        </KeyboardAvoidingView>
        {!isShowKeyboard && photo &&
          (isReady ? (
            <TouchableOpacity onPress={sendPhoto} style={styles.btnSend}>
              <Text style={{ color: "white", fontSize: 16 }}>Опублікувати</Text>
            </TouchableOpacity>
          ) : (
            <ActivityIndicator size="large" color="#FF6C00" />
          ))}
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
  camera: {
    marginTop: 32,
    marginHorizontal: 16,
    height: 240,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
            marginBottom: 16,
  },
  btncmr: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 50,
  },
  photoContainer: {
    position: "absolute",
    borderColor: "#fff",
  },
  photo: {
    height: 250,
    width: 370,
  },
  btnOk: {
    position: "absolute",
    bottom: 10,
    right: 10,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 50,
  },
  btnDelete: {
    position: "absolute",
    top: 10,
    left: 10,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 0, 0, 0.3)",
    borderRadius: 50,
  },
  btnSend: {
    height: 51,
    marginHorizontal: 16,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
  inpt: {
    height: 49,
    marginHorizontal: 16,
    // marginTop: 16,
        marginBottom: 16,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#E8E8E8",
    padding: 15,
  },
});
