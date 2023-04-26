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
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import MapView, { Marker } from "react-native-maps";

export const GeolocationScreen = ({ route }) => {
  const [latitud, setLatitud] = useState(null);
  const [longitud, setLongitud] = useState(null);

  useEffect(() => {
    if (route.params) {
      setLatitud(route.params.location.latitude);
      setLongitud(route.params.location.longitude);
      route.params = null;
    }
    // if (latitude) {
    //   const { latitude, longitube } = latitude.location.coords;
    // }
  }, [route.params]);

  if (!latitud && !longitud) {
    return <Text>GeolocationScreen</Text>;
  }

  return (
    <View style={styles.container}>
      <MapView
        style={{ flex: 1 }}
        region={{
          latitude: latitud,
          longitude: longitud,
          latitudeDelta: 0.08,
          longitudeDelta: 0.08,
        }}
      >
        <Marker coordinate={{ latitude: latitud, longitude: longitud }} />
      </MapView>
      <Text>GeolocationScreen</Text>
      <StatusBar style="auto" />
    </View>
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
});
