var swVersion="v5",CACHE_FILES={},CACHE_IMAGES={},CACHE_OTHER={};CACHE_FILES.name="otsu.pl-files-cache-"+swVersion,CACHE_IMAGES.name="otsu.pl-images-cache-"+swVersion,CACHE_OTHER.name="otsu.pl-other-cache-"+swVersion;var otsu_caches=[CACHE_FILES,CACHE_IMAGES,CACHE_OTHER],cache_whitelist=[CACHE_FILES.name,CACHE_IMAGES.name,CACHE_OTHER.name];CACHE_OTHER.urls=[],CACHE_FILES.urls=["/","/o-nas","/cennik","/kontakt","/FAQ","/zamow","/polityka-prywatnosci","/css/about.css","/css/aos.css","/css/contact.css","/css/getstarted.css","/css/index.css","/css/main.css","/css/nav.css","/css/order.css","/css/prices.css","/css/privacy.css","/css/slider.css","/js/analytics.js","/js/aos.js","/js/more.js","/js/nav.js","/js/slider.js","/js/tutorial-change.js"],CACHE_IMAGES.urls=["/img/aboutphoto/maciej.jpg","/img/aboutphoto/radoslaw.jpg","/img/logo/200px/full-transp-black.png","/img/logo/full-transp-black.png","/img/logo/logo-black.png","/img/slider/min/1.jpg","/img/slider/min/2.jpg","/img/slider/min/3.jpg","/img/slider/middle/1.jpg","/img/slider/middle/2.jpg","/img/slider/middle/3.jpg","/img/slider/max/1.jpg","/img/slider/max/2.jpg","/img/slider/max/3.jpg","/img/tutorial/android/step1.jpg","/img/tutorial/android/step2.jpg","/img/tutorial/windows/step1.jpg","/img/tutorial/windows/step2.jpg","/img/tutorial/windows/step3.jpg","/img/tutorial/windows/step4.jpg","/img/tutorial/windows/step5.jpg","/img/tutorial/windows/step6.jpg","/img/tutorial/ios/step1.jpg","/img/tutorial/ios/step2.jpg","/img/tutorial/ios/step3.jpg"],self.addEventListener("install",function(s){s.waitUntil(Promise.all(otsu_caches.map(function(s){return caches.open(s.name).then(function(e){return console.log("Opened cache"),e.addAll(s.urls)})})))}),self.addEventListener("fetch",function(s){s.respondWith(caches.match(s.request).then(function(e){if(e)return e;var i=s.request.clone();return fetch(i).then(function(e){if(!e||200!==e.status||"basic"!==e.type)return e;var i=e.clone();return caches.open(CACHE_OTHER.name).then(function(e){e.put(s.request,i)}),e})}))}),self.addEventListener("activate",function(s){s.waitUntil(caches.keys().then(function(s){return Promise.all(s.map(function(s){if(!cache_whitelist.includes(s))return caches.delete(s)}))}))});