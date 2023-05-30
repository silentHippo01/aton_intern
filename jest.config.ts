import path from "path";

export default {
  globals: {
    __IS_DEV__: true,
    __API__: '',
    __PROJECT__: 'jest',
  },
  clearMocks: true,
  testEnvironment: "jest-environment-jsdom",
  coveragePathIgnorePatterns: [
    "\\\\node_modules\\\\"
  ],
  
  moduleDirectories: [
    "node_modules"
  ],
  modulePaths: [
    '<rootDir>src',
  ],
  testMatch: [
    // "**/__tests__/**/*.[jt]s?(x)",
    // '<rootDir>src/**/(*.)@(spec|test).[tj]s?(x)',
    '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'
  ],
  rootDir: '../../',
  setupFilesAfterEnv: ['<rootDir>setupTests.ts'],
  moduleNameMapper: {
    '\\.(scss)$': 'identity-obj-proxy',
    '\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
  }
}