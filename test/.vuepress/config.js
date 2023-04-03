import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import { createTree, toDefaultTheme } from "../../index.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

const tree = createTree({
  source: resolve(__dirname, "../")
});

export default defineUserConfig({
  lang: "en-US",
  title: "Test",
  description: "Test",
  theme: defaultTheme({
    ...toDefaultTheme(tree)
  })
});