import React from "react";
import { TouchableOpacity, Image, View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, AntDesign } from "@expo/vector-icons";

import { CreatePostScreen } from "../Screens/HomeScreens/CreatePostScreen";
import { DefaultScreen } from "../Screens/HomeScreens/DefaultScreen";
import { ProfileScreen } from "../Screens/HomeScreens/ProfileScreen";

const Tabs = createBottomTabNavigator();

const Home = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        // headerShown: false,
        // tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "DefaultScreen") {
            iconName = "appstore-o";
          } else if (route.name === "Profile") {
            iconName = "user";
          }
          return <AntDesign name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        showLabel: false,
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
        backBehavior: "history",
      }}
      
    >
      <Tabs.Screen name="DefaultScreen" component={DefaultScreen} options={{ headerShown: false }} />
      <Tabs.Screen
        name="Create Post"
        component={CreatePostScreen}
        options={{
          headerShown: true,
          unmountOnBlur: true,
          // tabBarStyle: { display: "none" },
          tabBarButton: (props) => (
            <TouchableOpacity {...props}>
              <Image
                style={{
                  width: 70,
                  height: 40,
                  marginBottom: 4,
                }}
                source={require("../assets/new.png")}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Tabs.Screen name="Profile" component={ProfileScreen} />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
