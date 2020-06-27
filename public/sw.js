importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

workbox.routing.registerRoute(
  /.*forecast.*/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'data',
  })
);

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
    { url: "images/add.svg", revision: "e34b9214a2c2550cabefb3decce31d60" },
    {
      url: "images/clear-day.svg",
      revision: "373f225d4708a042f7b4216b7635cd86",
    },
    {
      url: "images/clear-night.svg",
      revision: "182ab6e8c25ec48f122a9d8dfc1e6255",
    },
    {
      url: "images/cloudy.svg",
      revision: "2e2d0f6b0a449b8a5b7062590f10528c",
    },
    {
      url: "images/favicon.ico",
      revision: "22298544979c4a6950cea9dc5423a3cd",
    },
    { url: "images/fog.svg", revision: "a3a58712f992fff6756aef77145a78d8" },
    {
      url: "images/hail.svg",
      revision: "38a70558f2b3908fa9c5683a36433cfe",
    },
    {
      url: "images/icons/icon-128x128.png",
      revision: "5d8fa9d3c07cebf8dcb4cbff38879f29",
    },
    {
      url: "images/icons/icon-144x144.png",
      revision: "5c3a5ad956ed29fdb801b718040323cb",
    },
    {
      url: "images/icons/icon-152x152.png",
      revision: "ed1a57595c45666acbff35a8c8f93e9f",
    },
    {
      url: "images/icons/icon-192x192.png",
      revision: "ffa62d40933a6fc55ac53270e43d374e",
    },
    {
      url: "images/icons/icon-384x384.png",
      revision: "5f2a233eb51f812667e40a919bc30cb1",
    },
    {
      url: "images/icons/icon-512x512.png",
      revision: "a973b2bc78294da51dff5fdb60f5e250",
    },
    {
      url: "images/icons/icon-72x72.png",
      revision: "197302378987a6c4d324dea30ca5fa85",
    },
    {
      url: "images/icons/icon-96x96.png",
      revision: "1bbc4e1019cbec6a85aef93438fa0df0",
    },
    {
      url: "images/install.svg",
      revision: "c5de4912fe021bbefb235b1ff4ebb455",
    },
    {
      url: "images/partly-cloudy-day.svg",
      revision: "6038ecf0f8ccef10bae5beb2e63ab8a3",
    },
    {
      url: "images/partly-cloudy-night.svg",
      revision: "4d1becdcd6b504518caf807b55212f64",
    },
    {
      url: "images/rain.svg",
      revision: "cb4807cc0dd09b16e8cef151ac1a8dd6",
    },
    {
      url: "images/refresh.svg",
      revision: "ecc1d602e11a3b42ff2d58759a6a7b28",
    },
    {
      url: "images/sleet.svg",
      revision: "5f3bdbd07d4c862d1af61da0e9fe111b",
    },
    {
      url: "images/snow.svg",
      revision: "e2dcecf8e93ce91476db7e31310a1021",
    },
    {
      url: "images/thunderstorm.svg",
      revision: "7cad6ca4117b6a3a8158f4142b943ff3",
    },
    {
      url: "images/tornado.svg",
      revision: "4a222b1ee3ba40cc8a7f5a2b12f165d4",
    },
    {
      url: "images/wind.svg",
      revision: "c627cea223b70cbecd6f595aa7909a1b",
    },
    { url: "index.html", revision: "4d88817932d084e7cd246c8f3242e92a" },
    { url: "manifest.json", revision: "5cb129ba19fd70ee02dfabc3cf261ab0" },
    { url: "offline.html", revision: "aaa95bfa86a99fe7092a1a7cff813de5" },
    { url: "scripts/app.js", revision: "e803218dcd95c25737400e43558f43d6" },
    {
      url: "scripts/install.js",
      revision: "c8906643764450e808e98bffda75986a",
    },
    {
      url: "scripts/luxon-1.11.4.js",
      revision: "4e376782237f0c8dda09e123c098c30d",
    },
    {
      url: "styles/inline.css",
      revision: "00c6cbd9c61f61b691d180cfa99f7d33",
    },
    { url: "sw.js", revision: "cc10ae27d732610c550c64611b8cfed9" }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});