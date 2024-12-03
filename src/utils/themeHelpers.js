import { UnistylesRuntime } from "react-native-unistyles";
import { setItem } from "src/services/apiService";

const changeTheme = (mode) => {
  setItem("defaultTheme", { myTheme: mode });
  UnistylesRuntime.setTheme(mode);
};
export default changeTheme;
