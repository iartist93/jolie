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
    "revision": "5ff72037ab31b1de85b54d0f089afc8f"
  },
  {
    "url": "assets/css/1.styles.93d096ad.css",
    "revision": "9ecece336c3d5c66730b32d7c2067a50"
  },
  {
    "url": "assets/css/styles.88a0ed8d.css",
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
    "url": "assets/js/app.88a0ed8d.js",
    "revision": "b5a321ea85043a37a94578c15be03ea3"
  },
  {
    "url": "index.html",
    "revision": "bd16de6903e45243bca6a92edc1e7246"
  },
  {
    "url": "page1.html",
    "revision": "94a975e21ce87a7bfdc4b051385a080b"
  },
  {
    "url": "page2.html",
    "revision": "37ea2d75e87d97cf2b031be2ad1fe898"
  },
  {
    "url": "page3.html",
    "revision": "b56dda1c32bd0c9cff9bf2eca44f6ace"
  },
  {
    "url": "toggle/index.html",
    "revision": "0457bed9b29e66b1415767fa7f80c065"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
