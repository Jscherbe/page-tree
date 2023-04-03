import dirTree from "directory-tree";
import { defaults, parserDefaults } from "./defaults.js";
import converter from "./converter.js";

export function createTree(userOptions) {
  const options = Object.assign({}, defaults, userOptions);
  const parserOptions = Object.assign({}, parserDefaults, options.parser);
  const { source } = options;
  
  if (!source) {
    console.error("Tree Plugin: No 'source' directory passed to get pages from");
    return;
  }
  const tree = dirTree(source, parserOptions);

  if (!tree || !tree.children.length) {
    console.error(`No pages found in: ${ source }`)
  }
  
  return converter(tree, options);
}