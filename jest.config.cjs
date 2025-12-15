/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest/presets/default-esm",
  testEnvironment: "node",
  transform: {
    "^.+\\.ts$": ["ts-jest", { useESM: true }],
  },
  extensionsToTreatAsEsm: [".ts"],
  transformIgnorePatterns: ["/node_modules/(?!(uuid)/)"],
  moduleNameMapper: {
    "^uuid$": "<rootDir>/__tests__/__mocks__/uuid.ts",
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
};
