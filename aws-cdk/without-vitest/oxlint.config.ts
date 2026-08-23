// oxlint.config.ts
import { defineConfig } from 'oxlint';
import cdkPlugin from 'oxlint-plugin-awscdk';

export default defineConfig({
  extends: [
    // ✅ Add plugins
    cdkPlugin.configs.recommended, // or cdkPlugin.configs.strict
  ],
  rules: {
    // ✅ Add rules (use custom rules)
    'awscdk/require-jsdoc': 'warn',

    'jest/no-focused-tests': 'warn',
  },
});
