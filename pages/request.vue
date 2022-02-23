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
        'Authorization': 'key=AAAArw5ihSI:APA91bEXIW08-cF9Gk3v3WsfBkKRZhCgftxVyAVc30PvB5boqXuzK-TsGRcvOfjbFMX1t9rzTS-0qcdYWtiu-0Se9EOieXkGo7TThCDlfTe5v05jrOTixTJQnb2HwGae9l_MyIPmSgOE'
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

