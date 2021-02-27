import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { Button, Icon, useTheme } from "@ui-kitten/components";

const buttonStyle = StyleSheet.create({
  element: {
    borderRadius: 0,
    margin: 1,
    //height: 50,
    //width: 50,
  },
});

const Element = (props) => {
  const theme = useTheme();

  const onButtonClick = () => {
    console.log("element is selected");
    props.onPress(props.element);
  };

  const hiddenBtnIcon = (pr) => {
    return (
      <Icon
        style={{ margin: 0 }}
        {...pr}
        name={
          props.element.id == props.selElement.id
            ? "eye-outline"
            : "question-mark-circle-outline"
        }
      />
    );
  };

  const getVisibleText = () => {
    if (props.element.isClue) {
      return (
        <Button
          size="small"
          style={buttonStyle.element}
          status="warning"
          appearance="outline"
        >
          {props.element.value}
        </Button>
      );
    } else if (props.element.isHidden) {
      return (
        <Button
          size="small"
          style={[
            buttonStyle.element,
            {
              backgroundColor:
                props.element.id == props.selElement.id
                  ? theme["color-info-active"]
                  : theme["color-info-default"],
            },
          ]}
          appearance="filled"
          onPress={onButtonClick}
          accessoryLeft={hiddenBtnIcon}
        ></Button>
      );
    } else {
      return (
        <Button
          size="small"
          appearance="outline"
          status="info"
          style={buttonStyle.element}
          disabled={false}
        >
          {props.element.value}
        </Button>
      );
    }
  };

  return <>{getVisibleText()}</>;
};

export default Element;
