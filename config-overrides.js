const { injectBabelPlugin } = require("react-app-rewired");
const rewireMobX = require("react-app-rewire-mobx");

// By exporting this function we can override webpack settings
// Which come from create-react-app... and we can modify them by
// Adding additional Babel plugins such as support for decorators
// Which are used in MobX or a babel plugin for styled components.
module.exports = function override(config, env) {
  config = injectBabelPlugin("babel-plugin-styled-components", config);
  config = rewireMobX(config, env);

  return config;
};
