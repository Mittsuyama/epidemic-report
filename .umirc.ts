import { defineConfig } from 'umi';

export default defineConfig({
  base: '/epidemic/',
  publicPath: '/epidemic/',
  dva: {
    immer: true,
  },
});
