const CACHE_NAME = 'maldivas-desafio-v1'
const APP_SHELL = [
  './',
  './index.html',
  './desafio-definitivo.html',
  './manifest.json',
  './icon.svg'
]

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  )
})

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  )
})

self.addEventListener('fetch', event => {
  if(event.request.method !== 'GET') return

  const request = event.request
  const updateCache = response => {
    if(response.ok && new URL(request.url).origin === self.location.origin){
      const copy = response.clone()
      caches.open(CACHE_NAME).then(cache => cache.put(request, copy))
    }
    return response
  }

  event.respondWith(
    request.mode === 'navigate'
      ? fetch(request).then(updateCache).catch(() => caches.match(request).then(cached => cached || caches.match('./desafio-definitivo.html')))
      : caches.match(request).then(cached => cached || fetch(request).then(updateCache))
  )
})
