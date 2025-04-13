const cacheName = "sitelen-v2";

const appShellFiles = [
  "./",
  "./index.html",
  "./fonts/PuLukin.otf",
  "./fonts/sitelen-pona-pona-1.otf",
  "./fonts/sitelenselikiwenasuki.otf",
  "./icon.png",
  "./favicon.ico",
  "./icon512.png",
];

self.addEventListener("install", (e) => {
  console.log("[Service Worker] Install");

  e.waitUntil(
    (async () => {
      const cache = await caches.open(cacheName);
      console.log("[Service Worker] Caching all: app shell and content");
      await cache.addAll(appShellFiles);
    })(),
  );
});