import React from "react";
import { Button, Layout, Text } from "@ui-kitten/components";
import { LinearGradient } from "expo-linear-gradient";
import {AdMobBanner, AdMobInterstitial, AdMobRewarded, PublisherBanner} from "expo-ads-admob"

import AppStyle from "../style/AppStyle";
import { gameLevelEnum } from "../services/gameTypes";
import { Image } from "react-native";

export default function AdScreen({ route, navigation }) {
  
  const interstitial = async () => {
    await AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/1033173712'); // Test ID, Replace with your-admob-unit-id
    await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true});
    await AdMobInterstitial.showAdAsync();

  }
  const reward = async () => {
    await AdMobRewarded.setAdUnitID('ca-app-pub-3940256099942544/5224354917'); // Test ID, Replace with your-admob-unit-id
await AdMobRewarded.requestAdAsync();
await AdMobRewarded.showAdAsync();
  }
  return (
    <React.Fragment>
      <LinearGradient
        colors={["#206AFF", "#BE26FF"]}
        style={AppStyle.background}
        locations={[0.1, 0.84]}
      >
        <Layout style={[AppStyle.layoutBackground, AppStyle.pageLayout]}>
          
        
         
        </Layout>
        <AdMobBanner
  bannerSize="fullBanner"
  adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
  servePersonalizedAds="false"// true or false
  onDidFailToReceiveAdWithError={()=>{console.log('error loading ad')}} />
  <PublisherBanner
  bannerSize="fullBanner"
  adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
  onDidFailToReceiveAdWithError={()=>{console.log('error loading ad')}}
  onAdMobDispatchAppEvent={()=>{console.log('error loading ad')}} />
  
      </LinearGradient>
      {reward()}
    </React.Fragment>
  );
}
