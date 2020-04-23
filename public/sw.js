const workboxVersion="5.1.2";importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"baige"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"37bcf9a8be017e8ecaf7ab3cd6c3c64c",url:"./404.html"},{revision:"c3a3de113f6996d25f73b9a46fe2b8dc",url:"./about/index.html"},{revision:"d668b506c6e80d7d77d244fd50a1b18e",url:"./categories/index.html"},{revision:"59055f41e3d3716a49e10aa49eb0bcf3",url:"./css/meme.min.08fa2312e2d0f92c24f02069c5fe675a0e3e73161240f654456a903cdafe0943.css"},{revision:"8d2a4fd8cbf836428792bdd7f92af172",url:"./fonts/glyph-correction.woff2"},{revision:"5ca82f1b09a089265faa62f69ce6c45a",url:"./index.html"},{revision:"035cfc8e37969d29692bff9859a38cff",url:"./js/meme.min.84fa340e2d192a3be8152b342da726958f7c57028a4742563b9970b809f7f33f.js"},{revision:"dc4bff81cdf4f4ea53bf39b1f57b1eae",url:"./life/a-song-of-ice-and-fire/index.html"},{revision:"9d8e37f92026fdeedeee7d31e930c6ed",url:"./life/index.html"},{revision:"7135bf9b7b2369e7d18351040b2d0385",url:"./manifest.json"},{revision:"228ca906cbb93f74846f8848ee9550d2",url:"./tags/index.html"},{revision:"d1e7e58746219b6f1b9490d2f0749ac0",url:"./tags/poetry/index.html"},{revision:"6fc509a7e7390e2f122c2b7dc1c25351",url:"./tags/reading/index.html"}]),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:mp4|webm|ogg)$/,new workbox.strategies.CacheFirst({cacheName:"videos",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[200]}),new workbox.rangeRequests.RangeRequestsPlugin]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();