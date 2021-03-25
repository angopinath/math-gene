import React, { useState, useEffect, useRef } from "react";
import { StyleSheet } from "react-native";
import { Modal, Card, Button, Icon, Layout, Text } from "@ui-kitten/components";
import { AdMobBanner } from "expo-ads-admob";
import { clueAdId, showRewardAd } from "../services/AdService";

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
  const [noOfHiddenValues, setNoOfHiddenValues] = useState(
    props.gameInput.noOfHiddenValues
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
    setNoOfHiddenValues(props.gameInput.noOfHiddenValues);
    return () => {
      reset();
    };
  }, [props]);

  useEffect(() => {
    if (noOfHiddenValues == 0) {
      setwonModelVisible(true);
      setTimeout(() => {
        setwonModelVisible(false);
        props.nextLevel();
      }, 3000);
      showRewardAd();
    }
  }, [noOfHiddenValues]);

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
    console.log("id " + id);
    const newMatrix = matrix.map((row, ri) => {
      return row.map((col, ci) => {
        return col.id == id ? { ...col, isHidden: !col.isHidden } : col;
      });
    });
    console.log("new matrix", newMatrix);
    return newMatrix;
  };
  const onAnsSelectionCallback = (val) => {
    console.log("on ans select clicked", val);
    console.log("selected element", selectedElement, "selected ans", val);
    if (selectedElement && val) {
      setPossibleValuesShow(false);

      if (selectedElement.value == val) {
        console.log("correct ans");
        setwrongAnswerModelVisible(false);
        setcorrectAnswerModelVisible(true);
        setMatrix(matrixRerender(selectedElement.id));
        setNoOfHiddenValues(noOfHiddenValues - 1);
      } else {
        console.log("wrong answer.. try again");

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
                  category="h5"
                  status="success"
                  style={{ alignSelf: "center" }}
                >
                  Awesome.. Keep Going..
                </Text>
              )}
              {wrongAnswerModelVisible && (
                <Text
                  category="h5"
                  status="warning"
                  style={{ alignSelf: "center" }}
                >
                  Losing my heart, Try Hard
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
          {/* <Button
            style={styles.button}
            status="info"
            accessoryLeft={(props) => <Icon {...props} name="bulb" />}
          ></Button> */}
          <Button
            style={styles.button}
            status="warning"
            onPress={() => props.howToNav()}
            accessoryLeft={(props) => <Icon {...props} name="question-mark" />}
          ></Button>
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
        adUnitID={clueAdId}
        servePersonalizedAds="true"
        onDidFailToReceiveAdWithError={() => {
          console.log("error loading ad");
        }}
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
