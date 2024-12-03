import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { COLORS } from "src/styles/themes";
import fontFamily from "@constants/fontFamily";
import { UnistylesRuntime, createStyleSheet, useStyles } from "react-native-unistyles";
import { moderateScale, verticalScale } from "@utils/scaling";

const GradientButton = ({
  title,
  onPress,
  borRad = null,
  isSolid = true,
  textStyle = {},
  compact = false,
  isLoading = false,
  isDisabled = false,
  containerStyle = {},
  overRideContainer = {},
}) => {
  const { styles, theme } = useStyles(stylesheet);
  const isDarkMode = UnistylesRuntime.themeName === "dark";

  const color = !isSolid ? COLORS.blue : theme.colors.textColor;
  const borderColor = isSolid ? "transparent" : color;
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
      style={containerStyle}
      onPress={isDisabled ? null : onPressHandler}
    >
      <LinearGradient
        end={{ x: 1, y: 0 }}
        start={{ x: 0, y: 1 }}
        colors={["#C171EB", "#FF8866"]}
        style={[styles.linearGradient, { borderRadius: !!borRad ? borRad : 100 }]}
      >
        <View
          style={[
            styles.container,
            {
              justifyContent: "center",
              borderColor,
              paddingVertical: compact ? 8 : 15,
              borderRadius: !!borRad ? 18 : 100,
            },
            overRideContainer,
          ]}
        >
          <Text style={[styles.labelText, { color: textColor }, textStyle]}>{title}</Text>
          <View style={[styles.loader, { opacity: isLoading ? 1 : 0 }]}>
            <ActivityIndicator color={theme.colors.appPrimary} />
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  container: {
    alignItems: "center",
    paddingHorizontal: verticalScale(20),
    backgroundColor: theme.colors.buttonBg,
  },
  linearGradient: {
    padding: moderateScale(2),
  },
  labelText: {
    fontSize: theme.fontSize.sm2,
    lineHeight: theme.fontSize.lg2,
    fontFamily: fontFamily.nunitoMedium,
  },
  loader: {
    alignSelf: "center",
    justifyContent: "center",
    ...StyleSheet.absoluteFillObject,
  },
}));

export default GradientButton;
