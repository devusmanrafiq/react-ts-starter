export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2, // Error level
      'always',
      [
        'feat', // A new feature
        'fix', // A bug fix
        'docs', // Documentation changes
        'style', // Code style changes
        'refactor', // Code restructuring without functional changes
        'perf', // Performance improvements
        'test', // Adding or fixing tests
        'build', // Build system changes
        'ci', // CI/CD configuration changes
        'chore', // Maintenance changes
        'revert', // Reverting commits
      ],
    ],
  },
};
