import React, { useState } from "react";

import { NavigationApp } from "./components/NavigationApp.js";

// import * as Font from "expo-font";
// import { AppLoading } from "expo";

// const loadFonts = async () => {
//   await Font.loadAsync({
//     "Roboto-Regular": require("./source/images/fonts/Roboto/Roboto-Regular.ttf"),
//     "Roboto-Bold": require("./source/images/fonts/Roboto/Roboto-Bold.ttf"),
//   });
// };

export default function App() {
  // const [isReady, setIsReady] = useState(false);
  // if (!isReady) {
  //   return (
  //     <AppLoading
  //       startAsync={loadFonts}
  //       onFinish={() => setIsReady(true)}
  //       onError={console.warn}
  //     />
  //   );
  // }

  return (
    <>
      <NavigationApp />
    </>
  );
}
