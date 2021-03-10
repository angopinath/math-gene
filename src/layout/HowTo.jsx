import { Card, Divider, Layout, ListItem, Text } from "@ui-kitten/components";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ScrollView } from "react-native";
import AppStyle from "../style/AppStyle";
import {
  gameTypeEnum,
  gameCategoryEnum,
  gameLevelEnum,
} from "../services/gameTypes";

export default function HowTo() {
  const renderItem = ({ item, index }) => (
    <ListItem title={`${item.name}`} description={`${item.description}`} />
  );
  const Header = (title) => {
    return (
      <React.Fragment>
        <Layout
          style={[
            AppStyle.layoutBackground,
            { alignItems: "flex-start", padding: 10, paddingLeft: 24 },
          ]}
        >
          <Text category="h6">{title}</Text>
        </Layout>
      </React.Fragment>
    );
  };
  return (
    <React.Fragment>
      <LinearGradient
        colors={["#206AFF", "#BE26FF"]}
        style={AppStyle.background}
        locations={[0.1, 0.84]}
      >
        <Layout
          style={[
            AppStyle.layoutBackground,
            { alignItems: "center", marginTop: 30 },
          ]}
        >
          <Text category="h5" style={AppStyle.headerText}>
            How-To ?
          </Text>
        </Layout>
        <ScrollView>
          <Layout
            style={[
              AppStyle.layoutBackground,
              { alignItems: "center", marginTop: 30, flex: 1 },
            ]}
          >
            <Card
              style={AppStyle.card}
              header={() => Header("Overview: Mine Matrix")}
            >
              <Text>
                Mine Matrix - is a Puzzle Game. Build with matrix. Hidden
                Element can be mined with help of Non-hidden elements and Clues.
                Mine Matrix, have various types, flavours and difficulty levels.
                Love Gaming
              </Text>
            </Card>
            <Card style={AppStyle.card} header={() => Header("Game Types")}>
              <List
                data={gameTypeEnum}
                ItemSeparatorComponent={Divider}
                renderItem={renderItem}
              />
            </Card>
            <Card
              style={AppStyle.card}
              header={() => Header("Game Categories")}
            >
              <List
                data={gameCategoryEnum}
                ItemSeparatorComponent={Divider}
                renderItem={renderItem}
              />
            </Card>
            <Card style={AppStyle.card} header={() => Header("Game Level")}>
              <List
                data={gameLevelEnum}
                ItemSeparatorComponent={Divider}
                renderItem={renderItem}
              />
            </Card>
            <Card style={AppStyle.card} header={() => Header("Game Play")}>
              <Text>
                The Maldives, officially the Republic of Maldives, is a small
                country in South Asia, located in the Arabian Sea of the Indian
                Ocean. It lies southwest of Sri Lanka and India, about 1,000
                kilometres (620 mi) from the Asian continent
              </Text>
            </Card>
          </Layout>
        </ScrollView>
      </LinearGradient>
    </React.Fragment>
  );
}
