import * as React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ScanScreen from "../screens/ScanScreen";
import HomeScreen from "../screens/Home";
import Signup from "../screens/Signup";
import Tabs from "../navigation/tabs";
import { FONTS } from "../constants/fonts";
import { icons } from "../constants";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent",
  },
};
const WalletStack = createStackNavigator();
const Wallet = () => {
  return (
    <NavigationContainer initialRouteName="Signup" theme={theme}>
      <WalletStack.Navigator>
        <WalletStack.Screen
          name="Signup"
          component={Signup}
          options={{ headerShown: false }}
        />
        {/* <WalletStack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        /> */}
        <WalletStack.Screen
          name="tabs"
          component={Tabs}
          options={({ route, navigation }) => ({
            title: "iwallet",
            headerStyle: {
              backgroundColor: "#0682FE",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              ...FONTS.h2,
            },
            headerShown: false,
          })}
        />
      </WalletStack.Navigator>
    </NavigationContainer>
  );
};

export default Wallet;
