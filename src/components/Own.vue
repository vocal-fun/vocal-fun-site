<template>
  <section class="own scanlines">
    <ClientOnly>
      <TerminalText :text="text" />
    </ClientOnly>
  </section>
  <span class="divider"></span>
</template>

<script setup lang="ts">
const text = 'VOCAL.FUN IS THE LAUNCHPAD FOR AI VOICE AGENTS.\n' +
  'CREATE, MONETIZE, AND SCALE YOUR AGENTS FROM DEFI ADVISORS TO ANIME WAIFUS.\n' +
  'THE FUTURE OF AI IS OPEN AND DECENTRALIZED.\n' +
  'LAUNCH YOUR AI TODAY.';
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
