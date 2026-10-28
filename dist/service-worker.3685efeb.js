
      var $parcel$global = globalThis;
    
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire089e"];

if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire089e"] = parcelRequire;
}

var parcelRegister = parcelRequire.register;
parcelRegister("85aDG", function(module, exports) {
const $5e270b1066edb4a8$var$CACHE_NAME = 'circuitjs1-app-cache-v1';
const $5e270b1066edb4a8$var$urlsToCache = [
    '/circuit/about.html',
    '/circuit/canvas2svg.js',
    '/circuit/circuitjs.html',
    '/circuit/crystal.html',
    '/circuit/customfunction.html',
    '/circuit/customlogic.html',
    '/circuit/customtransformer.html',
    '/circuit/diodecalc.html',
    '/circuit/icon512.png',
    '/circuit/icon128.png',
    '/circuit/iframe.html',
    '/circuit/lz-string.min.js',
    '/circuit/manifest.json',
    '/circuit/mexle.html',
    '/circuit/mosfet-beta.html',
    '/circuit/opampreal.html',
    '/circuit/split.js',
    '/circuit/subcircuits.html'
];
self.addEventListener('install', (event)=>{
    event.waitUntil(caches.open($5e270b1066edb4a8$var$CACHE_NAME).then((cache)=>cache.addAll($5e270b1066edb4a8$var$urlsToCache)));
});
self.addEventListener('fetch', (event)=>{
    event.respondWith(caches.match(event.request).then((cachedResponse)=>{
        if (cachedResponse) // If the resource is already cached, return it
        return cachedResponse;
        // Otherwise, fetch it from the network and add it to the cache
        return fetch(event.request).then((networkResponse)=>{
            // Only cache non-GET requests and responses that aren't errors
            if (event.request.method === 'GET' && networkResponse.status === 200) {
                const responseClone = networkResponse.clone();
                caches.open($5e270b1066edb4a8$var$CACHE_NAME).then((cache)=>{
                    cache.put(event.request, responseClone);
                });
            }
            return networkResponse;
        });
    }));
});
// Activate event: cleans up old caches
self.addEventListener('activate', (event)=>{
    const cacheWhitelist = [
        $5e270b1066edb4a8$var$CACHE_NAME
    ]; // List of cache versions you want to keep
    event.waitUntil(caches.keys().then((cacheNames)=>{
        return Promise.all(cacheNames.map((cacheName)=>{
            if (!cacheWhitelist.includes(cacheName)) return caches.delete(cacheName); // Delete old caches that aren't in whitelist
        }));
    }));
});

});


parcelRequire("85aDG");

//# sourceMappingURL=service-worker.3685efeb.js.map
