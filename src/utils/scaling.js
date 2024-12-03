import { UnistylesRuntime } from "react-native-unistyles";

export const { width, height } = UnistylesRuntime.screen;

// Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = (size) => (width / guidelineBaseWidth) * size;
const verticalScale = (size) => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor;

const SCREEN_PADDING = 20;

const HIT_POINT = { top: 10, left: 10, right: 10 };

export { moderateScale, scale, verticalScale, SCREEN_PADDING, HIT_POINT };
