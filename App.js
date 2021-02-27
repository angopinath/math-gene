import { StatusBar } from "expo-status-bar";
import React, {useState} from "react";
import {
  ApplicationProvider,IconRegistry, Text
} from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import {NavLayout} from "./src/layout/NavLayout"
import {PopupModel} from "./src/box/Model"
import { useEffect } from "react";

export default function App() {
  return (
    <React.Fragment>
      
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.light}>
      
      <NavLayout />
      
    </ApplicationProvider>
    </React.Fragment>
  );
}

