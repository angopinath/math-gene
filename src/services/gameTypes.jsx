import React from "react";

export const gameTypeEnum = () => [{ name: "Matrixsum", value: "matrixsum" }];
export const gameCategoryEnum = () => [
  { name: "2 x 2", value: 2 },
  { name: "3 x 3", value: 3 },
  { name: "4 x 4", value: 4 },
  { name: "5 x 5", value: 5 },
];
export const gameLevelEnum = () => [
  { name: "Easy", value: 0.3 },
  { name: "Moderate", value: 0.5 },
  { name: "Difficult", value: 0.7 },
];

export const getGameTypeNameByVal = (val) => {
  return gameTypeEnum.map((item) => item.value == val)["name"];
};
export const getGameCategoryNameByVal = (val) => {
  return gameCategoryEnum.map((item) => item.value == val)["name"];
};
export const getGameLevelNameByVal = (val) => {
  return gameLevelEnum.map((item) => item.value == val)["name"];
};
