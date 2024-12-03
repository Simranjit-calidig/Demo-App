import React from "react";
import { View, Platform, TouchableOpacity } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { HIT_POINT, SCREEN_PADDING, moderateScale, verticalScale, width } from "@utils/scaling";
import { COLORS } from "src/styles/themes";
import { WhatHoobahoo } from "@assets/SVGs";
import TextContainer from "../TextContainer";
import fontFamily from "@constants/fontFamily";
import { ChevronRight, X } from "lucide-react-native";

const CustomToast = ({
  message = "",
  onClose = () => {},
  withCloseIcon = true,
  onSuccess = () => {},
}) => {
  const { styles } = useStyles(stylesheet);
  return (
    <View style={styles.container}>
      <WhatHoobahoo small color={COLORS.black} />
      <TextContainer style={styles.messageText} text={message || ""} />
      <TouchableOpacity activeOpacity={0.7} style={styles.rightIcon} onPress={onSuccess}>
        <ChevronRight size={moderateScale(25)} color={COLORS.white} />
      </TouchableOpacity>
      {withCloseIcon && (
        <TouchableOpacity
          onPress={onClose}
          activeOpacity={0.7}
          hitSlop={HIT_POINT}
          style={styles.closeIcon}
        >
          <X size={moderateScale(16)} color={COLORS.white} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  container: {
    bottom: 25,
    position: "absolute",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: moderateScale(20),
    width: width - SCREEN_PADDING * 2,
    paddingVertical: verticalScale(10),
    paddingHorizontal: moderateScale(15),
    backgroundColor: theme.colors.userFeedToastBG,
  },
  messageText: {
    flex: 1,
    color: COLORS.black,
    fontSize: theme.fontSize.sm2,
    paddingLeft: moderateScale(10),
    fontFamily: fontFamily.nunitoBold,
  },
  rightIcon: {
    width: 46,
    height: 46,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.appPrimary,
  },
  closeIcon: {
    right: 5,
    top: -12,
    width: 25,
    height: 25,
    borderWidth: 1,
    borderRadius: 100,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.black,
    borderColor: COLORS.inputBorderColor2,
  },
}));

export default CustomToast;
