import { verticalScale } from "@utils/scaling";
import { Platform, StyleSheet } from "react-native";

export const SharedStyles = StyleSheet.create({
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  allCenter: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
  },
  itemCenter: {
    alignItems: "center",
  },
  rowCenter: {
    alignItems: "center",
    flexDirection: "row",
  },
  allRowCenter: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  posRelative: {
    position: "relative",
  },
  itemCenterMarginBottom: {
    alignItems: "center",
    paddingTop: verticalScale(10),
    paddingBottom: verticalScale(20),
  },
  contentCenter: {
    justifyContent: "center",
  },
  fullFlex: {
    flex: 1,
  },
  shadow: {
    shadowColor: "black",
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.19,
  },
  shadowLight: {
    shadowColor: "black",
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.02,
  },
  errorMessage: {
    paddingTop: Platform.OS == "android" ? 50 : 50,
  },
});
