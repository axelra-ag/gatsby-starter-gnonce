// In your routes configuration file
const path = require("path");

module.exports = [
  {
    path: "/",
    component: path.resolve(`src/containers/index.tsx`)
  }
];
