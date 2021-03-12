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
  const clueMatrix = [
    [{ id: "0c", isClue: true, isHidden: false, value: "6" }],
  ];
  const elementMatrix = [
    [{ id: "0e", isClue: false, isHidden: false, value: "1" }],
  ];
  const hiddenElementMatrix = [
    [{ id: "h0h", isClue: false, isHidden: true, value: "1" }],
  ];
  const rowSumMatrixValue = [
    [
      { id: "r0", isClue: true, isHidden: false, value: "6" },
      { id: "r1", isClue: false, isHidden: false, value: "1" },
      { id: "r2", isClue: false, isHidden: false, value: "+" },
      { id: "r3", isClue: false, isHidden: true, value: "2" },
      { id: "r4", isClue: false, isHidden: false, value: "+" },
      { id: "r5", isClue: false, isHidden: false, value: "3" },
    ],
  ];
  const columnSumMatrixValue = [
    [{ id: "c0", isClue: true, isHidden: false, value: "6" }],
    [{ id: "c1", isClue: false, isHidden: false, value: "1" }],
    [{ id: "c2", isClue: false, isHidden: false, value: "+" }],
    [{ id: "c3", isClue: false, isHidden: true, value: "2" }],
    [{ id: "c4", isClue: false, isHidden: false, value: "+" }],
    [{ id: "c5", isClue: false, isHidden: false, value: "3" }],
  ];
  const diagonalSumMatrixValue = [
    [
      { id: "a0", isClue: true, isHidden: false, value: "6" },
      { id: "a1", isClue: true, isHidden: false, value: "" },
      { id: "a2", isClue: true, isHidden: false, value: "" },
      { id: "a3", isClue: true, isHidden: false, value: "" },
      { id: "a4", isClue: true, isHidden: false, value: "" },
      { id: "a5", isClue: true, isHidden: false, value: "" },
    ],
    [
      { id: "b1", isClue: true, isHidden: false, value: "" },
      { id: "b2", isClue: false, isHidden: false, value: "1" },
      { id: "b3", isClue: false, isHidden: false, value: "" },
      { id: "b4", isClue: false, isHidden: false, value: "" },
      { id: "b5", isClue: false, isHidden: false, value: "" },
      { id: "b6", isClue: false, isHidden: false, value: "" },
    ],
    [
      { id: "c1", isClue: true, isHidden: false, value: "" },
      { id: "c2", isClue: false, isHidden: false, value: "" },
      { id: "c3", isClue: false, isHidden: false, value: "+" },
      { id: "c4", isClue: false, isHidden: false, value: "" },
      { id: "c5", isClue: false, isHidden: false, value: "" },
      { id: "c6", isClue: false, isHidden: false, value: "" },
    ],
    [
      { id: "d1", isClue: true, isHidden: false, value: "" },
      { id: "d2", isClue: false, isHidden: false, value: "" },
      { id: "d3", isClue: false, isHidden: false, value: "" },
      { id: "d4", isClue: false, isHidden: true, value: "2" },
      { id: "d42", isClue: false, isHidden: false, value: "" },
      { id: "d52", isClue: false, isHidden: false, value: "" },
    ],
    [
      { id: "e11", isClue: true, isHidden: false, value: "" },
      { id: "e22", isClue: false, isHidden: false, value: "" },
      { id: "e32", isClue: false, isHidden: false, value: "" },
      { id: "e42", isClue: false, isHidden: false, value: "" },
      { id: "e54", isClue: false, isHidden: false, value: "+" },
      { id: "e62", isClue: false, isHidden: false, value: "" },
    ],
    [
      { id: "f11", isClue: true, isHidden: false, value: "" },
      { id: "f22", isClue: false, isHidden: false, value: "" },
      { id: "f32", isClue: false, isHidden: false, value: "" },
      { id: "f42", isClue: false, isHidden: false, value: "" },
      { id: "f52", isClue: false, isHidden: false, value: "" },
      { id: "f65", isClue: false, isHidden: false, value: "3" },
    ],
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
      <ListItem key={item} title={item.name} description={item.description} />
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
              key="overview"
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
            <Card
              key="types"
              style={AppStyle.card}
              header={() => Header("Game Types")}
            >
              <List
                style={AppStyle.list}
                data={gameTypeEnum()}
                ItemSeparatorComponent={Divider}
                renderItem={renderItem}
              />
            </Card>
            <Card
              key="categories"
              style={AppStyle.card}
              header={() => Header("Game Categories")}
            >
              <List
                data={gameCategoryEnum()}
                ItemSeparatorComponent={Divider}
                renderItem={renderItem}
              />
            </Card>
            <Card
              key="level"
              style={AppStyle.card}
              header={() => Header("Game Level")}
            >
              <List
                data={gameLevelEnum()}
                ItemSeparatorComponent={Divider}
                renderItem={renderItem}
              />
            </Card>
            <Card
              key="gameplay-matrixsum"
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
              <Divider style={AppStyle.devider} />
              <Text category="label">Adding Diagonal</Text>
              {MatrixDesc(diagonalSumMatrixValue)}
              <Text>
                Diagonal Clues are something special which helps finding hidden
                elements faster
              </Text>
            </Card>
          </Layout>
        </ScrollView>
      </LinearGradient>
    </React.Fragment>
  );
}
