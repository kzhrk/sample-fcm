// Push通知を受け取ると呼ばれる
self.addEventListener('push', function (event) {
  // メッセージを表示する
  const name = ((((event || {}).data || {}).json() || {}).data || {}).name || 'ふくろう';
  event.waitUntil(
    self.registration.showNotification(`${name}さんから`, {
      'body': 'メッセージが届いています。',
    })
  );
});
