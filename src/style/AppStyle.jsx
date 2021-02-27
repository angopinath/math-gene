import { StyleSheet } from "react-native";

const AppStyle = StyleSheet.create({
  background: {
    flex: 1,
    alignSelf: "stretch",
    width: null,
    resizeMode: "stretch",
    height: null,
  },
  logoStyle: {
    height: 100,
    width: 100,
    justifyContent: "center",
  },
  logoLayout: {
    alignItems: "center",
  },
  headerText: {
    color: "white",
  },
  layoutBackground: {
    backgroundColor: "transparent",
  },
  pageLayout: {
    flex: 1,
    justifyContent: "space-evenly",
    margin: 10,
  },
  buttonLayout: {
    borderRadius: 0,
    margin: 1,
    borderWidth: 3,
    borderColor: "white",
  },
  gameHeartLayout: {
    flexDirection: "row",
  },
  gameHeart: {
    height: 30,
    width: 30,
    flex: 1,
  },
  model_backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  model_model: {
    margin: 10,
    width: "70%",
  },
  model_layout: {
    padding: 10,
    width: "100%",
    flex: 1,
    //justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
  },
  model_icon: {
    width: 300,
    height: 100,
    color: "black",
  },
});

export default AppStyle;
