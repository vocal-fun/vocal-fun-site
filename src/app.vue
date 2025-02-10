<template>
  <Header />
  <NuxtPage />
  <Footer />
</template>

<script setup lang="ts">
import { audioService } from './services/audio';

onBeforeMount(async () => {
  audioService.initCache();
});

onBeforeUnmount(() => {
  audioService.clearCache();
});
</script>
