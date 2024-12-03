module.exports = function (api) {
  api.cache(true);

  return {
    presets: ['module:@react-native/babel-preset'],
    plugins: [
      // 'react-native-unistyles/plugin',
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          extensions: [
            '.ios.js',
            '.android.js',
            '.ios.jsx',
            '.android.jsx',
            '.js',
            '.jsx',
            '.json',
            '.ts',
            '.tsx',
          ],
          root: ['.'],
          alias: {
            '@api': './src/api',
            '@assets': './src/assets',
            '@components': './src/components',
            '@screens': './src/screens',
            '@services': './src/services',
            '@utils': './src/utils',
            '@redux': './src/redux',
            '@constants': './src/constants',
            '@navigations': './src/navigations',
            '@hooks': './src/hooks',
            '@models': './src/models',
          },
        },
      ],
    ],
  };
};
