<template>
  <footer class="footer">
    <span class="logo h3">
      <NuxtImg
        class="shake-little shake-constant"
        src="/logo/logo.png"
        alt="Logo"
        width="24"
        height="24"
        format="webp"
        sizes="48px"
        loading="lazy"
      />
      vocal.fun
    </span>
    <div v-once class="footer__links">
      <FooterLink
        v-for="link in footerLinks"
        :key="link.href"
        :aria-label="`Visit ${link.href}`"
        :type="link.type"
        :text="link.text"
        :href="link.href"
      />
    </div>
  </footer>
</template>

<script setup lang="ts">
import { socialMediaArray, mainAppUrl } from '~/consts';
import type { SocialMediaKey } from '~/types';

type FooterLink = { type?: SocialMediaKey; href: string; text?: string };

const footerLinks: FooterLink[] = [...socialMediaArray, { type: undefined, href: mainAppUrl, text: '$VOCAL' }];
</script>

<style scoped lang="scss">
.footer {
  border-top: 2px solid var(--color-secondary-bg);
  background-color: #000;
  margin: 0 2rem 1.5rem;
  padding-top: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  .logo {
    text-transform: uppercase;
    display: flex;
    gap: 0.5rem;
  }

  &__links {
    display: flex;
    gap: 0.8rem;
  }
}

@media (max-width: 768px) {
  .footer {
    flex-direction: column;
    gap: 1.6rem;
  }
}
</style>
