import React from "react";
import { Button, Layout, Text } from "@ui-kitten/components";

import AppStyle from "../style/AppStyle";
import { gameTypeEnum } from "../services/gameTypes";
import { Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function TypeLayout({ route, navigation }) {
  const navigateToCategory = (type) => {
    navigation.navigate("GameCategory", { type: type });
  };

  const listTypes = () => {
    return gameTypeEnum().map((type, i) => {
      return (
        <Button
          key={i}
          appearance="filled"
          size="medium"
          status="info"
          style={AppStyle.buttonLayout}
          onPress={() => navigateToCategory(type)}
        >
          {type.name}
        </Button>
      );
    });
  };
  return (
    <React.Fragment>
      <LinearGradient
        colors={["#F761A1", "#8C1BAB"]}
        style={AppStyle.background}
        locations={[0.1, 1]}
      >
        <Layout style={[AppStyle.layoutBackground, AppStyle.pageLayout]}>
          <Layout style={[AppStyle.layoutBackground, AppStyle.logoLayout]}>
            <Image
              style={AppStyle.logoStyle}
              source={require("../../assets/logo.png")}
            />
            <Text category="h5" style={AppStyle.headerText}>
              Types
            </Text>
          </Layout>

          <Layout style={[AppStyle.layoutBackground]}>{listTypes()}</Layout>
        </Layout>
      </LinearGradient>
    </React.Fragment>
  );
}
