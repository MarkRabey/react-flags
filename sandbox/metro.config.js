const path = require('path');

const extraNodeModules = {
  '@markrabey/react-native-web-flags': path.resolve(
    path.join(__dirname, '/../packages/native'),
  ),
};

const watchFolders = [
  path.resolve(path.join(__dirname, '/../packages/native')),
  path.resolve(path.join(__dirname, '/../src')),
];

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  resolver: {
    extraNodeModules: new Proxy(extraNodeModules, {
      get: (target, name) =>
        name in target
          ? target[name]
          : path.join(process.cwd(), `node_modules/${name}`),
    }),
  },
  watchFolders,
};
