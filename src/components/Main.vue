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
      <Splide ref="splideRef" class="main-carousel" v-bind="splideConfig">
        <SplideSlide v-for="agent in agents" :key="agent.id">
          <NuxtImg
            sizes="(max-width: 768px) 40vw, 400px"
            format="webp"
            loading="lazy"
            :modifiers="{ width: 400, quality: 80 }"
            :src="agent.url"
            :alt="`Agent ${agent.id} Image`"
          />
        </SplideSlide>
      </Splide>
    </div>
    <p class="p1">for the open tokenized world</p>
  </section>
  <span class="divider"></span>
</template>

<script setup lang="ts">
import { SplideSlide, Splide, type SlideExposed, type SlideProps } from '@splidejs/vue-splide';

const splideRef = shallowRef<SlideExposed | null>(null);

const agents = Array.from({ length: 8 }, (_, index) => ({
  id: index + 1,
  url: `/img/agents/${index + 1}.png`,
}));

const splideConfig: SlideProps = {
  options: {
    type: 'loop',
    perPage: 5,
    autoplay: true,
    interval: 3_000,
    updateOnMove: true,
    pauseOnHover: true,
    arrows: false,
    pagination: false,
    focus: 'center',
    drag: false,
    trimSpace: false,
    speed: 1_000,
    easing: 'cubic-bezier(.42,.65,.27,.99)',
    lazyLoad: 'nearby',
    breakpoints: {
      640: {
        perPage: 3,
      },
    },
  },
};

onMounted(() => {
  splideRef.value?.go(3);
});
</script>

<style lang="scss">
$carousel-transition: 0.3s;
$carousel-opacity-inactive: 0.6;
$carousel-opacity-active: 0.95;
$carousel-opacity-near: 0.8;

.main-carousel .splide__slide {
  transition: opacity $carousel-transition ease, transform $carousel-transition ease;
  // Mobile
  transform: scale(1) rotateY(0deg);
  opacity: $carousel-opacity-inactive;
  &.is-active {
    transform: scale(1.05) rotateY(0deg);
    opacity: $carousel-opacity-inactive;
  }
  &.is-next {
    transform: scale(1) rotateY(10deg);
  }
  &.is-prev {
    transform: scale(1) rotateY(-10deg);
  }
  // Desktop
  @media (min-width: 640px) {
    opacity: 0;
    transform: scale(0.7) rotateY(0deg) translateX(0);
    &.is-active {
      transform: translateX(-1rem) scale(1) rotateY(0deg);
      opacity: $carousel-opacity-active;
    }
    &.is-next {
      opacity: $carousel-opacity-near;
      transform: translateX(0) rotateY(10deg) scale(0.9);
      + .splide__slide {
        opacity: $carousel-opacity-inactive;
        transform-origin: center left;
        transform: translateX(0) rotateY(15deg) scale(0.8);
      }
      // In case there will be 7 slides
      // + .splide__slide + .splide__slide {
      //   opacity: $carousel-opacity-inactive;
      //   transform-origin: center left;
      //   transform: translateX(-1rem) rotateY(20deg) scale(0.7);
      // }
    }
    &.is-prev {
      opacity: $carousel-opacity-near;
      transform-origin: center right;
      transform: translateX(-2rem) rotateY(-10deg) scale(0.9);
    }
    &:has(+ .splide__slide.is-prev) {
      opacity: $carousel-opacity-inactive;
      transform-origin: center right;
      transform: translateX(-2rem) rotateY(-15deg) scale(0.8);
    }
    // In case there will be 7 slides
    // &:has(+ .splide__slide + .splide__slide.is-prev) {
    //   opacity: $carousel-opacity-inactive;
    //   transform-origin: center right;
    //   transform: translateX(-1rem) rotateY(-20deg) scale(0.7);
    // }
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
