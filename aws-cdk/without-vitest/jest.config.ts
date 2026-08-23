import { defineConfig } from 'jest';

export default defineConfig({
  transform: {
    '\\.[jt]s?$': '@swc/jest',
  },
});
