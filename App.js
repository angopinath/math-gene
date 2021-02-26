import { StatusBar } from "expo-status-bar";
import React, {useState} from "react";
import GameLayout from "./src/layout/GameLayout"
import TypeLayout from "./src/layout/TypeLayout"
import CategoryLayout from "./src/layout/CategoryLayout"
import LevelLayout from "./src/layout/LevelLayout"
import {
  ApplicationProvider,IconRegistry
} from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { StyleSheet } from "react-native";
import {LinearGradient} from 'expo-linear-gradient'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator();

export default function App() {

  return (
    <React.Fragment>
      <LinearGradient
        colors={["#2193b0", "#6dd5ed"]}
        style={appstyle.background}
        start={{ x: 0.1, y: 0.2 }}
        end={{ x: 0.5, y: 0.7 }}
      >
        
     
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
      <Stack.Navigator initialRouteName="GameType">
        <Stack.Screen name="GameType" component={TypeLayout}/>
        <Stack.Screen name="GameCategory" component={CategoryLayout} />
        <Stack.Screen name="GameLevel" component={LevelLayout}/>
        <Stack.Screen name="GameLayout" component={GameLayout} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
    </LinearGradient>
    </React.Fragment>
  );
}

const appstyle = StyleSheet.create({
  background: {
    flex:1,
    alignSelf: "stretch",
    width: null,
    resizeMode: "stretch",
    height: null
  }
})
