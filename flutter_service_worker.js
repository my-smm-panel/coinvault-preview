'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "c752c7479f77377e13c79c82989ca698",
"assets/AssetManifest.bin.json": "2faab533a455eb5c3ca19dcd37392435",
"assets/AssetManifest.json": "022b09ad059960cdb911e80147f2ebb5",
"assets/assets/wheel.png": "bb058479a68c82d35c796321d4baf4dc",
"assets/assets/login_screen.png": "95cb2641f576c3fc1dca28f60a90763b",
"assets/assets/bear_earn.png": "91232c196eb209638768d69fe0929fd0",
"assets/assets/bear_tasks.png": "08004e9899c838c0fd40791a2cef0c1b",
"assets/assets/coin.png": "aa6a4c918a2647d9c6b9a63eeba126da",
"assets/assets/app_icon_name.png": "bf0bce41fbe87f551056b5ba14f9edfa",
"assets/assets/app_icon.jpg": "305960789041db8c3fc6025d90224e9f",
"assets/assets/spin_bg.png": "da2aa2923651bdeb6f66a17f26f7aec5",
"assets/assets/apps/mpl.png": "a1413ea510bf3ff5b22ca4890145a40f",
"assets/assets/apps/rummy.png": "5d585bd4144c44c3d56be5cafb0e2d8f",
"assets/assets/apps/ludo.png": "d253a31c266bd026deacfb29c909b510",
"assets/assets/apps/dream11.png": "d05b387d3c2fca90c764a347306db881",
"assets/assets/coin_zip.png": "7e85a217b6e4f6e637abf7ec338edd76",
"assets/assets/logos/lootably.png": "8833b73611d58c08c47e8d591f2d11d3",
"assets/assets/logos/cpidroid.png": "9d073e5440bad48b55d430a46b7f1ef3",
"assets/assets/logos/pollfish.png": "e2e5bda4f96a8b2299f9c992a95f3daa",
"assets/assets/logos/pubscale.png": "ba35b7a486f10f784a3485fd343f0a3f",
"assets/assets/logos/timewall.png": "4ce4b9b87dd6ec49821d7c4a14eb2408",
"assets/assets/logos/prime.png": "fb785d2ad0db994c7b2c905a09d961ff",
"assets/assets/logos/growdeck.png": "b868631b8646b70ed9b2a24c86ea7ae3",
"assets/assets/logos/cpx.png": "5467e091f63e6c38dfcd6b915f03238f",
"assets/assets/logos/offerpro.png": "e9ab96f2e16d1c14c974eb8a0b81210a",
"assets/assets/logos/adscend.png": "b8b445bf9425dc433843bd8d45542597",
"assets/assets/logos/cint.png": "7a74181c764b52c7c5e0ae782f3fd0aa",
"assets/assets/logos/bitlabs.png": "001b7b3bc4ec12dd84061e59c8fd3581",
"assets/assets/google_g.png": "1ee39f29010952b023024d47b1f56519",
"assets/assets/bear.png": "649cbbfa0d3f350b0722d55579998259",
"assets/assets/brands/myntra.png": "d5a553f1c7846b02011a6ee576176799",
"assets/assets/brands/flipkart.png": "14043c7c397fd53e19fe07a78f7428dc",
"assets/assets/brands/swiggy.png": "946127ad5be612fc920da7bc8abf5f4b",
"assets/assets/brands/spotify.png": "abcf94ac1b3043b9eb6f67fe14946d8a",
"assets/assets/brands/netflix.png": "8e1df3d483abbbafd29f41f4b4f78ca8",
"assets/assets/brands/zomato.png": "1afc4767d9d535b5b718c0a725ad4af0",
"assets/assets/brands/ajio.png": "e1ae487fcef188759bc1c1dbd54d7b96",
"assets/assets/brands/phonepe.png": "a84d13a7462ce97f92cce22cc542029f",
"assets/assets/brands/googleplay.png": "63eb3d7470b037afc11d94e3c8b12a86",
"assets/assets/brands/amazon.png": "6e2713ad42f94c10386f1269c099b947",
"assets/assets/brands/paytm.png": "f12ea96154ad82ab68a06f3dbb041a4b",
"assets/assets/brands/ola.png": "4215cf2bd3daa74f6adb7400b460a277",
"assets/assets/bear_redeem.png": "25592125b7cb3a6d3fe3ac7b9f6add41",
"assets/assets/scratch.png": "0d09cb36765ef24dc24cd63c0051e55b",
"assets/assets/bear_avatar.png": "4a6d2df0b33cc9e0f60983f4ad860249",
"assets/assets/logo_circle.png": "1c411793c68eddf0593ffa3d1fced1fb",
"assets/assets/trophy.png": "645762f37c0078b231e1966943361dfa",
"assets/NOTICES": "b0c768da276a615443d988166b05f7e8",
"assets/AssetManifest.bin": "5c27ddb6388db8b0a7aa73d99c2b5b74",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"index.html": "e8731dc64a3e9bbfa8051d59c4af4f49",
"/": "e8731dc64a3e9bbfa8051d59c4af4f49",
"version.json": "1cd492822d7dedd8c405d6b805c0f072",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"main.dart.js": "a9883573dc0943f156283054186b7196",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
