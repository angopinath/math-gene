import React, { useState } from "react";
import { Button, View, Text, Content, Col } from "native-base";

const PossibleValues = (props) => {
  const buttonGroup = props.values.map((val, index) => {
    return (
      <Button
        key={index}
        success
        rounded
        small
        onPress={() => {
          props.onPossibleValueClick(val);
        }}
      >
        <Text key={index}>{val}</Text>
      </Button>
    );
  });
  const renderValuesList = () => {
    if (props.isShow) {
      return buttonGroup;
    } else {
      return <Text>Keep doing..</Text>;
    }
  };

  return <View>{renderValuesList()}</View>;
};

export default PossibleValues;
