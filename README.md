# Vuepress Page Tree

This plugin creates a page tree, used to automatically populate navigation in default theme. You pass it the source directory (docs directory), and it gives you back a tree. It then provides a function to map the tree to the default theme (what the config needs).

Children are mapped to the sidebar, if you want different menu structure for the navbar or sidebar, create it using from the output of `createTree`. 

## Usage

```js

import { defineUserConfig } from "vuepress";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import { defaultTheme } from "@vuepress/theme-default";
import { createTree, toDefaultTheme } from "@ulu/vuepress-page-tree";

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

```