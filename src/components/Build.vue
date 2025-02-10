<template>
  <section class="build">
    <h1>BUILDING A NEW OPEN ECOSYSTEM</h1>
    <div class="build__content">
      <div class="build__block">
        <NuxtImg
          class="build__img"
          src="/img/build-1.png"
          alt="Uncensored Open Source Models"
          format="webp"
          quality="40"
          loading="lazy"
        />
        <span>UNCENSORED OPEN SOURCE MODELS</span>
      </div>
      <div class="build__block">
        <NuxtImg
          class="build__img"
          src="/img/build-2.png"
          alt="Trustless Decentralized Interface"
          format="webp"
          quality="40"
          loading="lazy"
        />
        <span>TRUSTLESS DECENTRALIZED INTERFACE</span>
      </div>
      <div class="build__block">
        <NuxtImg
          class="build__img"
          src="/img/build-3.png"
          alt="On-Chain Agent Provenance"
          format="webp"
          quality="40"
          loading="lazy"
        />
        <span>ON-CHAIN AGENT PROVENANCE</span>
      </div>
    </div>
    <div class="build__actions">
      <a v-play-click-sound class="animated-link" href="#">Live demo</a>
      <a v-play-click-sound class="animated-link" href="#">Github</a>
    </div>
  </section>
  <span class="divider"></span>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.build {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  &__content {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    gap: 1rem;
  }

  &__block {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    text-align: center;
    font-size: 0.8rem;
  }

  &__actions {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;
  }

  h1 {
    text-align: center;
  }
}

@media (max-width: 1024px) {
  .build {
    padding-top: 3rem;
    padding-bottom: 3rem;

    &__content {
      flex-direction: column;
      align-items: center;
      margin-top: 2rem;
      margin-bottom: 2rem;
    }
  }
}
</style>
