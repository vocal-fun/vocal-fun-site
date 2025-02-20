<template>
  <section class="own scanlines">
    <ClientOnly>
      <TerminalText :text="text" />
    </ClientOnly>
  </section>
  <span class="divider"></span>
</template>

<script setup lang="ts">
const text = 'Vocal.fun empowers creators to build and monetize AI,\n' +
  'from DeFi ADVISORS to anime WAIFU companions. Powered by open models and trustless tech,\n' +
  'the future of ai IS OPEN AND decentralized.\n' +
  'own it.';
</script>

<style scoped lang="scss">
.own {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: baseline;
  min-height: 90svh;
  padding: 2rem 20vw;
}
@media (max-width: 1024px) {
  .own {
    padding: 2rem 1rem;
  }
}
</style>
