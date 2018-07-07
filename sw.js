 /* Storing cache name into variable*/

 let staticCacheName = "restaurants-rev-static-v4";
 let cachedUrl = [
 				 './',
 				 './sw.js',
 				 'css/styles.css',
 				 'css/normalize.css',
 				 'data/restaurants.json',
 				 'img/1.jpg',
 				 'img/2.jpg',
 				 'img/3.jpg',
 				 'img/4.jpg',
 				 'img/5.jpg',
 				 'img/6.jpg',
 				 'img/7.jpg',
 				 'img/8.jpg',
 				 'img/9.jpg',
 				 'img/10.jpg',
 				 'js/dbhelper.js',
 				 'js/main.js',
 				 'js/restaurant_info.js',
 				 'index.html',
 				 'restaurant.html'
 				 ];
 /* caching files in the static cache*/

 self.addEventListener("install", e => {
 	e.waitUntil(
 		caches
 			.open(staticCacheName)
 			.then(cache => cache.addAll(cachedUrl))
				/*console.log("datas add to cache", cache)})*/
 			.then(self.skipWaiting())
 			.catch( err => console.log("cache failed", err))
 		);
 });

 /*Updating cache and remove the old one*/

 self.addEventListener("activate", e => {
 	e.waitUntil(
 		caches.keys()
 			.then(
				cacheNames => Promise.all(
					cacheNames.filter( 
						cacheName => cacheName.startsWith('rest-') && cacheName != staticCacheName).map(
							cacheName => cache.delete(cacheName))
 				)
 			)
 			.catch(err => console.log("failed to update/remove old cache", err))
 	)
 });

