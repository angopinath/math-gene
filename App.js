import { StatusBar } from "expo-status-bar";
import React, {useState} from "react";
import Outline from "./src/outline/Outline"
import {
  ApplicationProvider,IconRegistry
} from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { ImageBackground, StyleSheet } from "react-native";
import {LinearGradient} from 'expo-linear-gradient'


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
      
          <Outline />
        
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
