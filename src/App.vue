<script setup>
const moonImgUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Circle-front-color.png/640px-Circle-front-color.png'

// eslint-disable-next-line no-unused-vars
import { computed, ref } from 'vue';
import { AppState } from './AppState.js';
import { cheeseService } from './services/CheeseService.js';

const cheese = computed(() => AppState.cheese)
const clickAmount = computed(() => AppState.clickAmount)

function mine() {
  cheeseService.mine()
}
</script>

<template>
  <header>
  </header>
  <main>
    <section class="container">
      <div class="row">
        <div class="col-12">
          <div class="text-center">
            <img @click="mine()" :src="moonImgUrl" alt="A picture of the moon" role="button" class="moon-img"
                 title="Click to increase cheese total!">
            <p>{{ cheese }}</p>
          </div>
        </div>
      </div>
    </section>
    <section class="container"></section>
    <section class="container"></section>
  </main>
  <footer class=" text-center">
  </footer>
</template>

<style lang="scss">
@import "./assets/scss/main.scss";

.moon-img {
  filter: grayscale(15);
  opacity: 50%;
}
</style>
