<template>
  <a class="footer-link" :href="href" :target="target" rel="noopener noreferrer">
    <NuxtImg
      v-if="hasIcon"
      class="footer-link__icon"
      format="webp"
      sizes="48px"
      loading="lazy"
      :class="type"
      :src="iconSrc"
      :alt="`${type} social media icon`"
    />
    <span v-if="text">{{ text }}</span>
  </a>
</template>

<script setup lang="ts">
// import { icons } from '~/consts';
import type { SocialMediaKey } from '~/types';

const props = defineProps<{
  href: string;
  type?: SocialMediaKey;
  text?: string;
}>();

const hasIcon = computed(() => !!props.type && ['telegram', 'twitter', 'github'].includes(props.type));

const iconSrc = computed(() => hasIcon.value ? `/img/${props.type}.png` : '');

const target = computed(() => props.href.startsWith('mailto:') ? '_self' : '_blank');
</script>

<style scoped lang="scss">
.footer-link {
  display: inline-flex;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border: 1px solid var(--color-secondary-bg);
  border-radius: 100px;
  transition: transform 0.3s ease-in-out;

  &__icon {
    &.telegram {
      width: 20px;
      aspect-ratio: 57 / 49;
    }
    &.twitter {
      width: 22px;
      aspect-ratio: 89 / 70;
    }
    &.github {
      width: 20px;
      aspect-ratio: 1;
    }
  }

  &:hover {
    transform: scale(1.1);
  }
}

@media (max-width: 410px) {
  .footer-link {
    padding: 0.5rem;
  }
}
</style>
