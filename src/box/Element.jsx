import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Button, Text, Icon } from "@ui-kitten/components";

const buttonStyle = StyleSheet.create({
  element: {
    borderRadius: 0,
    margin: 1,
  },
});

const Element = (props) => {
  const onButtonClick = () => {
    console.log("element is selected");
    props.onPress(props.element);
  };
  const StarIcon = (props) => (
    <Icon {...props} name="question-mark-circle-outline" />
  );

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
          style={buttonStyle.element}
          appearance="filled"
          onPress={onButtonClick}
          accessoryLeft={StarIcon}
        ></Button>
      );
    } else {
      return (
        <Button
          size="small"
          appearance="outline"
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
