import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import GameLayout from "./GameLayout";
import TypeLayout from "./TypeLayout";
import CategoryLayout from "./CategoryLayout";
import LevelLayout from "./LevelLayout";
import HowTo from "./HowTo";
import AdScreen from "./AdScreen"

const Stack = createStackNavigator();

export const NavLayout = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AdScreen">
      <Stack.Screen
          name="adScreen"
          component={AdScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GameType"
          component={TypeLayout}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GameCategory"
          component={CategoryLayout}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GameLevel"
          component={LevelLayout}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GameLayout"
          component={GameLayout}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HowTo"
          component={HowTo}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
