import {UnistylesRegistry} from 'react-native-unistyles';
import breakpoints from './breakpoints';
import {lightTheme, darkTheme} from './themes';

UnistylesRegistry.addBreakpoints(breakpoints)
  .addThemes({
    light: lightTheme,
    dark: darkTheme,
  })
  .addConfig({
    adaptiveThemes: true,
  });
