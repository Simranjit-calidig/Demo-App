import React from "react";
import { View } from "react-native";
import { COLORS } from "src/styles/themes";
import { UnistylesRuntime, createStyleSheet, useStyles } from "react-native-unistyles";

const Divider = ({ containerStyles }) => {
  const { styles, theme } = useStyles(stylesheet);

  return <View style={[styles.container, containerStyles]} />;
};

const stylesheet = createStyleSheet((theme) => ({
  container: {
    height: 0.5,
    opacity: 0.5,
    borderRadius: 50,
    backgroundColor: theme.colors.dividerBorder,
  },
}));

export default Divider;
