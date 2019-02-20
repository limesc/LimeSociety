const TEST_REGEX = '(/__tests__/.*|(\\.|/)(test|spec))\\.(ts?|js?|vue?)$'

module.exports = {
  moduleFileExtensions: ['ts', 'js', 'vue', 'json'],
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/$1'
  },
  setupFiles: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: [
    '<rootDir>/.nuxt/',
    '<rootDir>/dist/',
    '<rootDir>/node_modules/'
  ],
  testRegex: TEST_REGEX,
  transform: {
    '^.+\\.ts?$': 'ts-jest',
    '.*\\.(vue)$': 'vue-jest'
  }
}
