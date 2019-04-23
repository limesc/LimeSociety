const TEST_REGEX = '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|js?|tsx?|ts?)$'

module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  setupFiles: ['<rootDir>/jest.setup.js'],
  testRegex: TEST_REGEX,
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/docs/',
    '<rootDir>/node_modules/',
    '<rootDir>/static/'
  ],
  transform: {
    '^.+\\.tsx?$': 'babel-jest'
  }
}
