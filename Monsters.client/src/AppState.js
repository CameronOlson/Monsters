import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  profile: {},
  profiles: [],
  monsters: [],
  monster: {},
  nextPage: null,
  previousPage: null,
  spells: [],
  userMonsters: [],
  userMonster: {},
  token: {},
  tokens: [],
  encounters: [],
  encounter: {},
  maps: [],
  map: {},
  dice: [],
  diceTotal: {},
  tempToken: {},
  encounterMonsters: []

})
