/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

const watchFolders = [path.resolve(path.join(__dirname, '/../src'))];

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  watchFolders,
};
