// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import React from 'react';

export async function getRoutes() {
  const routes = {"404":{"id":"404","path":"*","parentId":"DocLayout"},"dumi-context-layout":{"id":"dumi-context-layout","path":"/","isLayout":true},"DocLayout":{"id":"DocLayout","path":"/","parentId":"dumi-context-layout","isLayout":true},"docs/guide/getting-started":{"path":"guide/getting-started","id":"docs/guide/getting-started","parentId":"DocLayout"},"docs/index":{"path":"","id":"docs/index","parentId":"DocLayout"},"demo-render":{"id":"demo-render","path":"~demos/:id","parentId":"dumi-context-layout"}} as const;
  return {
    routes,
    routeComponents: {
'404': React.lazy(() => import(/* webpackChunkName: "nm__dumi__dist__client__pages__404" */'C:/Users/arvin/Desktop/project/node_modules/dumi/dist/client/pages/404.js')),
'dumi-context-layout': React.lazy(() => import(/* webpackChunkName: "dumi__tmp__dumi__theme__ContextWrapper" */'C:/Users/arvin/Desktop/project/.dumi/tmp/dumi/theme/ContextWrapper')),
'DocLayout': React.lazy(() => import(/* webpackChunkName: "nm__dumi__theme-default__layouts__DocLayout__index" */'C:/Users/arvin/Desktop/project/node_modules/dumi/theme-default/layouts/DocLayout/index.js')),
'docs/guide/getting-started': React.lazy(() => import(/* webpackChunkName: "docs__guide__getting-started.md" */'C:/Users/arvin/Desktop/project/docs/guide/getting-started.md')),
'docs/index': React.lazy(() => import(/* webpackChunkName: "docs__index.md" */'C:/Users/arvin/Desktop/project/docs/index.md')),
'demo-render': React.lazy(() => import(/* webpackChunkName: "nm__dumi__dist__client__pages__Demo__index" */'C:/Users/arvin/Desktop/project/node_modules/dumi/dist/client/pages/Demo/index.js')),
},
  };
}
