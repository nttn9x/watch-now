import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      exclude: [
        "**/node_modules/**",
        "**/dist/**",
        "**/cypress/**",
        "**/.{idea,git,cache,output,temp}/**",
        "**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*",
      ],
      coverage: {
        exclude: [
          "**/models/**",
          "**/stories/**",
          "**/.storybook/**",
          "**/.eslintrc.cjs",
          "**/vite-env.d.ts",
          "**/postcss.config.js",
          "**/tailwind.config.js",
        ],
      },
    },
  })
);
