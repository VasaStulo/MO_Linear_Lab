import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {

  state: () => ({
  countVariables: 0,
    countConfines: 0
  }),
  getters: {
    getCountVariables: (state) => state.countVariables,
    getCountConfines: (state) => state.countConfines,
  },
  actions: {
    // setCountVariables(c:number){
    //   this.countVariables = c
    // }
  },
});
