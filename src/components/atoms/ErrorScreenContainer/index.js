import React from "react";
import { View, TouchableOpacity, StatusBar } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { SafeAreaView } from "react-native-safe-area-context";
import { BackIcon } from "@assets/SVGs";
import { HIT_POINT, SCREEN_PADDING, verticalScale } from "@utils/scaling";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "src/styles/themes";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ErrorScreenContainer = ({ children, showBack }) => {
  const { styles } = useStyles(stylesheet);
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView
      style={[
        styles.container,
        { paddingTop: Platform.OS == "ios" ? verticalScale(insets.top) : verticalScale(15) },
      ]}
    >
      <View style={styles.container}>
        <StatusBar backgroundColor={COLORS.errorScreenBG} barStyle="light-content" />
        {showBack && (
          <TouchableOpacity
            hitSlop={HIT_POINT}
            style={styles.backButton}
            onPress={navigation?.goBack?.()}
          >
            <BackIcon white />
          </TouchableOpacity>
        )}
        {children}
      </View>
    </SafeAreaView>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    position: "relative",
    paddingHorizontal: SCREEN_PADDING,
  },
  backButton: {
    left: 10,
    top: 10,
    position: "absolute",
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.errorScreenBG,
  },
}));

export default ErrorScreenContainer;
