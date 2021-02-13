import { StatusBar } from "expo-status-bar";
import React from "react";
import StyleSheet from "react-native";
import {
  Container,
  View,
  Text,
  StyleProvider,
  Grid,
  Row,
  Col,
  Button,
} from "native-base";
import getTheme from "./native-base-theme/components";
import commoncolor from "./native-base-theme/variables/material";
import Box from "./src/box/Game";
import { initGame } from "./src/services/Core";

export default function App() {
  const vector = 2;
  const [_listValue, _matrix] = initGame(vector);

  return (
    <StyleProvider style={getTheme(commoncolor)}>
      <Box listValue={_listValue} matrix={_matrix} />
    </StyleProvider>
  );
}
