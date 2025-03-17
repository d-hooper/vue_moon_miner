import { AppState } from "@/AppState.js"

class CheeseService {
  mine() {
    AppState.cheese++
    // cheese += amount
    // eslint-disable-next-line no-console
    console.log('increase cheese');
  }
}

export const cheeseService = new CheeseService()