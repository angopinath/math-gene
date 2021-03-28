import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { Icon, Layout, Text } from "@ui-kitten/components";
import { AdMobBanner, AdMobRewarded } from "expo-ads-admob";
import { bannerAdId, rewardAdId, showImageAd } from "../services/AdService";

import PossibleValues from "./PossibleValues";
import Matrix from "./Matrix";
import Life from "./Life";
import { PopupModel } from "./Model";
import AppStyle from "../style/AppStyle";

const Game = (props) => {
  const [possibleValues, setPossibleValues] = useState(
    props.gameInput.possibleValues
  );
  const [matrix, setMatrix] = useState(props.gameInput.matrix);
  const [hiddenValues, setHiddenValues] = useState(
    props.gameInput.hiddenValues
  );
  const [selectedElement, setSelectedElement] = useState({});
  const [falseAttempt, setFalseAttempt] = useState(3);
  const [isPossibleValuesShow, setPossibleValuesShow] = useState(false);

  const [wonModelVisible, setwonModelVisible] = useState(false);
  const [lostModelVisible, setlostModelVisible] = useState(false);
  const [correctAnswerModelVisible, setcorrectAnswerModelVisible] = useState(
    false
  );
  const [wrongAnswerModelVisible, setwrongAnswerModelVisible] = useState(false);

  useEffect(() => {
    setPossibleValues(props.gameInput.possibleValues);
    setMatrix(props.gameInput.matrix);
    setHiddenValues(props.gameInput.hiddenValues);
    return () => {
      reset();
    };
  }, [props]);

  useEffect(() => {
    if (hiddenValues.length == 0) {
      setwonModelVisible(true);
      setTimeout(() => {
        setwonModelVisible(false);
        props.nextLevel();
      }, 3000);
      showImageAd();
    }
  }, [hiddenValues]);

  useEffect(() => {
    if (falseAttempt == 0) {
      setlostModelVisible(true);
      setTimeout(() => {
        setlostModelVisible(false);
        props.restartLevel();
      }, 3000);
    }
  }, [falseAttempt]);

  var reset = () => {
    setSelectedElement({});
    setFalseAttempt(3);
    setPossibleValuesShow(false);
    setwonModelVisible(false);
    setlostModelVisible(false);
    setwrongAnswerModelVisible(false);
    setcorrectAnswerModelVisible(false);
  };

  var matrixRerender = (id) => {
    const newMatrix = matrix.map((row, ri) => {
      return row.map((col, ci) => {
        return col.id == id ? { ...col, isHidden: !col.isHidden } : col;
      });
    });
    return newMatrix;
  };
  const onAnsSelectionCallback = (val) => {
    if (selectedElement && val) {
      setPossibleValuesShow(false);

      if (selectedElement.value == val) {
        setwrongAnswerModelVisible(false);
        setcorrectAnswerModelVisible(true);
        setMatrix(matrixRerender(selectedElement.id));
        setHiddenValues(
          hiddenValues.filter((h) => h.value != selectedElement.value)
        );
      } else {
        setcorrectAnswerModelVisible(false);
        setwrongAnswerModelVisible(true);
        setFalseAttempt(falseAttempt - 1);
      }
      setSelectedElement({});
    }
  };

  const onElementSelectionCallback = (el) => {
    setPossibleValuesShow(true);
    setSelectedElement(el);
  };

  const lifeCallBackFunc = () => {
    setFalseAttempt(falseAttempt + 1);
  };
  const showClueUnlockRewardAd = async () => {
    await AdMobRewarded.setAdUnitID(rewardAdId);
    await AdMobRewarded.addEventListener("rewardedVideoDidClose", () => {
      unlockRandomClues();
    });
    await AdMobRewarded.requestAdAsync();
    await AdMobRewarded.showAdAsync();
  };
  const unlockRandomClues = () => {
    if (hiddenValues && hiddenValues.length > 1) {
      _index = Math.floor(Math.random() * hiddenValues.length) + 0;
      popElement = hiddenValues[_index];
      _matrix = [...matrix];
      _matrix[popElement.rowIndex][popElement.colIndex] = {
        ..._matrix[popElement.rowIndex][popElement.colIndex],
        isHidden: false,
      };
      setMatrix(_matrix);
      setHiddenValues(hiddenValues.splice(_index, 1));
    }
  };

  return (
    <React.Fragment>
      <Layout style={[styles.container, styles.transparent]}>
        <Layout style={[styles.clueLayer, styles.transparent]}>
          {isPossibleValuesShow ? (
            <PossibleValues
              onPossibleValueClick={onAnsSelectionCallback}
              isShow={isPossibleValuesShow}
              values={possibleValues}
            />
          ) : (
            <Layout style={[styles.clueLayer, styles.transparent]}>
              {correctAnswerModelVisible && (
                <Text
                  category="h6"
                  status="success"
                  style={{ alignSelf: "center" }}
                >
                  Excellent.. keep doing..
                </Text>
              )}
              {wrongAnswerModelVisible && (
                <Text
                  category="h6"
                  status="warning"
                  style={{ alignSelf: "center" }}
                >
                  You need to think more..
                </Text>
              )}
            </Layout>
          )}
        </Layout>
        <Layout style={[styles.matrixLayer, styles.transparent]}>
          <Matrix
            key={matrix}
            fullMatrix={matrix}
            selElement={selectedElement}
            elementSelection={onElementSelectionCallback}
          />
        </Layout>
        <Layout style={[styles.actionLayer, styles.transparent]}>
          <Life life={falseAttempt} lifeCallBack={lifeCallBackFunc} />
          <Icon
            style={AppStyle.gameHeart}
            fill="#FFF"
            name="bulb-outline"
            onPress={() => {
              showClueUnlockRewardAd();
            }}
          />
          <Icon
            style={AppStyle.gameHeart}
            fill="#FFF"
            name="question-mark-circle"
            onPress={() => {
              props.howToNav();
            }}
          />

          <React.Fragment>
            <PopupModel
              visible={wonModelVisible}
              data={{
                type: "success",
                msg: {
                  header: "Congrats..!",
                  txt: "Loading new Level..",
                },
              }}
            />
            <PopupModel
              visible={lostModelVisible}
              data={{
                type: "danger",
                msg: {
                  header: "You Lost..!",
                  txt: "Reloading..",
                },
              }}
            />
          </React.Fragment>
        </Layout>
      </Layout>
      <AdMobBanner
        bannerSize="fullBanner"
        adUnitID={bannerAdId}
        servePersonalizedAds="true"
        onDidFailToReceiveAdWithError={() => {}}
      />
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },

  clueLayer: {
    flex: 0.2,
    justifyContent: "center",
  },
  matrixLayer: {
    flex: 0.6,
    justifyContent: "center",
    alignItems: "center",
  },
  actionLayer: {
    flex: 0.1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  button: {
    maxHeight: 40,
    maxWidth: 60,
  },
  model: {
    backgroundColor: "#fff",
    margin: 10,
    borderRadius: 5,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  transparent: {
    backgroundColor: "transparent",
  },
});
export default Game;
