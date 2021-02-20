import { StatusBar } from "expo-status-bar";
import React, {useState} from "react";
import {
  StyleProvider,
  Root
} from "native-base";
import getTheme from "./native-base-theme/components";
import commoncolor from "./native-base-theme/variables/material";
import Outline from "./src/outline/Outline"


import {
  ApplicationProvider,
  Layout,
  Text,
  Button,
  ButtonGroup,IconRegistry
} from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import { EvaIconsPack } from '@ui-kitten/eva-icons';


export default function App() {

  return (
    <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.light}>
      
          <Outline />
        
    </ApplicationProvider>
    </>
  );
}
