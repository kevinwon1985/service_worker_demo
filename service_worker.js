/**
 * 在这个地址调试启动 chrome://serviceworker-internals/
 */

self.addEventListener('install', event => {
  console.log('service worker install', event);
});

self.addEventListener('activate', event => {
  console.log('service worker activate', event);
});

self.addEventListener('fetch', event => {
  console.log('service worker fetch', event);
});