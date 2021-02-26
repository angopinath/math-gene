import { StyleSheet } from "react-native";

const AppStyle = StyleSheet.create({
  logoStyle: {
    height: 100,
    width: 100,
    justifyContent: "center",
  },
  logoLayout: {
    alignItems: "center",
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
  },
});

export default AppStyle;
