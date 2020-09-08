module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.js', '.ts', '.tsx', '.ios.js', '.android.js'],
        alias: {
          '@src': './src',
          '@components': './src/components',
        },
      },
    ],
  ],
};
