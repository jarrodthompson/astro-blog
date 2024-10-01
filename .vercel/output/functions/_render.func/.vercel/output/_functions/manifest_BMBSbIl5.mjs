import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_DR73Dyj5.mjs';
import { e as decodeKey } from './chunks/astro/server_DQxrpetD.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/jhhth/OneDrive/Desktop/astro-blog/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about._1iXKnQE.css"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about._1iXKnQE.css"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about._1iXKnQE.css"}],"routeData":{"route":"/articles/search","isIndex":false,"type":"page","pattern":"^\\/articles\\/search\\/?$","segments":[[{"content":"articles","dynamic":false,"spread":false}],[{"content":"search","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/articles/search.astro","pathname":"/articles/search","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about._1iXKnQE.css"}],"routeData":{"route":"/articles/tag/[...tag]","isIndex":false,"type":"page","pattern":"^\\/articles\\/tag(?:\\/(.*?))?\\/?$","segments":[[{"content":"articles","dynamic":false,"spread":false}],[{"content":"tag","dynamic":false,"spread":false}],[{"content":"...tag","dynamic":true,"spread":true}]],"params":["...tag"],"component":"src/pages/articles/tag/[...tag].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about._1iXKnQE.css"}],"routeData":{"route":"/articles","isIndex":true,"type":"page","pattern":"^\\/articles\\/?$","segments":[[{"content":"articles","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/articles/index.astro","pathname":"/articles","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about._1iXKnQE.css"},{"type":"inline","content":"p{margin:20px 0}h2{margin:20px 0;font-size:1.8rem}\n"}],"routeData":{"route":"/articles/[...slug]","isIndex":false,"type":"page","pattern":"^\\/articles(?:\\/(.*?))?\\/?$","segments":[[{"content":"articles","dynamic":false,"spread":false}],[{"content":"...slug","dynamic":true,"spread":true}]],"params":["...slug"],"component":"src/pages/articles/[...slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about._1iXKnQE.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["C:/Users/jhhth/OneDrive/Desktop/astro-blog/src/components/Footer.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/jhhth/OneDrive/Desktop/astro-blog/src/layouts/MainLayout.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/jhhth/OneDrive/Desktop/astro-blog/src/pages/404.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/404@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["C:/Users/jhhth/OneDrive/Desktop/astro-blog/src/pages/about.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/about@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/jhhth/OneDrive/Desktop/astro-blog/src/pages/articles/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/articles/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/jhhth/OneDrive/Desktop/astro-blog/src/pages/articles/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/articles/index@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/jhhth/OneDrive/Desktop/astro-blog/src/pages/articles/search.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/articles/search@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/jhhth/OneDrive/Desktop/astro-blog/src/pages/articles/tag/[...tag].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/articles/tag/[...tag]@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/jhhth/OneDrive/Desktop/astro-blog/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/articles/search@_@astro":"pages/articles/search.astro.mjs","\u0000@astro-page:src/pages/articles/tag/[...tag]@_@astro":"pages/articles/tag/_---tag_.astro.mjs","\u0000@astro-page:src/pages/articles/[...slug]@_@astro":"pages/articles/_---slug_.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/articles/index@_@astro":"pages/articles.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","C:/Users/jhhth/OneDrive/Desktop/astro-blog/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","C:/Users/jhhth/OneDrive/Desktop/astro-blog/src/content/blog/best-forex-trading-strategies-for-beginners.md?astroContentCollectionEntry=true":"chunks/best-forex-trading-strategies-for-beginners_O_ASQEMv.mjs","C:/Users/jhhth/OneDrive/Desktop/astro-blog/src/content/blog/best-laptops-for-developers.md?astroContentCollectionEntry=true":"chunks/best-laptops-for-developers_BqMjhO7r.mjs","C:/Users/jhhth/OneDrive/Desktop/astro-blog/src/content/blog/best-trading-bots-for-forex-trading.md?astroContentCollectionEntry=true":"chunks/best-trading-bots-for-forex-trading_NY4kz9dB.mjs","C:/Users/jhhth/OneDrive/Desktop/astro-blog/src/content/blog/best-ways-to-minimize-risk-in-forex-trading.md?astroContentCollectionEntry=true":"chunks/best-ways-to-minimize-risk-in-forex-trading_ChiroevS.mjs","C:/Users/jhhth/OneDrive/Desktop/astro-blog/src/content/blog/immerse-in-the-virtual-world.md?astroContentCollectionEntry=true":"chunks/immerse-in-the-virtual-world_CtPLCH0J.mjs","C:/Users/jhhth/OneDrive/Desktop/astro-blog/src/content/blog/unleash-creativity-with-these-cutting-edge-tablets.md?astroContentCollectionEntry=true":"chunks/unleash-creativity-with-these-cutting-edge-tablets_z9TVC29G.mjs","C:/Users/jhhth/OneDrive/Desktop/astro-blog/src/content/blog/world-of-drones.md?astroContentCollectionEntry=true":"chunks/world-of-drones_DWNACoyk.mjs","C:/Users/jhhth/OneDrive/Desktop/astro-blog/src/content/blog/best-forex-trading-strategies-for-beginners.md?astroPropagatedAssets":"chunks/best-forex-trading-strategies-for-beginners_BjZyII4x.mjs","C:/Users/jhhth/OneDrive/Desktop/astro-blog/src/content/blog/best-laptops-for-developers.md?astroPropagatedAssets":"chunks/best-laptops-for-developers_DpIUzJRp.mjs","C:/Users/jhhth/OneDrive/Desktop/astro-blog/src/content/blog/best-trading-bots-for-forex-trading.md?astroPropagatedAssets":"chunks/best-trading-bots-for-forex-trading_C-PbeIRi.mjs","C:/Users/jhhth/OneDrive/Desktop/astro-blog/src/content/blog/best-ways-to-minimize-risk-in-forex-trading.md?astroPropagatedAssets":"chunks/best-ways-to-minimize-risk-in-forex-trading_sHpRY93o.mjs","C:/Users/jhhth/OneDrive/Desktop/astro-blog/src/content/blog/immerse-in-the-virtual-world.md?astroPropagatedAssets":"chunks/immerse-in-the-virtual-world_D_qUD0K1.mjs","C:/Users/jhhth/OneDrive/Desktop/astro-blog/src/content/blog/unleash-creativity-with-these-cutting-edge-tablets.md?astroPropagatedAssets":"chunks/unleash-creativity-with-these-cutting-edge-tablets_BBzz25RW.mjs","C:/Users/jhhth/OneDrive/Desktop/astro-blog/src/content/blog/world-of-drones.md?astroPropagatedAssets":"chunks/world-of-drones_ersgj4rP.mjs","\u0000astro:asset-imports":"chunks/_astro_asset-imports_D9aVaOQr.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_BcEe_9wP.mjs","C:/Users/jhhth/OneDrive/Desktop/astro-blog/src/content/blog/best-forex-trading-strategies-for-beginners.md":"chunks/best-forex-trading-strategies-for-beginners_CMtOLin_.mjs","C:/Users/jhhth/OneDrive/Desktop/astro-blog/src/content/blog/best-laptops-for-developers.md":"chunks/best-laptops-for-developers_BT8l_9GO.mjs","C:/Users/jhhth/OneDrive/Desktop/astro-blog/src/content/blog/best-trading-bots-for-forex-trading.md":"chunks/best-trading-bots-for-forex-trading_BECEOYCR.mjs","C:/Users/jhhth/OneDrive/Desktop/astro-blog/src/content/blog/best-ways-to-minimize-risk-in-forex-trading.md":"chunks/best-ways-to-minimize-risk-in-forex-trading_BdEF3-e6.mjs","C:/Users/jhhth/OneDrive/Desktop/astro-blog/src/content/blog/immerse-in-the-virtual-world.md":"chunks/immerse-in-the-virtual-world_GyKm7dq4.mjs","C:/Users/jhhth/OneDrive/Desktop/astro-blog/src/content/blog/unleash-creativity-with-these-cutting-edge-tablets.md":"chunks/unleash-creativity-with-these-cutting-edge-tablets_BmBEbhuh.mjs","C:/Users/jhhth/OneDrive/Desktop/astro-blog/src/content/blog/world-of-drones.md":"chunks/world-of-drones_B9E6Q2hI.mjs","\u0000@astrojs-manifest":"manifest_BMBSbIl5.mjs","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/error-404.Ox42KQdE.png","/_astro/about.C1FZ3Rbp.jpg","/_astro/ffb-white-b-bg-removebg.HThfkC4P.png","/_astro/about._1iXKnQE.css","/favicon.svg","/images/forex-trading-strategies-for-beginners.jpg","/images/image1.png","/images/image2.png","/images/image3.png","/images/image4.png","/images/image5.png","/images/image6.png","/images/image7.png"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"Hgb9F4orQee3y3DSavJNScIjTo5pVf4rFtHG5esO1cM=","experimentalEnvGetSecretEnabled":false});

export { manifest };
