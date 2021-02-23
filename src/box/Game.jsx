import React, { useState, useEffect, useRef } from "react";
import { StyleSheet } from "react-native";
import { Modal, Card, Button, Icon, Layout, Text } from "@ui-kitten/components";

import PossibleValues from "./PossibleValues";
import Matrix from "./Matrix";

const Game = (props) => {
  const [possibleValues, setPossibleValues] = useState(
    props.gameInput.possibleValues
  );
  const [matrix, setMatrix] = useState(props.gameInput.matrix);
  const [noOfHiddenValues, setNoOfHiddenValues] = useState(
    props.gameInput.noOfHiddenValues
  );
  const [selectedElement, setSelectedElement] = useState({});
  const [selectAns, setSelectedAns] = useState(0);
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
      }, 5000);
    }
  }, [noOfHiddenValues]);

  useEffect(() => {
    if (falseAttempt == 0) {
      setlostModelVisible(true);
      setTimeout(() => {
        setlostModelVisible(false);
        props.restartLevel();
      }, 5000);
    }
  }, [falseAttempt]);

  useEffect(() => {
    console.log("selection effect");
    if (validateSelection()) {
      let newMatrix = matrixRerender(selectedElement.id);
      setPossibleValuesShow(false);
      setMatrix(newMatrix);
      setNoOfHiddenValues(noOfHiddenValues - 1);
    }
  }, [selectAns]);

  var reset = () => {
    setSelectedElement({});
    setSelectedAns(0);
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
  var validateSelection = () => {
    console.log("selected element", selectedElement, "selected ans", selectAns);
    if (selectedElement && selectAns) {
      if (selectedElement.value == selectAns) {
        console.log("correct ans");
        toggleCorrectAnswerModelVisible();
        return true;
      } else {
        console.log("wrong answer.. try again");
        toggleWrongAnswerModelVisible();
        setFalseAttempt(falseAttempt - 1);
        return false;
      }
    }
  };
  const onAnsSelectionCallback = (val) => {
    console.log("on ans select clicked", val);
    setSelectedAns(val);
  };

  const onElementSelectionCallback = (el) => {
    setPossibleValuesShow(true);
    setSelectedElement(el);
  };

  const toggleWrongAnswerModelVisible = () => {
    setwrongAnswerModelVisible(true);
    setTimeout(() => {
      setwrongAnswerModelVisible(false);
    }, 2000);
  };
  const toggleCorrectAnswerModelVisible = () => {
    setcorrectAnswerModelVisible(true);
    setTimeout(() => {
      setcorrectAnswerModelVisible(false);
    }, 2000);
  };

  return (
    <React.Fragment>
      <Layout style={[styles.container, styles.transparent]}>
        <Layout style={[styles.clueLayer, styles.transparent]}>
          <PossibleValues
            onPossibleValueClick={onAnsSelectionCallback}
            isShow={isPossibleValuesShow}
            values={possibleValues}
          />
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
          <Button
            style={styles.button}
            status="danger"
            accessoryRight={(props) => <Icon {...props} name="heart" />}
          >
            {falseAttempt}
          </Button>
          <Button
            style={styles.button}
            status="info"
            accessoryLeft={(props) => <Icon {...props} name="bulb" />}
          ></Button>
          <Button
            style={styles.button}
            status="warning"
            accessoryLeft={(props) => <Icon {...props} name="question-mark" />}
          ></Button>
          <React.Fragment>
            <Modal
              visible={wonModelVisible}
              backdropStyle={styles.backdrop}
              style={styles.model}
            >
              <Layout style={styles.model}>
                {/* <Icon name="smiling-face-outline" /> */}
                <Text category="h2" status="success">
                  Congrats
                </Text>
                <Text category="h4" status="success">
                  Level complated
                </Text>
                <Text category="label">Loading Next Level..</Text>
              </Layout>
            </Modal>
            <Modal visible={lostModelVisible} backdropStyle={styles.backdrop}>
              <Layout style={styles.model}>
                {/* <Icon name="shield-off"></Icon> */}
                <Text category="h2" status="danger">
                  Oh.. Noo..
                </Text>
                <Text category="h4" status="danger">
                  You Lost
                </Text>
                <Text category="label">Reloading new level..</Text>
              </Layout>
            </Modal>
            <Modal
              visible={correctAnswerModelVisible}
              backdropStyle={styles.backdrop}
            >
              <Layout style={styles.model}>
                {/* <Icon name="checkmark-circle-2"></Icon> */}
                <Text category="h2" status="success">
                  Awsome
                </Text>
                <Text category="h4" status="success">
                  Correct Answer
                </Text>
                <Text category="label">Keep Rocking..</Text>
              </Layout>
            </Modal>
            <Modal
              visible={wrongAnswerModelVisible}
              backdropStyle={styles.backdrop}
            >
              <Layout style={styles.model}>
                {/* <Icon {...props} name="close-circle" /> */}
                <Text category="h2" status="danger">
                  Oops..
                </Text>
                <Text category="h4" status="danger">
                  Wrong Answer
                </Text>
                <Text category="label">loosing one life..</Text>
              </Layout>
            </Modal>
          </React.Fragment>
        </Layout>
      </Layout>
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
