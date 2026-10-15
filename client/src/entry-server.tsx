import { renderToString } from "react-dom/server";
import App from "./App";
import { getPageMeta, notFoundMeta, pages, renderHead } from "./lib/seo";

export { pages, notFoundMeta };

/** Renders one route to static HTML plus its <head> tags. Used only at build time. */
export function render(path: string) {
  const meta = path === notFoundMeta.path ? notFoundMeta : getPageMeta(path);
  return {
    html: renderToString(<App ssrPath={path} />),
    head: renderHead(meta),
  };
}
