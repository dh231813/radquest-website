'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "ea67d7e69d6dd55d628621d888bcb163",
"assets/AssetManifest.bin.json": "1d2562f7a16f24029e93e8737e99c44b",
"assets/AssetManifest.json": "c3e23a6806d380e5847a2382a528a51f",
"assets/assets/audio/bgm.mp3": "40e9a94fac3fa0d887bb3da26c104fe1",
"assets/assets/audio/correct.mp3": "4e6050b5a717d163bd58506471c8a8c5",
"assets/assets/audio/incorrect.mp3": "9bd8e7b40c6bb8a1dcb64afc8c764ecd",
"assets/assets/audio/next.mp3": "57134650568017353c32382459564e17",
"assets/assets/audio/pickup.mp3": "cfbc3e5fc764d2e29b14aefea45923fc",
"assets/assets/audio/victory.mp3": "7f8364a968c5ae065d97a33bf81e0f9c",
"assets/assets/fonts/minecraft.ttf": "d7b98c450349bef0631c7229b804a5c7",
"assets/assets/fonts/VT323-Regular.ttf": "034de38c65e202c1cc838e7d014385fd",
"assets/assets/images/characters/alex.png": "1b9213d9c32cc7bef33f9aac95da134c",
"assets/assets/images/characters/alex_front.png": "de6d5bcff4455d8688da9b0bb8caab9f",
"assets/assets/images/characters/char_walk_left.gif": "239db9bc36bf2ca7ad75630f0b975daa",
"assets/assets/images/characters/char_walk_right.gif": "057f0a27cbd6a072585d206b5999953c",
"assets/assets/images/characters/doctor_ca.png": "91eeebf024cda538cc57c719eaa3c4cd",
"assets/assets/images/characters/doctor_ca_sprite.png": "a6c30aff63af1f083f0d8c26a9dc3745",
"assets/assets/images/characters/doctor_coil.png": "57325cfa1497b90e63d4886667e61f75",
"assets/assets/images/characters/doctor_coil_sprite.png": "19a5169568a3f2640e3dae8065ed8c6b",
"assets/assets/images/characters/doctor_ct.png": "674fa3b085f9aef07fad2ff9fb1af966",
"assets/assets/images/characters/doctor_ct_sprite.png": "63ad416cd9d2cad96b94f0c196af1b06",
"assets/assets/images/characters/doctor_mrt.png": "57325cfa1497b90e63d4886667e61f75",
"assets/assets/images/characters/doctor_mrt_sprite.png": "19a5169568a3f2640e3dae8065ed8c6b",
"assets/assets/images/characters/doctor_us.png": "e60361734ad293e20c5a35d482ddf066",
"assets/assets/images/characters/doctor_us_sprite.png": "a94f66f30ea7b86be69c22e3a83d235a",
"assets/assets/images/characters/doctor_xray.png": "369fe048061446ed1109430a7b062701",
"assets/assets/images/characters/doctor_xray_sprite.png": "93923b68bbbd75416e5b15af4f69b15b",
"assets/assets/images/characters/global.png": "4a3836634c1660863298b83f1a1c0fbe",
"assets/assets/images/characters/ordi.png": "1b8672d446839fba5e26596d92fa0fc6",
"assets/assets/images/characters/ordi_front.png": "766a45f82b8caf6e35d10e80b0f5d9b9",
"assets/assets/images/characters/spritesheet-mod-v2.png": "a3433a5bcffc45e15c95890b043da851",
"assets/assets/images/characters/spritesheet-mod.png": "1fae4a98f0e0586ff6b6f1d5ffca51df",
"assets/assets/images/characters/spritesheet.png": "e5b78c528068241182fe7d7f92da02a3",
"assets/assets/images/characters/spritesheet2.png": "d4135398394c6392d9212802fc3574c0",
"assets/assets/images/characters/spritesheet_Alex.png": "7f65c47138af2ada5c348c5b3abf88af",
"assets/assets/images/objects/Aqua.png": "462270cbadba62fd48ce0bf250df2137",
"assets/assets/images/objects/BadgeCoil-large.png": "0439f43bf34852bc7e9f5628bf61f247",
"assets/assets/images/objects/BadgeCoil.png": "f0ebd63ea0a294a51bd19bd6e650ceb0",
"assets/assets/images/objects/BadgeContrastAgent-large.png": "7dfc7cdb613d6b0c203b4f4dab188674",
"assets/assets/images/objects/BadgeContrastAgent.png": "5bd8c05d19d7cac04ad9fef07e9f959d",
"assets/assets/images/objects/BadgeCT-large.png": "467b37eb2fe081041cba8b77a6536f82",
"assets/assets/images/objects/BadgeCT.png": "eaa774dbcb89c779ae9dd3466a8e9757",
"assets/assets/images/objects/BadgeMRT-large.png": "7b96c8ec342d5c20b27106e3ae729789",
"assets/assets/images/objects/BadgeMRT.png": "0c70e6d82b7a32df78e4816b9aa7f32f",
"assets/assets/images/objects/BadgePatient-large.png": "8090ca16cf020ecaff230342f8b9a59b",
"assets/assets/images/objects/BadgePatient.png": "4aa0d6a06e2f96c0c3d3b5fb65f55d00",
"assets/assets/images/objects/BadgeUltrasound-large.png": "88f258915715b576366cf03a7058a0cb",
"assets/assets/images/objects/BadgeUltrasound.png": "b6453a60bae660a1319278ecbafb9e02",
"assets/assets/images/objects/BadgeXRay-large.png": "81399ff7c569ba0a640277dabcc0469e",
"assets/assets/images/objects/BadgeXRay.png": "9cad4c5069a60f6b03961358db07fdb6",
"assets/assets/images/objects/Barium-200.png": "d7739a833e847ce4a1def971ded704b3",
"assets/assets/images/objects/Barium.png": "38dbe9c22389f0df6b795bdf77a4531f",
"assets/assets/images/objects/chest-large.png": "69b8c536427df38753f232ff6cbc2513",
"assets/assets/images/objects/chest_spritesheet.png": "bcc8785d27d816e23eca114dd4e708ed",
"assets/assets/images/objects/CoilFoot-large.png": "81251340ba10f2f350c3d6e1ec3450d0",
"assets/assets/images/objects/CoilFoot.png": "c7b109595f994317f8015ba0489ce839",
"assets/assets/images/objects/CoilHand-large.png": "acc68274813385fa7a8880960b58c8bb",
"assets/assets/images/objects/CoilHand.png": "5126adca1e8202a58c82641e0a6192ef",
"assets/assets/images/objects/CoilHead-large.png": "32d59081b42d8f54ed2c8e6cc35f54e4",
"assets/assets/images/objects/CoilHead.png": "44de533667d70c8c7c4e052da808b794",
"assets/assets/images/objects/CoilKnee-large.png": "959ec411aaffeddefd83bb5cc7f0a6f1",
"assets/assets/images/objects/CoilKnee.png": "c454b1530f3a0dd72f4e43fe01266d62",
"assets/assets/images/objects/Gadolinium-200.png": "b795da15aa1498c76bc91eff96b4d57b",
"assets/assets/images/objects/Gadolinium.png": "20e14381e5da4b8aafcb0764ab8e5477",
"assets/assets/images/objects/Jod-200.png": "1df177142489248d023a653c7ab027bb",
"assets/assets/images/objects/Jod.png": "1740b3706ac59e47fca34d0ea59cbe42",
"assets/assets/images/objects/pixel%2520logorq.png": "bfb584d2a44b0bc156753a4134aeae30",
"assets/assets/images/objects/pixellogolarge.png": "17d6ae60d12866e03c3d0196ca56f626",
"assets/assets/images/objects/Primovist-200.png": "9339be8a64f745731aff164870dac347",
"assets/assets/images/objects/Primovist.png": "7a2e87fe4ca9f5eb3c5f7c15ded0e73f",
"assets/assets/images/objects/vial.png": "2f1e1dee356441cdc088b4abe09b9980",
"assets/assets/images/objects/xray_goggles.png": "65a60c0be6d025e02a4e6df43473895d",
"assets/assets/images/tiled/!$Ambulance_Marked.png": "b8cfb4c11aff2d61c73504e25ef1fba8",
"assets/assets/images/tiled/!$Ambulance_Unmarked.png": "46dabfe8cc560680028050490864a165",
"assets/assets/images/tiled/!doors.png": "85b99333a1dce30cde6d61c6d558525d",
"assets/assets/images/tiled/$!elevator.png": "957e3dae3c5f8948369c51a15c014c82",
"assets/assets/images/tiled/$!helicopter_left.png": "fff6dd37c2a12af2982e493431bbe880",
"assets/assets/images/tiled/$!helicopter_right.png": "da60bec0817f17b8470288ac9b6733aa",
"assets/assets/images/tiled/$!helicopter_slowspin.png": "f9320192cd9e33cb3e4bf13b52b9e871",
"assets/assets/images/tiled/$valves.png": "1fb6dca586fc8e158ae51fd1c689f302",
"assets/assets/images/tiled/$valves2.png": "d2a6d4cb60875b5a2ec7347217788453",
"assets/assets/images/tiled/alex.png": "def58d45a5344f214e4b9946c85cc2bc",
"assets/assets/images/tiled/Hospital_A2.png": "e701fb9fe56db26160f34eb746117fe4",
"assets/assets/images/tiled/Hospital_A3.png": "25a2942b947fbf9077251d2154436884",
"assets/assets/images/tiled/Hospital_A4.png": "eaf7e6d5c93319be8890d54a7d1e74aa",
"assets/assets/images/tiled/Hospital_B.png": "ef80924f6281938da1b9e8e1f25162dc",
"assets/assets/images/tiled/Hospital_C.png": "8048615ab89ea88a7f4159037054ea01",
"assets/assets/images/tiled/Hospital_D.png": "3f75f3a4487e2f41bcc3078c6d45e67a",
"assets/assets/images/tiled/Hospital_E.png": "10a07f4ee3194f5e6bc7f1d1367ca255",
"assets/assets/images/tiled/Hospital__signs.png": "bd5bee1a2054b3db57ffd4022d9c231a",
"assets/assets/images/tiled/non-rm-a2-square.png": "2cde0d3d1542ccec85a05771694b1a38",
"assets/assets/images/tiled/non-rm-a3.png": "1784f0c917035cd1270b1b763ea47257",
"assets/assets/images/tiled/non-rm-a4-square.png": "3f47e396122b452b738f052473a8a795",
"assets/assets/images/tiled/Radquest-newmap.tiled-session": "5ae2750e3f887d6c550ced59b3514569",
"assets/assets/images/tiled/radquest_chest.json": "2a644820568458e2e43e5e9cbdce422e",
"assets/assets/images/tiled/radquest_extras.json": "6bb9f4442ca6e58ea2c84f75b699a31d",
"assets/assets/images/tiled/radquest_floors_02.json": "b48b656e6f8be563f82d7f74916831d5",
"assets/assets/images/tiled/radquest_floors_square.json": "fcebabe2c1766245a5e0d795ffc1d7f5",
"assets/assets/images/tiled/Radquest_Level.json": "a847742ba4e1a7c74bd9c1e30a9c896e",
"assets/assets/images/tiled/Radquest_Level.tmx": "da2c0ca824f3338e93ea6202e3406842",
"assets/assets/images/tiled/radquest_level_tileset.json": "b3387de4871fb53e6a807b42904aba6c",
"assets/assets/images/tiled/radquest_radio.json": "7c6927def852450337b44205b80a48f4",
"assets/assets/images/tiled/radquest_trees.json": "efe27c3864eda0220b6684d6d906517c",
"assets/assets/images/tiled/radquest_waitingroom.json": "538d14392d79fbeb6bc357b67645c49b",
"assets/assets/images/tiled/spritesheet.png": "4e296032dbea272fcd53fda98efc9b1f",
"assets/assets/images/tiled/TX%2520Props%2520(1).png": "7186e8150adc577e0087cbe593b62244",
"assets/assets/sfx/victory.mp3": "7f8364a968c5ae065d97a33bf81e0f9c",
"assets/FontManifest.json": "52ac3105234c51626b2009671110b9d1",
"assets/fonts/MaterialIcons-Regular.otf": "5b706bac6cdcd2e24f80d00d29cb78dc",
"assets/NOTICES": "89fea8b49718aa2ffcdd1265e49e7778",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e81317344b13cfdcd87adb88362eda30",
"/": "e81317344b13cfdcd87adb88362eda30",
"main.dart.js": "a024bb295b0ff25830254bf4f8ffd825",
"manifest.json": "c9c6e178b1a37f4ddb356807fa7235ed",
"version.json": "48a2a00d6fa8232eeeb2f337125bef0d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
