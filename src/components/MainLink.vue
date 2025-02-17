<template>
  <a
    v-play-click-sound
    class="link"
    target="_blank"
    rel="nofollow noopener"
    :class="type"
    :href="href"
  >
    <slot />
    <div v-if="isSecondary" class="link__arrow">
      <NuxtImg
        src="/img/arrow.svg"
        alt="Arrow"
        width="16"
        height="14"
        quality="100"
        format="webp"
        loading="lazy"
      />
    </div>
  </a>
</template>

<script setup lang="ts">
const props = defineProps<{
  type: 'primary' | 'secondary';
  href: string;
}>();

const isSecondary = computed(() => props.type === 'secondary');
</script>

<style scoped lang="scss">
.link {
  line-height: 2;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  border-radius: 100vw;
  color: var(--color-primary);
  letter-spacing: 0.005em;
  cursor: pointer;
  transition: background-color 0.3s;
  text-align: center;
  text-wrap-style: balance;

  &.primary,
  &.secondary {
    &:hover {
      background-color: #00FA0033;

      > .link__arrow {
        animation: arrow-move 1s infinite;
      }
    }
  }

  &.primary {
    background: #001400;
    border: 2px solid #00FA0033;
    box-shadow: 0px 0px 10.97px 0px #0ADC0F, 0px 1px 11.96px 0px #0ADC0F, 0px 0px 36px 0px #20FF2480 inset;
  }

  &.secondary {
    border: 2px solid var(--color-secondary-bg);
  }

  &__arrow {
    margin-left: 0.3rem;
    margin-top: 0.2rem;
  }
}

@keyframes arrow-move {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(0.3rem);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
