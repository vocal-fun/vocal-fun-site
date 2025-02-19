<template>
  <section class="build">
    <TextField with-blink with-jerk with-long-jerk class="build__title" tag="h1">BUILDING A NEW OPEN ECOSYSTEM</TextField>
    <div class="build__content">
      <div class="build__block">
        <NuxtImg
          class="build__img"
          src="/img/build-1.png"
          alt="Uncensored Open Source Models"
          format="webp"
          quality="75"
          loading="lazy"
        />
        <TextField with-blink with-jerk with-long-jerk>UNCENSORED OPEN SOURCE MODELS</TextField>
      </div>
      <div class="build__block">
        <NuxtImg
          class="build__img"
          src="/img/build-2.png"
          alt="Trustless Decentralized Interface"
          format="webp"
          quality="75"
          loading="lazy"
        />
        <TextField with-blink with-jerk with-long-jerk>TRUSTLESS DECENTRALIZED INTERFACE</TextField>
      </div>
      <div class="build__block">
        <NuxtImg
          class="build__img"
          src="/img/build-3.png"
          alt="On-Chain Agent Provenance"
          format="webp"
          quality="75"
          loading="lazy"
        />
        <TextField with-blink with-jerk with-long-jerk>ON-CHAIN AGENT PROVENANCE</TextField>
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

  &__title {
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
      gap: 3rem;
      margin-top: 2rem;
      margin-bottom: 2rem;
    }
  }
}
</style>
