import React, { Fragment } from "react";
import { View, ActivityIndicator } from "react-native";
import { TextContainer } from "@components/atoms";
import { COLORS } from "src/styles/themes";
import { UnistylesRuntime, createStyleSheet, useStyles } from "react-native-unistyles";
import { moderateScale, verticalScale } from "@utils/scaling";

const RowButtons = ({ loading, noMoreData, isMoreLoading }) => {
  const { styles, theme } = useStyles(stylesheet);
  const isDarkMode = UnistylesRuntime.themeName === "dark";

  if (loading) {
    return <ActivityIndicator color={theme.colors.appPrimary} style={styles.activityIndicator} />;
  } else if (isMoreLoading) {
    return <TextContainer style={styles.loadMore} text=" Loading more..." />;
  } else if (noMoreData) {
    return <TextContainer style={styles.noMoreData} text="No more data to load" />;
  } else {
    return null;
  }
};

const stylesheet = createStyleSheet((theme) => ({
  activityIndicator: {
    marginVertical: verticalScale(20),
  },
  loadMore: {
    textAlign: "center",
    fontSize: theme.fontSize.xsm,
    color: theme.colors.typography,
    marginVertical: verticalScale(10),
  },
  noMoreData: {
    textAlign: "center",
    fontSize: theme.fontSize.xsm,
    color: theme.colors.typography,
    marginVertical: verticalScale(10),
  },
}));

export default RowButtons;
