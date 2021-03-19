import React from "react";
import { Platform } from "react-native";
import Constants from "expo-constants";

// clue ad section
const clueAdTestId = Platform.select({
  ios: "ca-app-pub-3940256099942544/2934735716",
  android: "ca-app-pub-3940256099942544/6300978111",
});

const clueAdProdId = Platform.select({
  ios: "ca-app-pub-6608023280307674/4420885109",
  android: "ca-app-pub-6608023280307674/6484490406",
});

export const clueAdId =
  Constants.isDevice && !__DEV__ ? clueAdProdId : clueAdTestId;

//next-level add section
const nextLevelAdTestId = Platform.select({
  ios: "ca-app-pub-3940256099942544/1712485313",
  android: "ca-app-pub-3940256099942544/5224354917",
});

const nextLevelAdProdId = Platform.select({
  ios: "ca-app-pub-6608023280307674/5909775337",
  android: "ca-app-pub-6608023280307674/1232163720",
});

export const nextLevelAdId =
  Constants.isDevice && !__DEV__ ? nextLevelAdProdId : nextLevelAdTestId;
