import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";

import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  ImageBackground,
  Alert,
  Image,
  Button,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  View,
} from "react-native";

export const PostScreen = ({ navigation, route }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
      route.params = null;
    }
  }, [route.params]);

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item, indx) => indx.toString()}
        renderItem={({ item: { photo, namePhoto, location, address } }) => (
          <View style={styles.containerPost}>
            <Image style={styles.imagePost} source={{ uri: photo }} />
            <Text style={{marginTop: 8}}>{namePhoto}</Text>
            <View style={styles.wrapperComentLocation}>
              <TouchableOpacity
                onPress={() => navigation.navigate("ComentScreen")}
              >
                <Image source={require("../../../assets/Shape.png")} />
              </TouchableOpacity>
              {location && (
                <>
                  <TouchableOpacity
                    style={styles.btnLocation}
                    onPress={() =>
                      navigation.navigate("GeolocationScreen", { location })
                    }
                  >
                    <Image source={require("../../../assets/map-pin.png")} />
                    <Text>{address}</Text>
                  </TouchableOpacity>
                </>
              )}
            </View>
          </View>
        )}
      />
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
  containerPost: {
    marginBottom: 16,
    marginHorizontal: 16,
  },
  imagePost: {
    width: "100%",
    height: 240,
  },
  wrapperComentLocation: {
    marginTop: 11,
    flexDirection: "row",
     justifyContent: "space-between"
  },
  btnLocation: {
    flexDirection: "row",
    alignItems: "center"
  }
});
