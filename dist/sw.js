/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-148cb7e5'], (function (workbox) { 'use strict';

  self.skipWaiting();
  workbox.clientsClaim();

  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "assets/index.1881bc18.css",
    "revision": null
  }, {
    "url": "assets/index.8261a675.js",
    "revision": null
  }, {
    "url": "assets/workbox-window.prod.es5.d2780aeb.js",
    "revision": null
  }, {
    "url": "index.html",
    "revision": "3e636f3095e3d09742b8a9c7d7947b7d"
  }, {
    "url": "favicon.jpeg",
    "revision": "ed86f0b069a9fbbd7dba3610e2ac0228"
  }, {
    "url": "icons/android-chrome-192x192.png",
    "revision": "16a73a90af35f997a28e4b91dfd1b528"
  }, {
    "url": "icons/android-chrome-512x512.png",
    "revision": "4682f8b5863a563f4e2a7c450ebaed40"
  }, {
    "url": "icons/android-chrome-maskable-192x192.png",
    "revision": "0892291b68686258b574d68b57c18471"
  }, {
    "url": "icons/android-chrome-maskable-512x512.png",
    "revision": "4682f8b5863a563f4e2a7c450ebaed40"
  }, {
    "url": "manifest.webmanifest",
    "revision": "44103d877a7319301e86455ce85cf434"
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("index.html")));

}));
