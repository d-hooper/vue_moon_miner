import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /**@type {import('@bcwdev/auth0provider-client').Identity} */
  identity: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,
  cheese: 0,
  clickUpgrades: [
    {
      id: 1,
      name: 'Centaur',
      price: 5,
      quantity: 0,
      multiplier: 1,
      emoji: '🏇'
    },
    {
      id: 2,
      name: 'Cheese Chariot',
      price: 50,
      quantity: 0,
      multiplier: 5,
      emoji: '🛥️'
    },
  ],
  autoUpgrades: [
    {
      id: 1,
      name: 'Boon from Olympus',
      price: 1000,
      quantity: 0,
      multiplier: 20,
      emoji: '🎁' 
    },
    {
      id: 2,
      name: 'The Hands of Fate',
      price: 10000,
      quantity: 0,
      multiplier: 100,
      emoji: '🤝'
    },

  ]
})

