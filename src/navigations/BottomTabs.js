import React, { useRef, useState } from "react";
import MainStack from "./MainStack";
import NAVIGATION from "./navigation";
import CustomTabBar from "./BottomTabBar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const BottomTabs = createBottomTabNavigator();

export default () => {
  const flatListRef = useRef(null);
  const [selectedTab, setSelectedTab] = useState("Feed");

  const scrollFeedToTop = () => {
    if (!!flatListRef?.current) {
      flatListRef?.current?.scrollToTop?.();
    }
  };

  return (
    <BottomTabs.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => {
        return (
          <CustomTabBar
            {...props}
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
            scrollFeedToTop={scrollFeedToTop}
          />
        );
      }}
    >
      <BottomTabs.Screen
        name={NAVIGATION.STACK.TAB}
        children={() => <MainStack flatListRef={flatListRef} />}
      />
    </BottomTabs.Navigator>
  );
};
