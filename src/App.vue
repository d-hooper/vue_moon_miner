<script setup>
const moonImgUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Circle-front-color.png/640px-Circle-front-color.png'


import { computed, onMounted } from 'vue';
import { AppState } from './AppState.js';
import { cheeseService } from './services/CheeseService.js';


const cheese = computed(() => AppState.cheese)
const clickUpgrades = computed(() => AppState.clickUpgrades)
const autoUpgrades = computed(() => AppState.autoUpgrades)

const clickUpgradeTotal = computed(() => {
  let clickUpgradeTotal = 0
  clickUpgrades.value.forEach(upgrade => {
    clickUpgradeTotal += (upgrade.quantity * upgrade.multiplier)
  })
  return clickUpgradeTotal
})

const autoUpgradeTotal = computed(() => {
  let autoUpgradeTotal = 0
  autoUpgrades.value.forEach(upgrade => {
    autoUpgradeTotal += (upgrade.quantity * upgrade.multiplier)
  })
  return autoUpgradeTotal
})

function autoMine() {
  AppState.cheese += autoUpgradeTotal.value
}

onMounted(() => {
  setInterval(autoMine, 3000)
})

function mine() {
  cheeseService.mine(clickUpgradeTotal.value)
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
            <p class="fs-2 fw-bold text-light text-shadow">Cheese: {{ cheese }}</p>
          </div>
        </div>
      </div>
    </section>
    <section class="container">
      <div class="row bg-dark bg-opacity-50 shadow text-light fw-bold p-3 rounded-4">
        <div class="col-6">
          <div v-for="upgrade in clickUpgrades" :key="upgrade.id" class="fs-3 mb-2 d-flex justify-content-between">
            <div>
              <button @click="buyClickUpgrade(upgrade)" class="btn btn-outline-light rounded-pill fs-3" type="button"
                      :title="'Buy ' + upgrade.name" :disabled="cheese < upgrade.price">
                <span class="mdi mdi-cheese">{{ upgrade.price }}</span>
              </button>
              <span class="">+{{ upgrade.multiplier }} per click</span>
            </div>
            <div class="d-block">
              <span class="me-1" title="Number owned"> {{ upgrade.quantity + upgrade.emoji }}>></span>
              <span class="ms-1" title="Total amount per click">{{ upgrade.multiplier * upgrade.quantity }}</span>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div v-for="upgrade in autoUpgrades" :key="upgrade.id" class="fs-3 mb-2 d-flex justify-content-between">
            <div>
              <button @click="buyAutoUpgrade(upgrade)" class="btn btn-outline-light rounded-pill fs-3" type="button"
                      :title="'Buy ' + upgrade.name" :disabled="cheese < upgrade.price">
                <span class="mdi mdi-cheese">{{ upgrade.price }}</span>
              </button>
              <span class="ms-1" title="Amount a single instance adds">+{{ upgrade.multiplier }} </span>
            </div>
            <div class="d-block">
              <span class="me-1" title="Number owned"> {{ upgrade.quantity + upgrade.emoji }}>></span>
              <span class="me-1" title="Total amount added every 3 seconds"> {{ upgrade.quantity * upgrade.multiplier }} / 3s</span>
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
  filter: hue-rotate(30deg);
  opacity: 90%;
}

.text-shadow {
  text-shadow: 2px 2px 5px #000;
}

</style>
