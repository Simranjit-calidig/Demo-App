export const COLORS = {
  appPrimary: "#C171EB",
  danger: "#dc3545",
  error: "#FB4D58",
  grey: "#B0B0B0",
  black: "#000000",
  white: "#ffffff",
  blue: "#001EB9",
  light: "#f8f9fa",
  textGray: "#878997",
  lightBlue: "#F1F5F9",
  inputBG: "rgba(118, 116, 116, 0.2)",
  inputBorderColor: "#767474",
  inputBorderColor2: "rgba(131, 129, 129, 0.40)",
  textGrey1: "#7F7F7F",
  textGrey2: "#A6A6A6",
  errorScreenBG: "#0f0f0f",
  borderColor: "#383838",
  darkBG: "#1E1E1E",
};

export const FONT_SIZE = {
  xsm: 12,
  sm: 14,
  sm2: 16,
  md: 18,
  lg: 20,
  lg2: 22,
  xl: 24,
};

export const MARGIN = {
  sm: 2,
  md: 4,
  lg: 8,
  xl: 12,
};

export const lightTheme = {
  colors: {
    ...COLORS,
    appPrimary: "#ba6de2",
    typography: "#000000",
    background: "#F7F5F5",
    barStyle: "dark-content",
    opacity50: "rgba(1,1,1,0.5)",
    textInputColor: "rgba(217, 217, 217,0.2)",
    placeholder: "rgba(1,1,1,0.52)",
    darkwhite: "#000000",
    buttonBg: "#f0f0f0",
    headerBG: "#f0f0f0",
    textColor: "#000000",
    dividerBorder: "#D5D5D5",
    inputText: "black",
    inputBG2: "#E9E8E8",
    avatarBg: "#FFFFFF",
  },
  margins: MARGIN,
  fontSize: FONT_SIZE,
};

export const darkTheme = {
  colors: {
    ...COLORS,
    appPrimary: "#C171EB",
    typography: "#ffffff",
    background: "#000000",
    barStyle: "light-content",
    opacity50: "rgba(201, 201, 201,0.5)",
    textInputColor: "#000000",
    placeholder: "#f8f9fa",
    darkwhite: "#ffffff",
    buttonBg: "#151416",
    headerBG: "#000000",
    textColor: "#ffffff",
    dividerBorder: "#535353",
    inputText: "#CFCFCF",
    inputBG2: "rgba(39, 39, 39, 0.4)",
    avatarBg: "#222222",
  },
  margins: MARGIN,
  fontSize: FONT_SIZE,
};