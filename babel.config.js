module.exports = {
  presets: ['@babel/preset-typescript'],
  plugins: [
    'transform-export-extensions',
    [
      '@babel/plugin-transform-typescript',
      {
        test: /\.ts$/,
      },
      'plugin-transform-ts',
    ],
  ],
};
