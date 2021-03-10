import React from "react";

export const gameTypeEnum = () => [
  {
    name: "Matrixsum",
    value: "matrixsum",
    description:
      "In MatrixSum type, Sum of row/column elements are derived as Clues.",
  },
];
export const gameCategoryEnum = () => [
  { name: "2 x 2", value: 2, description: "2 x 2 matrix" },
  { name: "3 x 3", value: 3, description: "3 x 3 matrix" },
  { name: "4 x 4", value: 4, description: "4 x 4 matrix" },
  { name: "5 x 5", value: 5, description: "5 x 5 matrix" },
];
export const gameLevelEnum = () => [
  { name: "Easy", value: 0.3, description: "Minimal hidden elements" },
  {
    name: "Moderate",
    value: 0.5,
    description: "Moderate hidden elements",
  },
  {
    name: "Difficult",
    value: 0.7,
    description: "Challenging hidden elements",
  },
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
