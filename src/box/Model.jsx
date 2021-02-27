import React from "react";
import { Layout, Modal, Text, Icon } from "@ui-kitten/components";
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
};

export const PopupModel = (props) => {
  const { type, msg, backtrop } = props.data;
  const style = styles[type || "info"];

  return (
    <React.Fragment>
      <Modal
        visible={props.visible}
        style={AppStyle.model_model}
        backdropStyle={backtrop && AppStyle.model_backdrop}
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
        </Layout>
      </Modal>
    </React.Fragment>
  );
};
