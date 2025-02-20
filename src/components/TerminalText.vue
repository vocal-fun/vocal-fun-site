<template>
  <div v-viewport class="terminal h1" @enterViewport="restartTyping">
    <template v-for="(paragraph, pIndex) in paragraphs" :key="pIndex">
      <div class="paragraph">
        <template v-for="(word, wIndex) in paragraph" :key="wIndex">
          <span class="word">
            <template v-for="(char, cIndex) in word" :key="cIndex">
              <span class="char">{{ char }}</span>
              <span v-if="isCurrentChar(pIndex, wIndex, cIndex)" class="cursor"></span>
            </template>
          </span>
        </template>
      </div>
      <br v-if="pIndex < paragraphs.length - 1" />
    </template>
  </div>
</template>

<script setup lang="ts">
const INITIAL_DELAY = 0.15; // Delay before typing starts
const CHAR_DELAY = 0.015; // Delay between each character

const { text } = defineProps<{ text: string }>();

const paragraphs = computed(() =>
  text.split('\n').map((p) =>
    p
      .split(' ')
      .map((word) => [...word]) // Split word into characters
      .map((word) => [...word, ' ']) // Add space after each word
  )
);

const currentParagraphIndex = ref(0);
const currentWordIndex = ref(0);
const currentCharIndex = ref(0);
const isTyping = ref(false);

const isCurrentChar = (pIndex: number, wIndex: number, cIndex: number) =>
  pIndex === currentParagraphIndex.value &&
  wIndex === currentWordIndex.value &&
  cIndex === currentCharIndex.value;

const resetAnimation = () => {
  const chars = document.querySelectorAll('.char');
  chars.forEach((char) => char.classList.remove('entered'));

  currentParagraphIndex.value = 0;
  currentWordIndex.value = 0;
  currentCharIndex.value = 0;
};

const updateCursor = async () => {
  await nextTick();
  const chars = document.querySelectorAll('.char');
  const flatIndex = paragraphs.value
    .slice(0, currentParagraphIndex.value)
    .reduce(
      (acc, paragraph) =>
        acc +
        paragraph.reduce((sum, word) => sum + word.length, 0),
      0
    ) +
    paragraphs.value[currentParagraphIndex.value]
      .slice(0, currentWordIndex.value)
      .reduce((sum, word) => sum + word.length, 0) +
    currentCharIndex.value;

  const currentCharEl = chars[flatIndex];
  currentCharEl?.classList.add('entered');
};

const typeNext = () => {
  const currentParagraph = paragraphs.value[currentParagraphIndex.value];
  const currentWord = currentParagraph[currentWordIndex.value];

  if (currentCharIndex.value < currentWord.length - 1) {
    currentCharIndex.value++;
  } else if (currentWordIndex.value < currentParagraph.length - 1) {
    currentCharIndex.value = 0;
    currentWordIndex.value++;
  } else if (currentParagraphIndex.value < paragraphs.value.length - 1) {
    currentCharIndex.value = 0;
    currentWordIndex.value = 0;
    currentParagraphIndex.value++;
  } else {
    isTyping.value = false;
    return;
  }

  updateCursor();
  setTimeout(typeNext, CHAR_DELAY * 1000);
};

const startTyping = () => {
  if (isTyping.value) return;
  isTyping.value = true;

  setTimeout(typeNext, INITIAL_DELAY * 1000);
};

const restartTyping = () => {
  resetAnimation();
  startTyping();
};
</script>

<style scoped lang="scss">
.terminal {
  display: inline-block;
  position: relative;
  text-transform: uppercase;

  .paragraph:first-child > .word:first-child > .char:first-child {
    opacity: 1;
  }

  .word {
    display: inline-block;
    white-space: pre;
  }

  .char {
    position: relative;
    opacity: 0;
    transform-origin: left;
    display: inline-block;
    transition: opacity 0.1s ease-in;

    &.entered {
      opacity: 1;
    }
  }

  .cursor {
    position: absolute;
    margin-top: 4px;
    width: 1.5rem;
    height: 2.5rem;
    background-color: currentColor;
    animation: blink 1s steps(2, start) infinite;

    @media (max-width: 640px) {
      width: 1rem;
      height: 1.5rem;
      margin-top: 6px;
    }
  }
}

@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
</style>
