const CACHE_NAME = 'moburb-cache-v1';
const URLS_TO_CACHE = [
  '/',
  '/index.html',
  '/localizacao.html',
  '/tutorial.html',
  '/99.png',
  '/animacao1.gif',
  '/animacao2.gif',
  '/animacao3.gif',
  '/apple.png',
  '/apps.png',
  '/indrive.png',
  '/maps.png',
  '/moburb.png',
  '/uber.png',
  '/waze.png',
  '/whatsapp.png', 
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME) 
      .then((cache) => {
        return cache.addAll(URLS_TO_CACHE);
      })
  );
});


self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
    .then(response =>  response || fetch(event.request))
  );
});