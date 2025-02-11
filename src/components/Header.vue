<template>
  <header class="header">
    <div class="socials">
      <a v-play-click-sound class="social shake-little" target="_blank" rel="noopener noreferrer" :href="socials.telegram">
        <NuxtImg
          class="telegram"
          src="/img/telegram.png"
          alt="Telegram Logo"
          format="webp"
          sizes="44px"
          loading="lazy"
        />
        TELEGRAM
      </a>
      <a v-play-click-sound class="social shake-little" target="_blank" rel="noopener noreferrer" :href="socials.twitter">
        <NuxtImg
          class="twitter"
          src="/img/twitter.png"
          alt="Twitter Logo"
          format="webp"
          sizes="48px"
          loading="lazy"
        />
        TWITTER
      </a>
    </div>

    <span class="logo">
      <span class="logo-bar"><span class="logo-bar-element"></span></span>
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
      <span class="logo-bar"><span class="logo-bar-element"></span></span>
    </span>

    <span class="app-link">
      <a v-play-click-sound class="hoverable-link" target="_blank" rel="noopener noreferrer" :href="app">Open app</a>
    </span>
  </header>
  <span class="divider"></span>
</template>

<script setup lang="ts">
import { socialMedia, mainAppUrl } from '~/consts';

const socials = socialMedia;
const app = mainAppUrl;
</script>

<style scoped lang="scss">
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 1.25rem;

  .logo {
    flex: 1;
    margin: 0.5rem;
    font-size: 1.2rem;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    text-transform: uppercase;

    &-bar {
      flex: 1;
      display: flex;
      flex-direction: row;
      border-radius: 4px;
      padding: 2px;
      background-color: var(--color-secondary-bg);
      max-width: 6rem;

      &:first-child {
        margin-right: 2px;
      }

      &-element {
        flex: 1;
        width: 100%;
        border-radius: 2px;
        height: 0.5rem;
        background: linear-gradient(180deg, #87FF8A 0%, #87FF8A 20%, #FFFFFF 21%, #FFFFFF 40%, #016B01 41%, #016B01 60%, #16EE14 61%, #16EE14 80%, #87FF8A 81%, #87FF8A 100%);
      }
    }
  }

  .socials {
    flex: 1;
    display: flex;
    flex-direction: row;
    gap: 10px;
    text-transform: uppercase;

    a.social {
      display: inline-flex;
      align-items: center;
      cursor: pointer;
      box-shadow: -3.17px -3.17px 0px 0px #43A761 inset,
                  -1.58px -1.58px 0px 0px #43A761 inset,
                  3.17px 3.17px 0px 0px #43A761 inset,
                  1.58px 1.58px 0px 0px #1A7034 inset,
                  -1.58px -1.58px 0px 0px #54B170 inset;
      padding: .375rem;
      color: var(--color-primary);
      background: var(--color-secondary-bg);

      img {
        margin-right: .1875rem;
        display: block;
      }

      .telegram {
        width: 20px;
        aspect-ratio: 57 / 49;
      }

      .twitter {
        width: 22px;
        aspect-ratio: 89 / 70;
      }
    }
  }

  .app-link {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    > a {
      text-shadow: var(--text-shadow-primary);
    }
  }
}

@media (max-width: 840px) {
  .header {
    flex-direction: column;
    gap: 1rem;
    height: auto;
    margin: 1.25em 0;

    .socials {
      gap: 0.5rem;
    }

    .logo {
      width: 100%;
      margin: 0;
      justify-content: center;
    }
  }
}
</style>
