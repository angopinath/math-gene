import React from "react";
import { Icon, Layout } from "@ui-kitten/components";
import { AdMobRewarded } from "expo-ads-admob";
import { rewardAdId } from "../services/AdService";

import AppStyle from "../style/AppStyle";

const Life = (props) => {
  const DEFAULT_LIFE_COUNT = 3;
  const { life, lifeCallBack } = props;

  const showRewardAd = async () => {
    await AdMobRewarded.setAdUnitID(rewardAdId);
    await AdMobRewarded.addEventListener("rewardedVideoDidClose", () => {
      lifeCallBack();
    });
    await AdMobRewarded.requestAdAsync();
    await AdMobRewarded.showAdAsync();
  };
  return (
    <>
      {
        <Layout style={[AppStyle.layoutBackground, AppStyle.gameHeartLayout]}>
          {Array(life)
            .fill(0)
            .map((i, index) => {
              return (
                <Icon
                  style={AppStyle.gameHeart}
                  key={index}
                  fill="#FF3D71"
                  name="heart"
                />
              );
            })}
          {DEFAULT_LIFE_COUNT > life && (
            <Icon
              style={AppStyle.gameHeart}
              fill="#FFF"
              name="plus-square-outline"
              onPress={() => {
                showRewardAd();
              }}
            />
          )}
        </Layout>
      }
    </>
  );
};

export default Life;
