<template>
  <nuxt />
</template>

<script lang="ts">
export default {
  head() {
    return {
      link: [{
        rel: 'manifest',
        href: '/manifest.json'
      }]
    }
  }
}
</script>
