import React, { Fragment } from "react";
import { View, TouchableOpacity, ActivityIndicator } from "react-native";
import { TextContainer } from "@components/atoms";
import { COLORS } from "src/styles/themes";
import fontFamily from "@constants/fontFamily";
import { UnistylesRuntime, createStyleSheet, useStyles } from "react-native-unistyles";
import { moderateScale, verticalScale } from "@utils/scaling";

const RowButtons = ({
  onPress,
  title = "",
  active = false,
  isLoading = false,
  containerStyles = {},
}) => {
  const { styles, theme } = useStyles(stylesheet);
  const isDarkMode = UnistylesRuntime.themeName === "dark";

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[
        styles.container,
        containerStyles,
        {
          borderColor: active ? theme.colors.appPrimary : theme.colors.dividerBorder,
          backgroundColor: active ? theme.colors.appPrimary : theme.colors.interestCardBG,
        },
      ]}
      onPress={() => onPress(title)}
    >
      {isLoading ? (
        <ActivityIndicator
          size={"small"}
          style={styles.loading}
          color={active ? theme.colors.typography : theme.colors.appPrimary}
        />
      ) : (
        <TextContainer
          style={[
            styles.titleText,
            {
              color: active ? theme.colors.typography : theme.colors.interestCardTextColor,
            },
          ]}
          text={title}
        />
      )}
    </TouchableOpacity>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  container: {
    borderWidth: 1,
    borderRadius: 8,
    marginRight: moderateScale(7),
    marginBottom: verticalScale(7),
  },
  titleText: {
    fontSize: theme.fontSize.sm2,
    paddingVertical: verticalScale(8),
    paddingHorizontal: moderateScale(14),
    fontFamily: fontFamily.nunitoBold,
  },
  loading: {
    paddingVertical: verticalScale(8),
  },
}));

export default RowButtons;
