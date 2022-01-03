import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  profile: {},
  profiles: [],
  monsters: [],
  nextPage: null,
  previousPage: null,
  spells: [],
  userMonsters: [],
  token: {},
  tokens: [],
  encounters: [],
  maps: [],
  map: {},
  dice: [],
  diceTotal: {}

})
