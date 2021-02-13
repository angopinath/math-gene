import React from "react";
import { Col, Row, Grid } from "react-native-easy-grid";
import Element from "./Element";

const Matrix = (props) => {
  return (
    <Grid>
      {props.matrix.map((element, ir) => {
        return (
          <Row key={ir}>
            {element.map((col, ic) => {
              return (
                <Col key={ic}>
                  <Element
                    key={ic}
                    isHidden={col.isHidden}
                    isClue={col.isClue}
                    id={col.id}
                    value={col.value}
                    onPress={props.elementSelection}
                  />
                </Col>
              );
            })}
          </Row>
        );
      })}
    </Grid>
  );
};

export default Matrix;
