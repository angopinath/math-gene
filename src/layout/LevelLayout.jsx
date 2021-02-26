import React from "react";
import { Button, Layout, Text } from "@ui-kitten/components";

import AppStyle from "../style/AppStyle";
import { Image } from "react-native";

export default function LevelLayout({ route, navigation }) {
  const { vector } = route.params;
  const navigateToGame = (l) => {
    navigation.navigate("GameLayout", {
      vector: vector,
      level: l,
    });
  };
  return (
    <React.Fragment>
      <Layout style={[AppStyle.layoutBackground, AppStyle.pageLayout]}>
        <Layout style={[AppStyle.layoutBackground, AppStyle.logoLayout]}>
          <Image
            style={AppStyle.logoStyle}
            source={require("../../assets/logo.png")}
          />
          <Text category="h1" status="info">
            Complexity
          </Text>
        </Layout>

        <Button
          appearance="outline"
          size="medium"
          status="info"
          style={AppStyle.buttonLayout}
          onPress={() => navigateToGame(0.3)}
        >
          Easy
        </Button>
        <Button
          appearance="outline"
          size="medium"
          status="info"
          style={AppStyle.buttonLayout}
          onPress={() => navigateToGame(0.5)}
        >
          Medium
        </Button>
        <Button
          appearance="outline"
          size="medium"
          status="info"
          style={AppStyle.buttonLayout}
          onPress={() => navigateToGame(0.7)}
        >
          Hard
        </Button>
      </Layout>
    </React.Fragment>
  );
}
