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
              Types
            </Text>
          </Layout>

          <Layout style={[AppStyle.layoutBackground]}>
            {listTypes()}
            <Button
              appearance="ghost"
              size="medium"
              style={[AppStyle.buttonLayout]}
              onPress={() => navigation.navigate("HowTo")}
            >
              <Text style={AppStyle.howto_button_text}>How-To ?</Text>
            </Button>
          </Layout>
        </Layout>
      </LinearGradient>
    </React.Fragment>
  );
}
