if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,a)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const r=e=>i(e,t),o={module:{uri:t},exports:c,require:r};s[t]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(a(...e),c)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"5a43c952e6d2de0ed10042b4b9eaaef8"},{url:"/_next/static/LzxiyEVRpJLxFHd4hvkhm/_buildManifest.js",revision:"d55e9af8de3e5e337085ed59f4662636"},{url:"/_next/static/LzxiyEVRpJLxFHd4hvkhm/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/0e762574-4f3697314320a0c6.js",revision:"LzxiyEVRpJLxFHd4hvkhm"},{url:"/_next/static/chunks/215-5b9740fa7e734900.js",revision:"LzxiyEVRpJLxFHd4hvkhm"},{url:"/_next/static/chunks/331-0985da5168ca00a2.js",revision:"LzxiyEVRpJLxFHd4hvkhm"},{url:"/_next/static/chunks/402-49a5fe1e0575b35a.js",revision:"LzxiyEVRpJLxFHd4hvkhm"},{url:"/_next/static/chunks/42-1160aaa07bb13ea6.js",revision:"LzxiyEVRpJLxFHd4hvkhm"},{url:"/_next/static/chunks/4bd1b696-4c9dcbb5e71e354a.js",revision:"LzxiyEVRpJLxFHd4hvkhm"},{url:"/_next/static/chunks/66ec4792-c425be9eb4a4f60f.js",revision:"LzxiyEVRpJLxFHd4hvkhm"},{url:"/_next/static/chunks/712-61c7ec3f0ef06653.js",revision:"LzxiyEVRpJLxFHd4hvkhm"},{url:"/_next/static/chunks/755-2ebfd3d3f8f6d033.js",revision:"LzxiyEVRpJLxFHd4hvkhm"},{url:"/_next/static/chunks/795d4814-d1ea51e677e1d0f4.js",revision:"LzxiyEVRpJLxFHd4hvkhm"},{url:"/_next/static/chunks/803-f406a5190f0c0ec2.js",revision:"LzxiyEVRpJLxFHd4hvkhm"},{url:"/_next/static/chunks/884-52a736559f370737.js",revision:"LzxiyEVRpJLxFHd4hvkhm"},{url:"/_next/static/chunks/930-acce0c283058921b.js",revision:"LzxiyEVRpJLxFHd4hvkhm"},{url:"/_next/static/chunks/9c4e2130-0bb4ddfad6ff2c61.js",revision:"LzxiyEVRpJLxFHd4hvkhm"},{url:"/_next/static/chunks/aaea2bcf-8c52dc427aa76435.js",revision:"LzxiyEVRpJLxFHd4hvkhm"},{url:"/_next/static/chunks/app/(site)/page-9b90d9cd8d37dfac.js",revision:"LzxiyEVRpJLxFHd4hvkhm"},{url:"/_next/static/chunks/app/_not-found/page-e0e9b01deae6befc.js",revision:"LzxiyEVRpJLxFHd4hvkhm"},{url:"/_next/static/chunks/app/api/auth/%5B...nextauth%5D/route-ededf97f9a1dfad8.js",revision:"LzxiyEVRpJLxFHd4hvkhm"},{url:"/_next/static/chunks/app/api/conversations/%5BconversationId%5D/route-96c8869c38b22568.js",revision:"LzxiyEVRpJLxFHd4hvkhm"},{url:"/_next/static/chunks/app/api/conversations/%5BconversationId%5D/seen/route-c9fda2c3dcb005d5.js",revision:"LzxiyEVRpJLxFHd4hvkhm"},{url:"/_next/static/chunks/app/api/conversations/route-564c91c9b84a85e3.js",revision:"LzxiyEVRpJLxFHd4hvkhm"},{url:"/_next/static/chunks/app/api/messages/route-dcbc8e05aeba16ad.js",revision:"LzxiyEVRpJLxFHd4hvkhm"},{url:"/_next/static/chunks/app/api/register/route-c354320532377a39.js",revision:"LzxiyEVRpJLxFHd4hvkhm"},{url:"/_next/static/chunks/app/api/settings/route-0dae7ca461260767.js",revision:"LzxiyEVRpJLxFHd4hvkhm"},{url:"/_next/static/chunks/app/conversations/%5BconversationId%5D/page-5da769f928313f4c.js",revision:"LzxiyEVRpJLxFHd4hvkhm"},{url:"/_next/static/chunks/app/conversations/layout-658adc29e3406039.js",revision:"LzxiyEVRpJLxFHd4hvkhm"},{url:"/_next/static/chunks/app/conversations/loading-74169e1650c9ae75.js",revision:"LzxiyEVRpJLxFHd4hvkhm"},{url:"/_next/static/chunks/app/conversations/page-ab7a5dcbd66c3803.js",revision:"LzxiyEVRpJLxFHd4hvkhm"},{url:"/_next/static/chunks/app/layout-f487fbb4d54d50f1.js",revision:"LzxiyEVRpJLxFHd4hvkhm"},{url:"/_next/static/chunks/app/users/layout-ee91490513f630b1.js",revision:"LzxiyEVRpJLxFHd4hvkhm"},{url:"/_next/static/chunks/app/users/loading-9b4383fe745e0e52.js",revision:"LzxiyEVRpJLxFHd4hvkhm"},{url:"/_next/static/chunks/app/users/page-5eefa740cf6ce77a.js",revision:"LzxiyEVRpJLxFHd4hvkhm"},{url:"/_next/static/chunks/ee560e2c-740d72ce5e3434d2.js",revision:"LzxiyEVRpJLxFHd4hvkhm"},{url:"/_next/static/chunks/f7333993-d4a5d448c579d2b5.js",revision:"LzxiyEVRpJLxFHd4hvkhm"},{url:"/_next/static/chunks/framework-00a8ba1a63cfdc9e.js",revision:"LzxiyEVRpJLxFHd4hvkhm"},{url:"/_next/static/chunks/main-51615dfb7ee587e3.js",revision:"LzxiyEVRpJLxFHd4hvkhm"},{url:"/_next/static/chunks/main-app-a451147f2ee9aa0a.js",revision:"LzxiyEVRpJLxFHd4hvkhm"},{url:"/_next/static/chunks/pages/_app-037b5d058bd9a820.js",revision:"LzxiyEVRpJLxFHd4hvkhm"},{url:"/_next/static/chunks/pages/_error-6ae619510b1539d6.js",revision:"LzxiyEVRpJLxFHd4hvkhm"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-bdea6f8210b053da.js",revision:"LzxiyEVRpJLxFHd4hvkhm"},{url:"/_next/static/css/741b8559dec050ae.css",revision:"741b8559dec050ae"},{url:"/_next/static/media/4473ecc91f70f139-s.p.woff",revision:"78e6fc13ea317b55ab0bd6dc4849c110"},{url:"/_next/static/media/463dafcda517f24f-s.p.woff",revision:"cbeb6d2d96eaa268b4b5beb0b46d9632"},{url:"/file.svg",revision:"d09f95206c3fa0bb9bd9fefabfd0ea71"},{url:"/globe.svg",revision:"2aaafa6a49b6563925fe440891e32717"},{url:"/icons/icon-192x192.png",revision:"e86ed21db46a59c342ccf32384dfa943"},{url:"/icons/icon-512x512.png",revision:"0b402344eea1940269dd17824485ba91"},{url:"/images/logo.png",revision:"144b5a89501a562d4e9b3666750fdbba"},{url:"/images/placeholder.jpg",revision:"09932d15466290be999cbb5e494522b8"},{url:"/manifest.json",revision:"0a6e16939753d7897d0228ce11aa8d37"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"c0af2f507b369b085b35ef4bbe3bcf1e"},{url:"/window.svg",revision:"a2760511c65806022ad20adf74370ff3"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));