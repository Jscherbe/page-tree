/**
 * Converts page tree for use in default theme
 */
export function toDefaultTheme(tree) {
  const navbar = tree.map(item => {
    const newItem = { ...item };
    delete newItem.children;
    return newItem;
  });
  const sidebar = tree.reduce((acc, item) => {
    const { text, children } = item;
    if (item?.children?.length) {
      acc[item.link] = [{ text, children }];
    }
    return acc;
  }, {});

  return { navbar, sidebar };
}