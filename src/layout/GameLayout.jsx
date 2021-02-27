import React, { useState, useEffect } from "react";
import { Image, StyleSheet, View } from "react-native";

import { Layout, Text } from "@ui-kitten/components";
import { LinearGradient } from "expo-linear-gradient";

import Game from "../box/Game";
import { generateGame } from "../services/Core";
import AppStyle from "../style/AppStyle";

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;
const ResetIcon = (props) => <Icon {...props} name="refresh" />;

export default function GameLayout({ route, navigation }) {
  const { vector, level, type } = route.params || { vector: 2, level: 0.6 };
  console.log(vector, level, type);
  const [gameValues, setGameValues] = useState(
    generateGame(vector.value, level.value)
  );
  const [levelCounter, setLevelCounter] = useState(1);

  var initGame = () => {
    const _gameValues = generateGame(vector.value, level.value);
    setGameValues(_gameValues);
  };

  var refreshGame = () => {
    console.log("refresh called");
    initGame();
  };

  var playNextLevel = () => {
    setLevelCounter(levelCounter + 1);
    initGame();
  };

  const getLevelString = () => {
    return "Level: " + levelCounter;
  };

  return (
    <>
      <LinearGradient
        colors={["#F761A1", "#8C1BAB"]}
        style={AppStyle.background}
        locations={[0.1, 1]}
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
        />
      </LinearGradient>
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
