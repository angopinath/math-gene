import React from "react";
import { Button, Layout, Text } from "@ui-kitten/components";
import { LinearGradient } from "expo-linear-gradient";

import AppStyle from "../style/AppStyle";
import { gameCategoryEnum } from "../services/gameTypes";
import { Image } from "react-native";

export default function CategoryLayout({ route, navigation }) {
  const { type } = route.params;
  const navigateToLevel = (x) => {
    navigation.navigate("GameLevel", { vector: x, type: type });
  };

  const listCategories = () => {
    return gameCategoryEnum().map((cat, i) => {
      return (
        <Button
          key={i}
          appearance="filled"
          size="medium"
          status="info"
          style={AppStyle.buttonLayout}
          onPress={() => navigateToLevel(cat)}
        >
          {cat.name}
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
              Category
            </Text>
          </Layout>
          <Layout style={[AppStyle.layoutBackground]}>
            {listCategories()}
          </Layout>
        </Layout>
      </LinearGradient>
    </React.Fragment>
  );
}
