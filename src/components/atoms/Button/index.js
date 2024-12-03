import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from "react-native";
import { COLORS } from "src/styles/themes";
import fontFamily from "@constants/fontFamily";
import { UnistylesRuntime, createStyleSheet, useStyles } from "react-native-unistyles";
import { moderateScale, verticalScale } from "@utils/scaling";

const Button = ({
  title,
  onPress,
  isSolid = true,
  containerStyle,
  textStyle = {},
  compact = false,
  isLoading = false,
  isDisabled = false,
}) => {
  const { styles, theme } = useStyles(stylesheet);
  const isDarkMode = UnistylesRuntime.themeName === "dark";

  const color = !isSolid ? COLORS.blue : isDisabled ? theme.colors.typography : COLORS.white;
  const textColor = isLoading ? "transparent" : color;

  const onPressHandler = () => {
    if (isDisabled || isLoading) {
      return;
    }
    onPress?.();
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={isDisabled ? null : onPressHandler}
      style={[containerStyle, { opacity: isDisabled ? 0.2 : 1, borderRadius: 100 }]}
    >
      <View
        style={[
          styles.container,
          {
            paddingVertical: compact ? verticalScale(8) : verticalScale(13),
          },
        ]}
      >
        <Text style={[styles.labelText, { color: textColor }, textStyle]}>{title}</Text>
        <View style={[styles.loader, { opacity: isLoading ? 1 : 0 }]}>
          <ActivityIndicator color={COLORS.white} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  container: {
    borderRadius: 100,
    alignItems: "center",
    paddingHorizontal: moderateScale(40),
    backgroundColor: theme.colors.appPrimary,
  },
  linearGradient: {
    padding: moderateScale(2),
  },
  labelText: {
    fontSize: theme.fontSize.sm2,
    lineHeight: theme.fontSize.lg2,
    fontFamily: fontFamily.nunitoBold,
  },
  loader: {
    alignSelf: "center",
    justifyContent: "center",
    ...StyleSheet.absoluteFillObject,
  },
}));

export default Button;
