module.exports = {
  "extends": "airbnb",
  "rules": {
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [
          ".js",
          ".jsx",
        ],
      },
    ],
    "indent": [
      "error",
      2,
    ],
    "object-curly-spacing": [
      "error",
      "always",
      {
        "arraysInObjects": false,
        "objectsInObjects": false,
      },
    ],
  },
  "env": {
    "browser": true,
  },
};
