/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "86a2fe1090fa730f136710695df0b008"
  },
  {
    "url": "assets/css/1.styles.93d096ad.css",
    "revision": "9ecece336c3d5c66730b32d7c2067a50"
  },
  {
    "url": "assets/css/styles.d323ab9f.css",
    "revision": "c720f806b2063966af0e8383f9e86d6c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.93d096ad.js",
    "revision": "c923270d5200ba06f3a9bce7803aabb1"
  },
  {
    "url": "assets/js/2.08437753.js",
    "revision": "3330fb7fdb1fa1c74ad441e29218eaac"
  },
  {
    "url": "assets/js/3.6d4f389c.js",
    "revision": "abace2429846ae0e292986810ca66094"
  },
  {
    "url": "assets/js/4.ad8cff4c.js",
    "revision": "936a9e739b10ebe1d63c52d88a2e0e81"
  },
  {
    "url": "assets/js/5.8052b24b.js",
    "revision": "d3802a3adff2b45be2af12b46bf1f69a"
  },
  {
    "url": "assets/js/6.4054dc13.js",
    "revision": "a5d6d10261bed7b36893d00a4cf94570"
  },
  {
    "url": "assets/js/app.d323ab9f.js",
    "revision": "b323d5ca0b6a87322144bce3685dd7ed"
  },
  {
    "url": "index.html",
    "revision": "6e6b0f9730eb4bc9da60b6c28cf8e629"
  },
  {
    "url": "page1.html",
    "revision": "a43fe527671e664288f9aa9b0cf35d09"
  },
  {
    "url": "page2.html",
    "revision": "82fee8932841497189b97d17d231a99a"
  },
  {
    "url": "page3.html",
    "revision": "1982f3400a10af0b370399b8289405fb"
  },
  {
    "url": "toggle/index.html",
    "revision": "0620fd35b2fbad4624e795d41ef95311"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
