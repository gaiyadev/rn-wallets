import "react-native-gesture-handler";
import React from "react";
import Navigator from "./navigation/routes";
import { useFonts } from "expo-font";

import AppLoading from "expo-app-loading";

export default function App() {
  const [loaded] = useFonts({
    "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });

  if (!loaded) {
    return <AppLoading />;
  }
  return <Navigator />;
}
