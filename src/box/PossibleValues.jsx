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

    return arr;
  };

  const buttonList = (arr) => {
    return arr.map((val, index) => {
      return (
        <Button
          key={index}
          onPress={() => {
            props.onPossibleValueClick(val);
          }}
        >
          {val}
        </Button>
      );
    });
  };

  var buttonGroupList = splitArray().map((btnarr, index) => {
    return (
      <ButtonGroup
        style={{ margin: 2 }}
        key={index}
        appearance="filled"
        status="success"
        size={length > 16 ? "tiny" : "small"}
      >
        {buttonList(btnarr)}
      </ButtonGroup>
    );
  });

  return (
    <Layout
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",
      }}
    >
      {buttonGroupList}
    </Layout>
  );
};

export default PossibleValues1;
