module.exports = {
  testEnvironment: 'node',
  roots: ['<rootDir>/__tests__'],
  testMatch: ['**/*.test.js'],
  // transform: {
  //   '^.+\\.tsx?$': 'ts-jest',
  // }
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
  verbose: true,
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  moduleDirectories: ["node_modules", "src"],
  preset: 'ts-jest',

};
