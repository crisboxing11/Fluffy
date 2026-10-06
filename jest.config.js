module.exports = {
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: {
          esModuleInterop: true,
          strict: true,
          jsx: 'react',
          target: 'ES2017',
          module: 'commonjs',
        },
      },
    ],
  },
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
};
