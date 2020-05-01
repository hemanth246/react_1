const path = require("path");
const baseWebpackConfig = require("../webpack.config");

module.exports = baseWebpackConfig(path.join(__dirname, "src"));
