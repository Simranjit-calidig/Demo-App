import { StyleSheet } from "react-native";

export default StyleSheet.create({
  modal: {
    alignItems: "center",
    justifyContent: "center",
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(15, 15, 15, 0.5)",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
