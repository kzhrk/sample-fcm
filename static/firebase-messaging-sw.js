// Push通知を受け取ると呼ばれる
self.addEventListener('push', function (event) {
  // メッセージを表示する
  event.waitUntil(
    self.registration.showNotification('Push通知のテスト送信', {
      'body': 'メッセージが届いています。',
    })
  );
});

self.addEventListener('notificationclick', function (event) {
  const url = 'https://example.com/';
  event.notification.close(); // Android needs explicit close.
  event.waitUntil(
    clients.matchAll({ type: 'window' }).then(windowClients => {
      // Check if there is already a window/tab open with the target URL
      for (let i = 0; i < windowClients.length; i++) {
        const client = windowClients[i];
        // If so, just focus it.
        console.log(client.url)
        if (/kakari-pharmacy\.medpeer\.jp/.test(client.url) && 'focus' in client) {
          client.focus();
          client.postMessage({
            type: 'PLAY_AUDIO',
            audioType: 'new-message'
          })
          return
        }
      }
      // If not, then open the target URL in a new window/tab.
      if (clients.openWindow) {
        return clients.openWindow(url);
      }
    })
  );
});
