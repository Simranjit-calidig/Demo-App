import React from "react";
import { View } from "react-native";
import { TextContainer } from "@components/atoms";
import { moderateScale, verticalScale, scale } from "@utils/scaling";
import { UnistylesRuntime, createStyleSheet, useStyles } from "react-native-unistyles";
import { ErrorIcon } from "@assets/SVGs";
import { COLORS } from "src/styles/themes";

const stylesheet = createStyleSheet((theme) => ({
  btnStyle: (isDarkMode) => ({
    backgroundColor: isDarkMode ? theme.colors.white : theme.colors.black,
  }),
  errorContainer: {
    marginTop: verticalScale(3),
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: scale(5),
  },
  errorText: {
    maxWidth: "95%",
    color: COLORS.error,
    fontSize: theme.fontSize.sm,
    marginLeft: moderateScale(7),
  },
}));

const InputError = ({ error }) => {
  const { styles, theme } = useStyles(stylesheet);
  const isDarkMode = UnistylesRuntime.themeName === "dark";

  if (!error) return null;

  return (
    <View style={styles.errorContainer}>
      <ErrorIcon />
      <TextContainer style={styles.errorText} text={error || "Required"} />
    </View>
  );
};

export default React.memo(InputError);
