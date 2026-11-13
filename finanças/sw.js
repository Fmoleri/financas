self.addEventListener("install", (e) => {
  self.skipWaiting();
});

self.addEventListener("fetch", (e) => {
  // Mantém a app a funcionar online com o Firebase
});