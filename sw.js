const CACHE_NAME = 'mi-cache-1';

self.addEventListener('install', function (evento) {
    console.log(evento)

    const respCache = caches.open(CACHE_NAME).then( cache => {
           return cache.addAll([
            '/',
            '/index.html',
            'bt/css/bootstrap.min.css',
            'bt/js/bootstrap.min.js',
            '/js/app.js',
            '/js/app2.js'
        ])
    })

    evento.waitUntil(respCache);   
})

self.addEventListener('fetch', evento => {
    console.log( evento.request );
    const respuestaCache = caches.match(evento.request )
    evento.respondWith(respuestaCache);

})