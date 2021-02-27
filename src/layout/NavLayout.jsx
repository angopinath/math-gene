import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import GameLayout from "./GameLayout";
import TypeLayout from "./TypeLayout";
import CategoryLayout from "./CategoryLayout";
import LevelLayout from "./LevelLayout";

const Stack = createStackNavigator();

export const NavLayout = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GameType">
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};
