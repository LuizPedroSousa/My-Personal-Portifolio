module.exports = {
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: "coverage",
    coverageProvider: "v8",
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
    testPathIgnorePatterns: ['/node_modules/', '/.next/'],
    modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
    collectCoverageFrom: [
        'src/**/*.ts(x)?',
        '!src/**/stories.tsx',
        '!src/pages/**/*.tsx',
        '!src/styles/**/*.ts',
        '!src/types/**/*.d.ts',
        '!src/**/mock.ts'
    ],
    moduleNameMapper: {
        '^styled-components':
          '<rootDir>/node_modules/styled-components/dist/styled-components.browser.cjs.js'
    },
    testMatch: [
      "**/__tests__/**/*.[jt]s?(x)",
      "**/?(*.)+(test).[tj]s?(x)"
    ],

  };
