import { defineConfig } from 'umi';

export default defineConfig({
  publicPath: './',
  dva: {
    immer: true,
  },
});
