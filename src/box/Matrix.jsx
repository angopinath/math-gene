import React, { forwardRef, useImperativeHandle, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Layout, Text } from "@ui-kitten/components";
import { Col, Row, Grid } from "react-native-easy-grid";
import Element from "./Element";

const Matrix = (props) => {
  return (
    <Layout style={gridStyle.grid} key={props.fullMatrix}>
      {props.fullMatrix.map((element, ir) => {
        return (
          <Layout style={gridStyle.row} key={ir}>
            {element.map((col, ic) => {
              return (
                <Layout style={gridStyle.col} key={ic}>
                  <Element
                    key={ic}
                    element={col}
                    onPress={props.elementSelection}
                  />
                </Layout>
              );
            })}
          </Layout>
        );
      })}
    </Layout>

    // <Grid key={props.fullMatrix}>
    //   {props.fullMatrix.map((element, ir) => {
    //     return (
    //       <Row key={ir}>
    //         {element.map((col, ic) => {
    //           return (
    //             <Col key={ic}>
    //               <Element
    //                 key={ic}
    //                 element={col}
    //                 onPress={props.elementSelection}
    //               />
    //             </Col>
    //           );
    //         })}
    //       </Row>
    //     );
    //   })}
    // </Grid>
  );
};

const gridStyle = StyleSheet.create({
  grid: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    //justifyContent: "center",
  },
  row: {
    flex: 1,
    flexDirection: "column",
    //justifyContent: "flex-start",
  },
  col: {
    //flex: 1,
  },
});

export default Matrix;
