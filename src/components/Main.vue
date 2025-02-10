<template>
  <section class="main">
    <h1>VOICE AGENT FRAMEWORK</h1>
    <div class="main-carousel__container">
      <NuxtImg
        class="main-bg shake shake-constant"
        src="/img/main-bg.png"
        alt="Main Background"
        format="webp"
        quality="10"
      />
      <Carousel ref="carouselRef" class="main-carousel" v-bind="carouselConfig">
        <Slide v-for="agent in agents" :key="agent.id">
          <NuxtImg
            sizes="(max-width: 768px) 40vw, 400px"
            format="webp"
            loading="lazy"
            :modifiers="{ width: 400, quality: 80 }"
            :src="agent.url"
            :alt="`Agent ${agent.id} Image`"
          />
        </Slide>
        <!-- <template #addons>
          <Navigation />
        </template> -->
      </Carousel>
    </div>
    <p class="p1">for the open tokenized world</p>
  </section>
  <span class="divider"></span>
</template>

<script setup lang="ts">
import type { CarouselConfig, CarouselExposed } from 'vue3-carousel';

const carouselRef = shallowRef<CarouselExposed | null>(null);

const agents = Array.from({ length: 8 }, (_, index) => ({
  id: index + 1,
  url: `/img/agents/${index + 1}.png`,
}));

const carouselConfig: Partial<CarouselConfig> = {
  itemsToShow: 5,
  gap: 5,
  autoplay: 4000,
  wrapAround: true,
  pauseAutoplayOnHover: true,
  snapAlign: 'center',
  breakpoints: {
    200: {
      itemsToShow: 3,
    },
    640: {
      itemsToShow: 5,
    },
  },
};

onMounted(() => {
  carouselRef.value?.slideTo(3);
});
</script>

<style lang="scss">
.main-carousel {
  .carousel__slide {
    opacity: var(--carousel-opacity-inactive);
    transform: translateX(10px) rotateY(-12deg) scale(0.7);
  }

  .carousel__slide--prev {
    opacity: var(--carousel-opacity-near);
    transform: rotateY(-10deg) scale(0.9);
  }

  .carousel__slide:has(~ .carousel__slide--prev) {
    opacity: var(--carousel-opacity-inactive);
    transform: translateX(20px) rotateY(-12deg) scale(0.8);
  }

  .carousel__slide--active {
    opacity: var(--carousel-opacity-active);
    transform: rotateY(0) scale(1);
  }

  .carousel__slide--next {
    opacity: var(--carousel-opacity-near);
    transform: rotateY(10deg) scale(0.9);
  }

  .carousel__slide--next ~ .carousel__slide {
    opacity: var(--carousel-opacity-inactive);
    transform: translateX(-20px) rotateY(12deg) scale(0.8);
  }
}
</style>

<style scoped lang="scss">
.main {
  background: var(--gradient-bg);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  &-carousel__container {
    position: relative;
  }

  &-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  h1 {
    border: 1px solid var(--color-secondary-bg);
    padding: 0.5rem 1rem;
  }

  h1, .p1 {
    text-align: center;
  }

  .p1 {
    margin-bottom: 10vw;
  }
}

@media (max-width: 840px) {
  .main {
    min-height: 85svh;
  }
}

@media (max-width: 768px) {
  .main {
    min-height: 30rem;
  }
}
</style>
