<template>
  <span class="text-field" :class="{ 'blink': withBlink, 'jerk': withJerk, 'long-jerk': withLongJerk }">
    <component :is="tag" class="text-field__text">
      <slot />
    </component>
  </span>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  tag?: string;
  withBlink?: boolean;
  withJerk?: boolean;
  withLongJerk?: boolean;
}>(), {
  tag: 'span',
  withBlink: false,
  withJerk: false,
  withLongJerk: false,
});
</script>

<style scoped lang="scss">
.text-field {
  --animation: none;
  padding: 0 2px;
  &.long-jerk {
    animation: textLongJerk 5s infinite;
  }

  &__text {
    display: inline-block;
    margin-left: 0;
    animation: var(--animation);
  }

  &.jerk {
    --animation: textJerk 50ms infinite;
  }

  &.blink {
    --animation: textBlink 30ms infinite;
  }

  &.jerk.blink {
    --animation: textBlink 30ms infinite, textJerk 50ms infinite;
  }
}
</style>
