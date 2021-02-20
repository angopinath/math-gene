import React, { useState } from "react";
import {
  ApplicationProvider,
  Layout,
  Text,
  Button,
  ButtonGroup,
} from "@ui-kitten/components";
import * as eva from "@eva-design/eva";

const PossibleValues1 = (props) => {
  const maxButtonPerRow = 9;
  const length = props.values.length;
  const numberOfRows = Math.ceil(length / maxButtonPerRow);

  var splitArray = () => {
    var arr = [];
    var start = 0;
    var end = Math.min(maxButtonPerRow, length);
    for (var i = 0; i < numberOfRows; i++) {
      arr.push(props.values.slice(start, end));

      end = start + end;
      start = end - start;
      end = end + maxButtonPerRow;
      if (end > length) {
        end = length;
      }
    }

    // if (props.values.length > maxButtonPerRow) {
    //   arr.push(props.values.slice(0, props.values.length / 2));
    //   arr.push(props.values.slice(props.values.length / 2));
    // } else {
    //   arr.push(props.values);
    // }
    console.log("splited arr", arr);
    return arr;
  };

  const buttonList = (arr) => {
    return arr.map((val, index) => {
      return (
        <Button
          key={index}
          onPress={() => {
            console.log("possible value is clicked", val);
            props.onPossibleValueClick(val);
          }}
        >
          {val}
        </Button>
      );
    });
  };

  var buttonGroupList = splitArray().map((btnarr, index) => {
    console.log("parent arr,", btnarr);
    return (
      <ButtonGroup
        style={{ margin: 2 }}
        key={index}
        appearance="outline"
        status="success"
        size="tiny"
      >
        {buttonList(btnarr)}
      </ButtonGroup>
    );
  });

  return (
    <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {buttonGroupList}
    </Layout>
  );
};

export default PossibleValues1;
