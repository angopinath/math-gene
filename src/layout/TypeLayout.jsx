import React from "react";
import { Button, Layout, Text } from "@ui-kitten/components";

import AppStyle from "../style/AppStyle";
import { Image } from "react-native";

export default function TypeLayout({ route, navigation }) {
  const navigateToCategory = () => {
    navigation.navigate("GameCategory");
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
            Types
          </Text>
        </Layout>

        <Button
          appearance="outline"
          size="medium"
          status="info"
          style={AppStyle.buttonLayout}
          onPress={() => navigateToCategory()}
        >
          Matrixsum
        </Button>
      </Layout>
    </React.Fragment>
  );
}
