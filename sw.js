 /* Storing cache name into variable*/

 const staticCacheName = "res-static-v4";
 const cachedUrls = [
 	"/",
  	"sw.js",
  	"index.html",  
  	"restaurant.html",
  	"css/styles.css",
  	"data/restaurants.json",
  	"js/dbhelper.js",
  	"js/main.js",
  	"js/restaurant_info.js",
  	"img/1.jpg",
  	"img/2.jpg",
  	"img/3.jpg",
  	"img/4.jpg",
  	"img/5.jpg",
  	"img/6.jpg",
  	"img/7.jpg",
  	"img/8.jpg",
  	"img/9.jpg",
  	"img/10.jpg"
];
 				 
 /* caching files in the static cache*/

 self.addEventListener("install", event => {
 	event.waitUntil(
 		caches.open(staticCacheName)
 			.then(cache => cache.addAll(cachedUrls))
 			.then(() => self.skipWaiting())
 			.catch( err => console.log("cache failed", err))
 		);
 });

 /*Updating cache and remove the old one*/

 self.addEventListener("activate", event => {
 	event.waitUntil(
 		caches.keys()
 			.then( cacheNames => {
 				return Promise.all(cacheNames
 					.filter(cacheName => cacheName.startsWith('res-') && cacheName != staticCacheName)
 					.map(cacheName => caches.delete(cacheName))
 				);
 			})
 			.then(() => self.clients.claim())
 			.catch((err) => console.log("failed to update/remove old cache", err))
 	);
 });

 /*Fetching datas from network*/

  self.addEventListener("fetch", event => {
  	event.respondWith(
  		caches
  			.match(event.request, {ignoreSearch:true})
  			.then(response => {
      			return response || fetch(event.request);
    		})
  		);
  });
  

