'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "ab9de973dedc3c8896b9cd6ad4de9347",
".git/config": "2de221a8f12608d4c21f632281ff638c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "bf409f4aac0b3928c1d4c6086d88c02b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f3778144a35fd57c67a78108d88bf4d7",
".git/logs/refs/heads/main": "cbfc82bfb75e22f2b6260c7f843b3f35",
".git/logs/refs/remotes/origin/HEAD": "69820df0f44bae9caa7b7d745aced695",
".git/logs/refs/remotes/origin/main": "c7d2f0878b86e84aa0ce1da9074c7cf4",
".git/objects/92/7139309fb7cdd6a5832289d0bc1498bcdd7aa5": "9ce4a0f809d38a7e47b8dddfce4f37ec",
".git/objects/02/8ddce2fddd1616c9aee8482016d1ab21eeaafa": "d4988a863a6a224dc59332eeda5202ed",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/0b/1f1a3527203d9f058e04711210d95dbfe8ffce": "7b398beb4fd69592c023d9249274f597",
".git/objects/0c/2479e5141d2bbc26429ea40700a4d0fa018e14": "43076bd4ed517d50a876b76797e61107",
".git/objects/1e/8f7969c68fd376dcc47ecd7f1483b78fb81849": "ca2c921877f2e0d8ec3cbab1a3cef6ec",
".git/objects/32/697b4f543a5f0cdda03d0cd7d8fd8e53230384": "558887aa3af058d51725a3e53d372cc8",
".git/objects/39/27b8d4728bcfe78db47157c40044d49e248735": "21d491adb5c798f7ca7ba866e6229e19",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3c/eb1acde06b48ba35fbf462cc2cd7cb5a3f0c71": "e9d2f12d39f19085a0db88a296458e31",
".git/objects/3e/f25db1ece74171a9a6fc245bca8ac39d1c8d6e": "527e9643ac693275eaaa5cf7e34bf617",
".git/objects/40/7d056be28a34ca9e0dab7786f389c5d76a62f5": "b590bf228c4689f3597be6193ec99b0d",
".git/objects/44/bdd9752662b747d311f4b38b8bbe3dd3d4c5f7": "d7128d025da6cd0a839101d201ef0ad5",
".git/objects/4a/8bd5502715cc02f93a37cc4b0ad3d3da215b9f": "86f48dcefa1469d29ad6a92ec30f1fc4",
".git/objects/4b/d5df992e0424cc421a949ee5db0d199892b6cc": "cfff4654582a066d3e27687073dff3c6",
".git/objects/4d/2d4b15a9b4e98f467c1cc55eca70dfb5384b98": "fca873ede9671c455a597364637f10e2",
".git/objects/4d/8db716ddf842022a7ef069877707f132580d46": "99b30a5a3392ee366b36c43aa97742b4",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/52/896f461139823daf687cc35421b4042e303fbc": "63a42eee682858c78a1735754a5479b4",
".git/objects/54/a334de0ceae4d4f82b8dcd70b9e3798bee9a7e": "c6d556cb8fa296e96828c8f1b8545912",
".git/objects/5b/12476b103660d46ab46ca6a10a2145e90c7ff9": "9c240b09ff9a349063cd3a8e3949e7fb",
".git/objects/65/62182d7baaedfd550193b5ddf9dc4ead6523e6": "d1077e9c094ebe3ad875a56d777b8c60",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/69/41f8a015ec60eb902532b337ba0c251895f645": "c131fc750b610628846d39470884bcf1",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6e/5394d33f9f557fe6b719eb40e6b9a55b90e268": "ecfbe285b7de1b5ffed8a381a6fd257d",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/72/05993d84d279d8c339a39fdd3b5407474f29b4": "5a67ca860375fc65d078da78cc3b77c2",
".git/objects/77/8137e597c13ebd6f61f40b112687d2dedb150d": "f9353a60063d3b6ab250b67b072b1976",
".git/objects/78/5dff8ee93a1d3a69fdf84eba17f00755f69faa": "7d459aff11dcfa1df61a3a98b7e7704d",
".git/objects/79/ef059b2cc1f8c0a5f7cc06d85f6de43ef23ec4": "8076e4c1618245f39db89bc592d20abf",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/82/458e23a9d4359f7340d435762699dffd10b8d3": "4d1f74d02a2bc4d21dec4fb88cffecbd",
".git/objects/83/280a4151e30af49623df6b6a404c67720b1ef8": "320d7a486d64040b2fbebc8712e1fca9",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/94/d7bc9a6806d2da74d21426390cd25a07d8dbeb": "93fd623690281a4e9a7e696ef94baa2e",
".git/objects/9d/7d62a92accfc44975aea2477028efabffcbe9d": "97433bec169828f6e92925ee4c098cfc",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/a9/79e1993270573d437c13a6135e054079ecc6a7": "3f0943a558771344f1a721bc4ee65988",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/ae/a96cbdbe6035fc7f4ad1b40f54579c3efcdf16": "2c52f1c6703fd4c091e2ad704443a2da",
".git/objects/b4/7a991ede18397c76d683f8bc70c26020965de1": "dfbb3876b7ca46acdffa788cabd3570a",
".git/objects/b6/4ddbc339b5e6c5e943287e0b55b39093daa621": "a585cef3f2e379a671254600e90326b7",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/bb/5b8bb2f5c829365067ba5016ad9e02f8c489a8": "5c8317ab0c09d4a9a1612c78d62a60be",
".git/objects/bc/15b932bae5757ae65c2b193a521b36f201f82a": "2cd7ca25f177b3aac2177ff4be170eb8",
".git/objects/bc/bb46b3b893ed3a541bcc9a13586225504cf89f": "d6e472717e8f6049eb228de8dccb365c",
".git/objects/c1/5f1f6cb8fefbe88767a435f715c038bd28eaf7": "9955cb8d3633baa6e49bd30e3a618ec8",
".git/objects/c6/c32c4cccddd698e8418b4b18db2eeac521a413": "70a728b88eb1e7a3c38ab9956075295b",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/ca/eb63b1d2bb2d7893f00411515ea05fe3360cd3": "106b9e8e03c8acbbeca7eee469664026",
".git/objects/cc/1274820f93642eb6da363370901b29055631af": "72efff737cd7c818f365310b4091ebc0",
".git/objects/cf/331fd5086882e09855b33748a76c6085b3c236": "1d5c1b658901dd46dd6ea64341c25bc6",
".git/objects/d1/2a8869c6c740698bfcfbf1896090671084813b": "e3b3117da42312e26e5718404cf8d0c5",
".git/objects/d1/e345d1fcadd8289aa85b2eaa03b5384d6dc5f2": "80ab8e99296e381df664b36e1120fba0",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/de/3bcea85db20e970b4c5a2fdf867ac649eb6c66": "a13e560448d703bedf31732c1aec0c12",
".git/objects/e5/fd3d783d17ac91a8b5cc84581f4cf0a5d7403b": "14bdd72198c58444658037377ccb58fc",
".git/objects/e9/3d92f1a9e208e6b4ef7421005364fa1cd5c8c4": "969c50dee73bdd15f05d317b6013c225",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/0b8dc84ffef2319c4f80d23cf26a1310d2b59a": "a2aa34eda388e7947d72cd24304b1653",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f3/80d17a44ff5de5de1ca423383c022defa5db85": "06684c3b995de9c5f5fabc59b98c3b7d",
".git/objects/f4/0c838f70bd285e46e90f459e28c11ba02022ff": "7b4a51a6dad16794905dae6bacd834ba",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/f7/ae465f48f96ae0f868ab6cd399a0e03608ac33": "c52efcaa73317dbad977e76477dee2f7",
".git/objects/fb/31895254bc1caa637226268ef70bcdc668f264": "c948690b07128cdc2d0472cc9e08d192",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/pack/pack-6443c454388c5be5fdefba7c173e50d052fece2b.idx": "ceca32d66be938f33cab85c37b1bd646",
".git/objects/pack/pack-6443c454388c5be5fdefba7c173e50d052fece2b.pack": "8f8f134691950ff2e0a8fbb40f8ea02b",
".git/objects/pack/pack-6443c454388c5be5fdefba7c173e50d052fece2b.rev": "969d63854e109892d77a25f2dac96a0d",
".git/packed-refs": "875be3c3afebe4ab8b441a233e2e486f",
".git/refs/heads/main": "fe0c27afdf3e941d4e00eae2a2f37215",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "fe0c27afdf3e941d4e00eae2a2f37215",
"assets/AssetManifest.bin": "a0c6138d1ef77778163c7522ca415c0e",
"assets/AssetManifest.bin.json": "aa1c5818c0295cbd42b0406d6b398f53",
"assets/assets/images/apk_icon.png": "614ab581e31acd593ab36f5bb7d5abff",
"assets/assets/images/app_store_icon.png": "e7d949298d160648d1ed983e59aadc72",
"assets/assets/images/background_image_1.png": "f342143c168b43ff9fb46a59f0ad7734",
"assets/assets/images/background_image_2.png": "1ee2fa95943b6a4c10c1390aa0da905d",
"assets/assets/images/github_icon.png": "a165bf6db4e13579db1d1c0224bf2e84",
"assets/assets/images/google_play_icon.png": "826d9e6d409bade781ec4aeeef56191e",
"assets/assets/images/llmops_advanced_rag_thumbnail.png": "f40590f5bc294e350bb9c1793638a660",
"assets/assets/images/llm_from_scratch_rl_thumbnail.png": "0fea771039730e8b37248c011d2aeebb",
"assets/assets/images/mini_ragl_thumbnail.png": "0e3bf83375086efd6c24e84133049c36",
"assets/assets/images/mlops_movie_sentiment_thumbnail.png": "a5f6ca9a9eb3588ae8fadf9620eb3e58",
"assets/assets/images/placeholder.jpg": "a283c37d0aca050ea5dacdd17c531eb8",
"assets/assets/images/profile.jpg": "1c094352ca2defd5e1e40e88df2b5b87",
"assets/assets/master/logo.png": "b9ba3561a937021917859cd2a0c7f2aa",
"assets/assets/master/splash_screen.png": "b9ba3561a937021917859cd2a0c7f2aa",
"assets/FontManifest.json": "67a28da3784fc091c2f816d615fbf08a",
"assets/fonts/MaterialIcons-Regular.otf": "38f806dd3c8b12687bd4d14abdb3e5c6",
"assets/NOTICES": "07e6aacc7a3a5647bdbe8a1b5caac5e1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "27cfa127617ce10593433c073c1c3a58",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "bf21cd8fd775a3c59fd53afdee39e0e6",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "03d4d10f4ba51a280d186f2da3b9b456",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.ico": "ace2046b68e2ea271e6ff26314f23afc",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "78a59407600a24f2177bd38aba3ac439",
"icons/Icon-192-maskable.png": "c478f93fa16f75c896758d79d623a509",
"icons/icon-192.png": "935bfabadfdddd8ab9b1e83fd1bb639d",
"icons/Icon-512-maskable.png": "a5821fd31c3f35adae69cca095516d99",
"icons/icon-512.png": "a37c9ec904a8dfae4171025796e0f4a5",
"index.html": "07290797a15e8da83c0c963155791e07",
"/": "07290797a15e8da83c0c963155791e07",
"LICENSE": "86d3f3a95c324c9479bd8986968f4327",
"main.dart.js": "7e53545c01672199924b0ffd1497ff15",
"manifest.json": "f392865c738a02d05e8dc0b4c530018d",
"README.md": "7940acdb1b6132778787396a0567dd9c",
"splash/img/dark-1x.png": "0949d0f647d3e188d5b14878afd5739f",
"splash/img/dark-2x.png": "7ff7706a4348b56c1406a0a7b3f54bd8",
"splash/img/dark-3x.png": "567d6622b29068b30e28e39ba931d301",
"splash/img/dark-4x.png": "b9ba3561a937021917859cd2a0c7f2aa",
"splash/img/light-1x.png": "0949d0f647d3e188d5b14878afd5739f",
"splash/img/light-2x.png": "7ff7706a4348b56c1406a0a7b3f54bd8",
"splash/img/light-3x.png": "567d6622b29068b30e28e39ba931d301",
"splash/img/light-4x.png": "b9ba3561a937021917859cd2a0c7f2aa",
"version.json": "9b818ca9511483c901bed1545384376c"};
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
