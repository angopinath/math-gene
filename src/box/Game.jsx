import React, { useState, useEffect } from "react";
import { Container, Text, Button, Content, Header, View } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";

import PossibleValues from "./PossibleValues";
import Matrix from "./Matrix";

const Game = (props) => {
  const [possibleValues, setPossibleValues] = useState([]);
  const [matrix, setMatrix] = useState([]);
  const [selectedElement, setSelectedElement] = useState({});
  const [selectAns, setSelectedAns] = useState(0);
  const [isPossibleValuesShow, setPossibleValuesShow] = useState(false);

  useEffect(() => {
    setPossibleValues(props.listValue);
    setMatrix(props.matrix);
  });

  const matrixRerender = (id) => {
    console.log("id " + id);
    const newMatrix = matrix.map((row, ri) => {
      return row.map((col, ci) => {
        if (col.id == id) {
          col.isHidden = true;
        }
        return col;
      });
    });
    console.log(newMatrix);
    setMatrix([...newMatrix]);
  };
  const validateSelection = () => {
    if (selectedElement && selectAns) {
      if (selectedElement.value == selectAns) {
        console.log("correct ans");
        matrixRerender(selectedElement.id);
        setPossibleValuesShow(false);
      } else {
        console.log("wrong answer.. try again");
      }
    }
  };
  const onAnsSelectionCallback = (val) => {
    setSelectedAns(val);
    validateSelection();
  };

  var sampleOnPress = () => {};

  return (
    <>
      <Grid>
        <Row size={1}>
          {
            <PossibleValues
              onPossibleValueClick={onAnsSelectionCallback}
              isShow={isPossibleValuesShow}
              values={possibleValues}
            />
          }
        </Row>
        <Row size={2}>
          <Content>
            <Matrix
              matrix={matrix}
              elementSelection={(el) => {
                setPossibleValuesShow(true);
                setSelectedElement(el);
              }}
            />
          </Content>
        </Row>
        <Row size={1}></Row>
      </Grid>
    </>
  );
};

export default Game;
