self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('v1').then(cache => {
            return cache.addAll([
                '/',
                '/index.html',
                '/style.css',
                'script.js',
                '/manifest.json',
                '/icon-192x192.png',
                '/icon-512x512.png'
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWidth(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});