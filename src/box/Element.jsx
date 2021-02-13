import React, { useState } from "react";
import {} from "react-native";
import { Container, Button, Text, Icon } from "native-base";

const Element = (props) => {
  var [isClue, setClue] = useState(props.isClue);
  var [isHidden, setHidden] = useState(props.isHidden);
  var [value, setValue] = useState(props.value);
  const [id, setId] = useState(props.id);

  var onButtonClick = () => {
    console.log("element is selected");
    props.onPress(props);
  };

  var getVisibleText = () => {
    if (isClue) {
      return (
        <Button full warning>
          <Text>{value}</Text>
        </Button>
      );
    } else if (isHidden) {
      return (
        <Button full light>
          <Text>{value}</Text>
        </Button>
      );
    } else {
      return (
        <Button full info onPress={onButtonClick}>
          <Icon name="dog" />
        </Button>
      );
    }
  };

  return <>{getVisibleText()}</>;
};

export default Element;
