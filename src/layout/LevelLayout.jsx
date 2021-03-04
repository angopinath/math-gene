import React from "react";
import { Button, Layout, Text } from "@ui-kitten/components";
import { LinearGradient } from "expo-linear-gradient";

import AppStyle from "../style/AppStyle";
import { gameLevelEnum } from "../services/gameTypes";
import { Image } from "react-native";

export default function LevelLayout({ route, navigation }) {
  const { vector, type } = route.params;
  const navigateToGame = (l) => {
    navigation.navigate("GameLayout", {
      vector: vector,
      level: l,
      type: type,
    });
  };
  const listLevels = () => {
    return gameLevelEnum().map((level, i) => {
      return (
        <Button
          key={i}
          appearance="filled"
          size="medium"
          status="info"
          style={AppStyle.buttonLayout}
          onPress={() => navigateToGame(level)}
        >
          {level.name}
        </Button>
      );
    });
  };
  return (
    <React.Fragment>
      <LinearGradient
        colors={["#206AFF", "#BE26FF"]}
        style={AppStyle.background}
        locations={[0.1, 0.84]}
      >
        <Layout style={[AppStyle.layoutBackground, AppStyle.pageLayout]}>
          <Layout style={[AppStyle.layoutBackground, AppStyle.logoLayout]}>
            <Image
              style={AppStyle.logoStyle}
              source={require("../../assets/logo.png")}
            />
            <Text category="h5" style={AppStyle.headerText}>
              Complexity
            </Text>
          </Layout>

          <Layout style={[AppStyle.layoutBackground]}>{listLevels()}</Layout>
        </Layout>
      </LinearGradient>
    </React.Fragment>
  );
}
