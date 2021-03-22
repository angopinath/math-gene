import React from "react";
import {
  Layout,
  Modal,
  Text,
  Icon,
  Button,
  ButtonGroup,
} from "@ui-kitten/components";
import AppStyle from "../style/AppStyle";
import { useEffect, useState } from "react";

const styles = {
  info: {
    color: "#0057C2",
    backgroundColor: "#F2F8FF",
    borderColor: "#0057C2",
    icon: "alert-circle",
  },
  danger: {
    color: "#DB2C66",
    backgroundColor: "#FFA8B4",
    borderColor: "#DB2C66",
    icon: "close-circle",
  },
  success: {
    color: "#0057C2",
    backgroundColor: "#F2F8FF",
    borderColor: "#0057C2",
    icon: "smiling-face",
  },
  question: {
    color: "#0057C2",
    backgroundColor: "#F2F8FF",
    borderColor: "#0057C2",
    icon: "question-mark-circle",
    yesText: "Yes!",
    noText: "No..",
  },
};

export const PopupModel = (props) => {
  const { type, msg, yesCallBack, noCallBack } = props.data;
  const style = styles[type || "info"];

  return (
    <React.Fragment>
      <Modal
        visible={props.visible}
        style={AppStyle.model_model}
        backdropStyle={AppStyle.model_backdrop}
      >
        <Layout
          style={[
            AppStyle.model_layout,
            {
              backgroundColor: style.backgroundColor,
              borderColor: style.borderColor,
            },
          ]}
        >
          <Icon
            name={style.icon}
            fill={style.color}
            style={[AppStyle.model_icon]}
          />
          <Text category="h2" style={{ color: style.color }}>
            {msg.header}
          </Text>
          <Text category="h6" style={{ color: style.color }}>
            {msg.txt}
          </Text>
          {style == styles.question && (
            <Layout
              style={
                ([AppStyle.layoutBackground],
                {
                  flexDirection: "row",
                  justifyContent: "space-between",
                })
              }
            >
              <Button
                appearance="filled"
                status="info"
                onPress={() => yesCallBack()}
                style={{ marginRight: 10 }}
              >
                {style.yesText}
              </Button>
              <Button
                appearance="outline"
                status="danger"
                onPress={() => noCallBack()}
              >
                {style.noText}
              </Button>
            </Layout>
          )}
        </Layout>
      </Modal>
    </React.Fragment>
  );
};
