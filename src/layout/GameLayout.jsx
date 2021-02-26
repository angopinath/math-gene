import React, { useState, useEffect } from "react";
import { Image, StyleSheet, View } from "react-native";

import {
  Text,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";

import Game from "../box/Game";
import { generateGame } from "../services/Core";

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;
const ResetIcon = (props) => <Icon {...props} name="refresh" />;

export default function GameLayout({ route, navigation }) {
  const { vector, level } = route.params;
  console.log(vector, level);
  const [gameValues, setGameValues] = useState(generateGame(vector, level));
  const [levelCounter, setLevelCounter] = useState(1);

  var initGame = () => {
    const _gameValues = generateGame(vector, level);
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

  const renderBackAction = () => <TopNavigationAction />;

  const renderRightActions = () => (
    <TopNavigationAction onPress={() => refreshGame()} />
  );

  const getLevelString = () => {
    return "Level: " + levelCounter;
  };

  return (
    <>
      <TopNavigation
        style={styles.topnav}
        alignment="center"
        title={(evaProps) => (
          <Text category="h1" {...evaProps}>
            Matrix Adder
          </Text>
        )}
        subtitle={(evaProps) => <Text {...evaProps}>{getLevelString()}</Text>}
        accessoryLeft={renderBackAction}
        accessoryRight={renderRightActions}
      />
      <Game
        gameInput={gameValues}
        nextLevel={playNextLevel}
        restartLevel={refreshGame}
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
