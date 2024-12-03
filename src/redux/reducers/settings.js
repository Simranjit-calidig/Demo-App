import { createSlice } from "@reduxjs/toolkit";

const supportedLanguages = [
  { name: "English", sortName: "en" },
  { name: "Arabic", sortName: "ar" },
  { name: "French", sortName: "fr" },
];

const initialState = {
  languages: supportedLanguages,
  defaultLanguage: supportedLanguages[0],
  defaultTheme: { myTheme: "light" },
};

const settingSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    saveDefaultLanguage: (state, action) => {
      const languageExists = state.languages.some(
        (lang) => lang.sortName === action.payload.sortName,
      );
      if (languageExists) {
        state.defaultLanguage = action.payload;
      } else {
        console.error("Language not found in the list.");
      }
    },
    saveDefaultTheme: (state, action) => {
      state.defaultTheme = action.payload;
    },
  },
});

export const { saveDefaultLanguage, saveDefaultTheme } = settingSlice.actions;

export default settingSlice.reducer;
