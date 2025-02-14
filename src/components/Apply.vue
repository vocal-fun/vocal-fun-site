<template>
  <section class="apply">
    <Splide v-bind="splideConfig">
      <SplideSlide v-for="item in data" :key="item.id">
        <NuxtImg
          sizes="(max-width: 768px) 40vw, 400px"
          format="webp"
          loading="lazy"
          :modifiers="{ width: 400, quality: 80 }"
          :src="item.url"
          :alt="`Image for Apply ${item.id} Slide`"
        />
      </SplideSlide>
    </Splide>
    <p v-if="false" class="h1">
      Inviting developers to build the next ecosystem of on-chain agents & off-chain applications powered by open source AI & crypto infrastructure.
    </p>
    <MainLink v-if="false" type="primary" :href="app">Apply now</MainLink>
  </section>
</template>

<script setup lang="ts">
import { SplideSlide, Splide, type SlideProps } from '@splidejs/vue-splide';
import { mainAppUrl } from '~/consts';

const data = Array.from({ length: 6 }, (_, index) => ({
  id: index + 1,
  url: `/img/apply-${index < 5 ? index + 1 : index - 2}.png`,
}));

const app = mainAppUrl;

const splideConfig: SlideProps = {
  options: {
    type: 'loop',
    perPage: 3.5,
    autoplay: true,
    interval: 4_000,
    pauseOnHover: true,
    arrows: false,
    pagination: true,
    focus: 'center',
    drag: true,
    trimSpace: false,
    speed: 1_000,
    easing: 'cubic-bezier(.42,.65,.27,.99)',
    lazyLoad: 'nearby',
    breakpoints: {
      480: {
        perPage: 1.5,
      },
      640: {
        perPage: 2.5,
      },
    },
  },
};
</script>

<style scoped lang="scss">
.apply {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 1rem 0;
  min-height: 30rem; // remove it later
  &__action {
    margin: 1rem 0;
    padding: 0.5rem 1rem;
    border: 1px solid var(--color-primary);
    border-radius: 0.5rem;
    color: var(--color-primary);
    text-decoration: none;
    text-transform: uppercase;
    transition: background-color 0.3s, color 0.3s;
    &:hover {
      background-color: var(--color-secondary-bg);
    }
  }
  p {
    text-align: center;
    margin: 1rem 0;
    padding: 0 2rem;
    text-transform: uppercase;
  }
}
</style>
