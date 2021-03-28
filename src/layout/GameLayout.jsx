import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";

import { Layout, Text } from "@ui-kitten/components";
import { LinearGradient } from "expo-linear-gradient";

import Game from "../box/Game";
import { generateGame } from "../services/Core";
import AppStyle from "../style/AppStyle";
import { PopupModel } from "../box/Model";
import { showImageAd } from "../services/AdService";

export default function GameLayout({ route, navigation }) {
  const { vector, level, type } = route.params || { vector: 2, level: 0.6 };
  const [gameValues, setGameValues] = useState(
    generateGame(vector.value, level.value)
  );
  const [levelCounter, setLevelCounter] = useState(1);
  const [goBackModelVisible, setGoBackModelVisible] = useState(false);
  const [backAction, setBackAction] = useState(null);

  var initGame = () => {
    const _gameValues = generateGame(vector.value, level.value);
    setGameValues(_gameValues);
  };

  var refreshGame = () => {
    initGame();
  };

  var playNextLevel = () => {
    setLevelCounter(levelCounter + 1);
    initGame();
  };

  const getLevelString = () => {
    return "Level: " + levelCounter;
  };

  const howToNav = () => {
    navigation.navigate("HowTo");
  };

  useEffect(() => {
    navigation.addListener("beforeRemove", (e) => {
      const action = e.data.action;
      e.preventDefault();
      if (action.type == "GO_BACK") {
        setBackAction(action);
        setGoBackModelVisible(true);
      }
    });
  }, [navigation]);

  const yesCallBackFunc = () => {
    showImageAd();
    navigation.dispatch(backAction);
  };
  const noCallBackFunc = () => {
    setGoBackModelVisible(false);
  };

  return (
    <>
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
            {type.name + " | " + vector.name + " | " + level.name}
          </Text>
          <Text category="h6" style={AppStyle.headerText}>
            {getLevelString()}
          </Text>
        </Layout>

        <Game
          gameInput={gameValues}
          nextLevel={playNextLevel}
          restartLevel={refreshGame}
          howToNav={howToNav}
        />
      </LinearGradient>
      <PopupModel
        visible={goBackModelVisible}
        data={{
          type: "question",
          msg: {
            header: "Are You Sure !!",
            txt: "-",
          },
          yesCallBack: yesCallBackFunc,
          noCallBack: noCallBackFunc,
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  backgroundimage: {
    flex: 1,
    resizeMode: "cover",
  },
  topnav: {
    margin: 15,
    marginTop: 20,
    borderRadius: 3,
  },
});
