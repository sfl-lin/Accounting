// 一個極簡的 Service Worker，用於滿足 PWA 安裝條件
self.addEventListener('install', (event) => {
  console.log('Service Worker installing.');
});

self.addEventListener('fetch', (event) => {
  // 我們不攔截請求，直接讓它通過到網路
  // 這對於內嵌 iframe 的 Google Apps Script 來說最穩定
  event.respondWith(fetch(event.request));
});