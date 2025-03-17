import { AppState } from "@/AppState.js"
import { Pop } from "@/utils/Pop.js"

class CheeseService {
  mine() {
    AppState.cheese++
  }

  buyClickUpgrade(upgrade) {
    if (AppState.cheese < upgrade.price) {
      Pop.toast("You don't have enough cheese to buy that")
      return
    }
    AppState.cheese -= upgrade.price
    upgrade.quantity++
    upgrade.price = Math.round(upgrade.price * 1.2)
    console.log(upgrade);
  }

  buyAutoUpgrade(upgrade) {
    if (AppState.cheese < upgrade.price) {
      Pop.toast("You don't have enough cheese to buy that")
      return
    }
    AppState.cheese -= upgrade.price
    upgrade.quantity++
    upgrade.price = Math.round(upgrade.price * 1.2)
  }

}

export const cheeseService = new CheeseService()