const CACHE_NAME = 'mi-cache-1';

// Abre un cache existente o lo crear
caches.open('mi-cache-1');

// verificar si existe un cache. Retoran un promesa
caches.has('mi-cache-1').then( res => {
    console.log( res);
});


console.log('dos');

// para eliminar un chache
caches.delete('mi-cache-2').then( resp => {
    console.log('Resp delete ', resp)
})

// visualizar los caches
caches.keys().then( resp => {
    console.log(resp)
})

// Guardar elemento en el cache
caches.open('mi-cache-2').then( cache => {
    cache.add('/index.html');
})

caches.open('mi-cache-1').then( cache => {
    //console.log(cache)
    cache.addAll([
        '/',
        '/index.html',
        'estilos.css',
        '/js/app.js'
    
    ])

})

// Eliminar un archivo del cache
caches.open(CACHE_NAME).then( cache => {
    cache.delete('/js/app.js');
})

// leer un archivo de cache
caches.open(CACHE_NAME ).then( cache => {
    cache.match('/index.html').then( resp => {
        return resp.text();
    }).then( respText => {
        console.log( respText )
    })
})

// Modificar un archivo del cache
caches.open(CACHE_NAME ).then( cache => {
    cache.put('index.html', new Response('un texto') )
})