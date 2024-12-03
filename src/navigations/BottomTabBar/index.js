import React, { useCallback, Fragment, useState, useContext } from "react";
import { Platform, TouchableOpacity, View, Text, Pressable } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { tabHelper } from "./tabHelper";
import { moderateScale, verticalScale, scale } from "@utils/scaling";
import { UnistylesRuntime, createStyleSheet, useStyles } from "react-native-unistyles";
import NAVIGATION from "@navigations/navigation";
import { useSelector } from "react-redux";
import { Avatar } from "@components/atoms";
import { COLORS } from "src/styles/themes";
import { WebSocketContext } from "src/webSocket";

const CustomTabBar = ({ state, navigation, scrollFeedToTop, selectedTab, setSelectedTab }) => {
  const insets = useSafeAreaInsets();
  const { userData } = useSelector((state) => state.auth);
  const { styles, theme } = useStyles(stylesheet);
  const isDarkMode = UnistylesRuntime.themeName === "dark";
  const { newChatMsg, setNewChatMsg } = useContext(WebSocketContext);
  // const [selectedTab, setSelectedTab] = useState("Feed");
  const [feedTouchCount, setFeedTouchCount] = useState(0);

  const onPress = useCallback(
    (route, index) => {
      setSelectedTab(route?.title);
      if (route?.title !== "Feed") setFeedTouchCount(0);
      if (route?.title === "Feed") {
        setFeedTouchCount((prevCount) => prevCount + 1);
        if (feedTouchCount >= 1) {
          scrollFeedToTop?.();
        }
        navigation.navigate(NAVIGATION.ROUTES.ROUTE_HOME, {
          screen: NAVIGATION.STACK.TAB,
          params: { screen: NAVIGATION.HOME.USER_FEED_SCREEN },
        });
      } else if (route?.title === "Search") {
        navigation.navigate(NAVIGATION.ROUTES.ROUTE_HOME, {
          screen: NAVIGATION.STACK.TAB,
          params: { screen: NAVIGATION.SEARCH.SEARCH_SCREEN },
        });
      } else if (route?.title == "Chat") {
        if (newChatMsg) setNewChatMsg(false);
        navigation.navigate(route.route);
      } else {
        navigation.navigate(route.route);
      }
    },
    [navigation, feedTouchCount],
  );

  return (
    <Fragment>
      <View style={[styles.tabStyles]}>
        {tabHelper(isDarkMode).map((item, index) => {
          const Icon = item.Icon;
          return (
            <TouchableOpacity
              style={styles.tab}
              key={`${item.title}_${index}`}
              onPress={onPress.bind(this, item, index)}
            >
              {index === 4 ? (
                <Avatar
                  uri={userData?.profileInfo?.profile_picture_path}
                  imageStyles={{
                    width: scale(20),
                    height: scale(20),
                    borderRadius: 50,
                  }}
                />
              ) : (
                <Fragment>
                  {item?.title == "Chat" && newChatMsg && <View style={styles.indicator} />}
                  {Icon[selectedTab === item?.title ? "active" : "inActive"]}
                </Fragment>
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </Fragment>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  tabStyles: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: verticalScale(3),
    backgroundColor: theme.colors.headerBG,
    paddingBottom: Platform.OS === "ios" ? verticalScale(16) : verticalScale(18),
  },
  tab: {
    flex: 1,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  indicator: {
    zIndex: 10,
    width: scale(8),
    height: scale(8),
    position: "absolute",
    top: verticalScale(6),
    right: moderateScale(26),
    backgroundColor: COLORS.error,
    borderRadius: moderateScale(10),
  },
}));

export default CustomTabBar;
