export const getTypingSpeedBasedOnLen = length => {
  if (length < 80) return 250;
  else if (length > 80) return 100;
  else if (length > 200) return 50;
};
