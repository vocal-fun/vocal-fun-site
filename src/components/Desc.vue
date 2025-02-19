<template>
  <section class="desc">
    <div class="desc-card">
      <div class="desc-card__info">
        <span class="desc-card__title">REALTIME CONVERSATION</span>
        <span class="desc-card__desc">Talk with uncensored AI agents</span>
      </div>
      <div class="desc-card__actions">
        <MainLink type="secondary" :href="app">Use now</MainLink>
        <a v-play-click-sound class="animated-link" target="_blank" rel="noopener noreferrer" :href="socials.twitter">Community convos</a>
      </div>
      <div class="desc-card__img">
        <NuxtImg
          src="/img/example.png"
          alt="Realtime conversation example"
          format="webp"
          loading="lazy"
          quality="80"
          sizes="90vw md:500px"
        />
      </div>
    </div>
    <div class="desc-card">
      <div class="desc-card__info">
        <span class="desc-card__title">DEVELOPER TOOLKIT</span>
        <span class="desc-card__desc">Develop your own conversational agents</span>
      </div>
      <div class="desc-card__actions">
        <MainLink type="secondary" :href="app">Use now</MainLink>
        <a v-play-click-sound class="animated-link" target="_blank" rel="noopener noreferrer" :href="socials.github">Documentation</a>
      </div>
      <div class="desc-card__img">
        <NuxtImg
          src="/img/code.png"
          alt="Developer toolkit example"
          format="webp"
          loading="lazy"
          quality="80"
          sizes="90vw md:500px"
        />
      </div>
    </div>
  </section>
  <span class="divider"></span>
</template>

<script setup lang="ts">
import { mainAppUrl, socialMedia } from '~/consts';

const socials = socialMedia;
const app = mainAppUrl;
</script>

<style scoped lang="scss">
.desc {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 2rem 10vw;
  margin-top: calc(-10vw - 2rem);

  &-card {
    width: 80vw;
    z-index: 1;
    background-color: var(--color-background);
    display: grid;
    grid-template-areas: 
      "info img"
      "actions img";
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 2rem;
    border: 1px solid var(--color-primary);
    padding: 2rem;

    &__info {
      grid-area: info;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: baseline;
      gap: 3rem;
    }

    &__img {
      grid-area: img;
    }

    &__title {
      text-shadow: var(--text-shadow-primary);
      border: 1px solid var(--color-primary);
      padding: 0.5rem 1rem;
      text-align: center;
    }

    &__desc {
      font-size: 1.2rem;
    }

    &__actions {
      grid-area: actions;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      gap: 1rem;
    }

    @media (max-width: 1024px) {
      width: 60vw;
      grid-template-areas: 
        "info"
        "img"
        "actions";
      grid-template-columns: 1fr;

      &:first-child {
        margin-bottom: 2rem;
      }

      &__info {
        align-items: center;
        gap: 2rem;
      }

      &__actions {
        justify-content: center;
      }

      &__desc {
        text-align: center;
      }
    }

    @media (max-width: 768px) {
      width: 90vw;
    }

    @media (max-width: 620px) {
      gap: 2rem;

      &__info {
        gap: 1rem;
      }

      &__actions {
        flex-direction: column;
        gap: 1rem;
      }

      &__desc {
        font-size: 1rem;
      }
    }
  }
}
</style>
