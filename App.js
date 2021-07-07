/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";

const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="SignIn" 
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="SignIn" component={SignIn} options={{title: "Sign In"}} />
        <Stack.Screen name="SignUp" component={SignUp} options={{title: "Sign Up"}} />
        <Stack.Screen name="Home" component={Home} options={{title: "Home"}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
