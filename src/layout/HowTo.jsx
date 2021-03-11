import {
  Card,
  Divider,
  Layout,
  ListItem,
  Text,
  List,
} from "@ui-kitten/components";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ScrollView } from "react-native";
import AppStyle from "../style/AppStyle";
import {
  gameTypeEnum,
  gameCategoryEnum,
  gameLevelEnum,
} from "../services/gameTypes";
import Matrix from "../box/Matrix";

export default function HowTo() {
  const clueMatrix = [[{ id: "0", isClue: true, isHidden: false, value: "6" }]];
  const elementMatrix = [
    [{ id: "0", isClue: false, isHidden: false, value: "1" }],
  ];
  const hiddenElementMatrix = [
    [{ id: "0", isClue: false, isHidden: true, value: "1" }],
  ];
  const rowSumMatrixValue = [
    [
      { id: "0", isClue: true, isHidden: false, value: "6" },
      { id: "1", isClue: false, isHidden: false, value: "1" },
      { id: "2", isClue: false, isHidden: false, value: "+" },
      { id: "3", isClue: false, isHidden: true, value: "2" },
      { id: "4", isClue: false, isHidden: false, value: "+" },
      { id: "5", isClue: false, isHidden: false, value: "3" },
    ],
  ];
  const columnSumMatrixValue = [
    [{ id: "0", isClue: true, isHidden: false, value: "6" }],
    [{ id: "1", isClue: false, isHidden: false, value: "1" }],
    [{ id: "2", isClue: false, isHidden: false, value: "+" }],
    [{ id: "3", isClue: false, isHidden: true, value: "2" }],
    [{ id: "4", isClue: false, isHidden: false, value: "+" }],
    [{ id: "5", isClue: false, isHidden: false, value: "3" }],
  ];
  const MatrixDesc = (val) => {
    return (
      <Matrix
        key={val}
        fullMatrix={val}
        selElement={{}}
        elementSelection={() => {}}
      />
    );
  };

  const renderItem = ({ item, index }) => (
    <>
      <ListItem title={item.name} description={item.description} />
    </>
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
            style={[AppStyle.layoutBackground, { marginTop: 30, flex: 1 }]}
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
              <Divider style={AppStyle.devider} />
              <Text category="label">Clues</Text>
              {MatrixDesc(clueMatrix)}
              <Text>
                Clues help you to mine hidden matrix elements. Poppulated values
                are decided based on `Game Type`.
              </Text>
              <Text>
                Example: if Game type is MatrixSum, then sum of row/column will
                be available as a clue
              </Text>
              <Divider style={AppStyle.devider} />
              <Text category="label">Non-Hidden Element</Text>
              {MatrixDesc(elementMatrix)}
              <Text>
                Non-hidden elements are additional clues which helps with clues
                to find hidden element.
              </Text>
              <Divider style={AppStyle.devider} />
              <Text category="label">Hidden Element</Text>
              {MatrixDesc(hiddenElementMatrix)}
              <Text>
                Hidden elements are something you should find with helps of
                clues and non-hidden elements
              </Text>
            </Card>
            <Card style={AppStyle.card} header={() => Header("Game Types")}>
              <List
                style={AppStyle.list}
                data={gameTypeEnum()}
                ItemSeparatorComponent={Divider}
                renderItem={renderItem}
              />
            </Card>
            <Card
              style={AppStyle.card}
              header={() => Header("Game Categories")}
            >
              <List
                data={gameCategoryEnum()}
                ItemSeparatorComponent={Divider}
                renderItem={renderItem}
              />
            </Card>
            <Card style={AppStyle.card} header={() => Header("Game Level")}>
              <List
                data={gameLevelEnum()}
                ItemSeparatorComponent={Divider}
                renderItem={renderItem}
              />
            </Card>
            <Card
              style={AppStyle.card}
              header={() => Header("Game Play : MatrixSum")}
            >
              <Text category="label">Adding Rows</Text>
              {MatrixDesc(columnSumMatrixValue)}
              <Text>
                In this Row, one element is hidden, two non-hidden elements and
                addition of those elements are given as clue.
              </Text>
              <Text appearance="hint">1 + 2 + 3 = 6</Text>
              <Divider style={AppStyle.devider} />
              <Text category="label">Adding Columns</Text>
              {MatrixDesc(rowSumMatrixValue)}
              <Text>
                In this Column, one element is hidden, two non-hidden elements
                and addition of those elements are given as clue.
              </Text>
            </Card>
          </Layout>
        </ScrollView>
      </LinearGradient>
    </React.Fragment>
  );
}
