import React from "react";
import { Button, Layout, Text } from "@ui-kitten/components";

import AppStyle from "../style/AppStyle";
import { Image } from "react-native";

export default function CategoryLayout({ route, navigation }) {
  const navigateToLevel = (x) => {
    navigation.navigate("GameLevel", { vector: x });
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
            Category
          </Text>
        </Layout>

        <Button
          appearance="outline"
          size="medium"
          status="info"
          style={AppStyle.buttonLayout}
          onPress={() => navigateToLevel(2)}
        >
          2 X 2
        </Button>
        <Button
          appearance="outline"
          size="medium"
          status="info"
          style={AppStyle.buttonLayout}
          onPress={() => navigateToLevel(3)}
        >
          3 X 3
        </Button>
        <Button
          appearance="outline"
          size="medium"
          status="info"
          style={AppStyle.buttonLayout}
          onPress={() => navigateToLevel(4)}
        >
          4 X 4
        </Button>
        <Button
          appearance="outline"
          size="medium"
          status="info"
          style={AppStyle.buttonLayout}
          onPress={() => navigateToLevel(5)}
        >
          5 X 5
        </Button>
      </Layout>
    </React.Fragment>
  );
}
