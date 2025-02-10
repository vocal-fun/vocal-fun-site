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
      <MainLink type="secondary" :href="app">Live demo</MainLink>
      <a v-play-click-sound class="build__github animated-link" target="_blank" rel="noopener noreferrer" :href="github">
        <NuxtImg
          format="webp"
          sizes="48px"
          loading="lazy"
          src="/img/github.png"
          alt="Github Logo"
        />
        Github
      </a>
    </div>
  </section>
  <span class="divider"></span>
</template>

<script setup lang="ts">
import { socialMedia, mainAppUrl } from '~/consts';

const { github } = socialMedia;
const app = mainAppUrl;
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

  &__github {
    display: flex;
    gap: 0.5rem;

    > img {
      width: 20px;
      aspect-ratio: 1;
    }
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
