/* eslint-disable no-undef */
module.exports = {
  extends: ["next/core-web-vitals", "next/typescript"],
  plugins: ["boundaries"],
  settings: {
    "boundaries/include": ["**/*"],
    "boundaries/elements": [
      {
        mode: "full",
        type: "shared",
        pattern: [
          "app/**/*",
          "assets/**/*",
          "cache/**/*",
          "components/**/*",
          "constants/**/*",
          "data/**/*",
          "hooks/**/*",
          "scripts/**/*",
          "utils/**/*",
        ],
      },
      {
        mode: "full",
        type: "feature",
        capture: ["featureName"],
        pattern: ["features/*/**/*"],
      },
      {
        mode: "full",
        type: "app",
        capture: ["_", "fileName"],
        pattern: ["app/**/*"],
      },
      {
        mode: "full",
        type: "neverImport",
        pattern: ["*", "cantthinkofanythingrightnow/**/*"],
      },
    ],
  },
  rules: {
    "boundaries/no-unknown": ["error"],
    "boundaries/no-unknown-files": ["error"],
    "boundaries/element-types": [
      "error",
      {
        default: "disallow",
        rules: [
          {
            from: ["shared"],
            allow: ["shared"],
          },
          {
            from: ["feature"],
            allow: [
              "shared",
              ["feature", { featureName: "${from.featureName}" }],
            ],
          },
          {
            from: ["app", "neverImport"],
            allow: ["shared", "feature"],
          },
          {
            from: ["app"],
            allow: [["app", { fileName: "*.css" }]],
          },
        ],
      },
    ],
  },
};
