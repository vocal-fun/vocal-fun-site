<template>
  <section class="apply">
    <Carousel v-bind="carouselConfig">
      <Slide v-for="item in data" :key="`apply-${item.id}`">
        <NuxtImg
          sizes="(max-width: 768px) 40vw, 400px"
          format="webp"
          quality="40"
          loading="lazy"
          :modifiers="{ width: 400, quality: 80 }"
          :src="item.url"
          :alt="`Image for Apply ${item.id} Slide`"
        />
      </Slide>
      <!-- <template #addons>
        <Pagination />
      </template> -->
    </Carousel>
    <p class="h1">
      Inviting developers to build the next ecosystem of on-chain agents & off-chain applications powered by open source AI & crypto infrastructure.
    </p>
    <MainLink type="primary" href="#">Apply now</MainLink>
  </section>
</template>

<script setup lang="ts">
import { type CarouselConfig } from 'vue3-carousel';

const data = Array.from({ length: 6 }, (_, index) => ({
  id: index + 1,
  url: `/img/apply-${index < 5 ? index + 1 : index - 2}.png`,
}));

const carouselConfig: Partial<CarouselConfig> = {
  itemsToShow: 3.5,
  gap: 2,
  autoplay: 4000,
  wrapAround: true,
  pauseAutoplayOnHover: true,
  snapAlign: 'center',
  breakpoints: {
    300: {
      itemsToShow: 1.5,
    },
    480: {
      itemsToShow: 2.5,
    },
    640: {
      itemsToShow: 3.5,
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
