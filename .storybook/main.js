const path = require("path");
const toPath = (_path) => path.join(process.cwd(), _path);
module.exports = {
  "stories": ['../src/components/**/stories.tsx'],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`)
    return {
        ...config,
        resolve: {
          ...config.resolve,
          alias: {
            ...config.resolve.alias,
            "@emotion/core": toPath("node_modules/@emotion/react"),
            "emotion-theming": toPath("node_modules/@emotion/react"),
          },
        },
      };
  }
}