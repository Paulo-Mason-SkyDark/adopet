/** @type {import('jest').Config} */

module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  globals: {
    "ts-jest": {
      tsconfig: "./tsconfig.test.json",
    },
  },
  setupFilesAfterEnv: ["./src/jest.setup.ts"],
};

const config = {
  verbose: true,
};

module.exports = config;
