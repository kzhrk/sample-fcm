<template>
  <div>
    <h1>Push送信ページ</h1>
  </div>
</template>

<script lang="ts">
import axios from 'axios';

export default {
  asyncData({ query }: any) {
    const token = query.token;

    axios({
      method: 'post',
      url: 'https://fcm.googleapis.com/fcm/send',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `key=${process.env.SERVER_KEY}`
      },
      data: {
        notification: {
          "title": "タイトルが入ります",
          "body": "本文が入ります",
          "icon": "https://placekitten.com/200/200",
          "click_action": "https://example.com/"
        },
        "to": token
      }
    }).catch(err => console.log(err));
  }
}
</script>

