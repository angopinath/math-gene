import { Platform } from "react-native";
import Constants from "expo-constants";
import { AdMobRewarded, AdMobInterstitial } from "expo-ads-admob";

// banner ad section
const bannerAdTestId = Platform.select({
  ios: "ca-app-pub-3940256099942544/2934735716",
  android: "ca-app-pub-3940256099942544/6300978111",
});

const bannerAdProdId = Platform.select({
  ios: "ca-app-pub-6608023280307674/4420885109",
  android: "ca-app-pub-6608023280307674/6484490406",
});

export const bannerAdId =
  Constants.isDevice && !__DEV__ ? bannerAdProdId : bannerAdTestId;

//reward add section
const rewardAdTestId = Platform.select({
  ios: "ca-app-pub-3940256099942544/1712485313",
  android: "ca-app-pub-3940256099942544/5224354917",
});

const rewardAdProdId = Platform.select({
  ios: "ca-app-pub-6608023280307674/5909775337",
  android: "ca-app-pub-6608023280307674/1232163720",
});

export const rewardAdId =
  Constants.isDevice && !__DEV__ ? rewardAdProdId : rewardAdTestId;

export const showRewardAd = async () => {
  await AdMobRewarded.setAdUnitID(rewardAdId);
  await AdMobRewarded.requestAdAsync();
  await AdMobRewarded.showAdAsync();
};

// image add section

const imageAdTestId = Platform.select({
  ios: "ca-app-pub-3940256099942544/4411468910",
  android: "ca-app-pub-3940256099942544/1033173712",
});

const imageAdProdId = Platform.select({
  ios: "ca-app-pub-6608023280307674/2765086299",
  android: "ca-app-pub-6608023280307674/8558121416",
});

export const imageAdId =
  Constants.isDevice && !__DEV__ ? imageAdProdId : imageAdTestId;

export const showImageAd = async () => {
  await AdMobInterstitial.setAdUnitID(imageAdId);
  await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true });
  await AdMobInterstitial.showAdAsync();
};
