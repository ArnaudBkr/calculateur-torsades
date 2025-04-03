const CACHE_NAME = "calculateur-torsades-v3";
const urlsToCache = [
  "Twist.Calculator.html",
  "manifest.json",
  "service-worker.js",
  "./IMG/backgroundImage.jpg",
  "./IMG/Locking_wire_distance.jpg",
  "./PCS/PCS-7610_iss05_EN.pdf",
  "./PCS/NCT60-300-04_Rev10.pdf",
  "./IMG/icon-192.png",
  "./IMG/icon-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
