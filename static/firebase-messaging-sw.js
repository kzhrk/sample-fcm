// Push通知を受け取ると呼ばれる
self.addEventListener('push', function (event) {
  // メッセージを表示する
  event.waitUntil(
    self.registration.showNotification('Push通知のテスト送信', {
      'body': 'メッセージが届いています。',
    })
  );
});
