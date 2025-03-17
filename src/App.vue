<script setup>
const moonImgUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Circle-front-color.png/640px-Circle-front-color.png'

// eslint-disable-next-line no-unused-vars
import { computed, ref } from 'vue';
import { AppState } from './AppState.js';
import { cheeseService } from './services/CheeseService.js';


const cheese = computed(() => AppState.cheese)
const clickUpgrades = computed(() => AppState.clickUpgrades)
const autoUpgrades = computed(() => AppState.autoUpgrades)

// const upgradeMultiplier = computed(() => {

// })

function mine() {
  cheeseService.mine()
}

function buyClickUpgrade(upgrade) {
  cheeseService.buyClickUpgrade(upgrade)
}

function buyAutoUpgrade(upgrade) {
  cheeseService.buyAutoUpgrade(upgrade)
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
            <p class="fs-2">Cheese: {{ cheese }}</p>
          </div>
        </div>
      </div>
    </section>
    <section class="container">
      <div class="row">
        <div class="col-6">
          <div v-for="upgrade in clickUpgrades" :key="upgrade.id" class="fs-3 mb-2 d-flex justify-content-between">
            <div>
              <button @click="buyClickUpgrade(upgrade)" class="btn border border-indigo rounded-pill fs-3" type="button" :title="'Buy ' + upgrade.name">
                <span class="mdi mdi-cheese text-indigo">{{ upgrade.price }}</span>
              </button>
              <span>{{ upgrade.emoji }}</span>
              <span class="ms-1 mdi-plus-circle-outline">{{ upgrade.multiplier * upgrade.quantity }} per click</span>
            </div>
            <div class="d-block">
              <span class="me-1"> {{ upgrade.quantity }} owned</span>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div v-for="upgrade in autoUpgrades" :key="upgrade.id" class="fs-3 mb-2 d-flex justify-content-between">
            <div>
              <button @click="buyAutoUpgrade(upgrade)" class="btn border border-indigo rounded-pill fs-3" type="button" :title="'Buy ' + upgrade.name">
                <span class="mdi mdi-cheese text-indigo">{{ upgrade.price }}</span>
              </button>
              <span>{{ upgrade.emoji }}</span>
              <span class="ms-1 mdi-plus-circle-outline">{{ upgrade.multiplier * upgrade.quantity }} / 3s</span>
            </div>
            <div class="d-block">
              <span class="me-1"> {{ upgrade.quantity }} owned</span>
            </div>
          </div>

        </div>
      </div>
    </section>
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
