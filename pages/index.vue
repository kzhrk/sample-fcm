<template>
  <div>
    <button :disabled="queryToken === ''" @click="onClick">Push通知テスト</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, ref } from '@nuxtjs/composition-api';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

export default defineComponent({
  name: 'IndexPage',
  layout: 'default',
  setup() {
    const queryToken = ref('');

    onBeforeMount(async () => {
      if (process.client) {
        const messaging = getMessaging();
        const token = await getToken(
          messaging,
          {
            vapidKey: 'BFy5Ht-q_xjlzOO8rdJBkNBzgP6-FyvgGRrF5pZMxy_iAHP06BQ-wCQHb-U-d50SoELPGUxiGFQ41jC1ItjpJg8'
          }
        ).catch(err => {
          console.log(err);
        });

        if (token) {
          queryToken.value = token;
        }

        onMessage(messaging, (payload) => {
          console.log('get message');
          console.log('Message received. ', payload);
          // ...
        });
      }
    })

    function onClick() {
      window.open(`/request?token=${queryToken.value}`)
    }

    return {
      queryToken,
      onClick
    }
  }
})
</script>
