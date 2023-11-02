import { defineStore } from 'pinia'

export const buttonsStore = defineStore('button', {
  state: () => ({
    buttonText: "bonjour"
  }),
  getters: {
    getText(){
      return (state) => state.buttonText
    }
  },
  actions: {

  },
})

export const ParamsStore = defineStore('param', {
  state: () => ({
    volume: 1.0,
    rate: 5.0,
    pitch: 1,
    lang: "fr-FR",
    voice: 1
  }),
  getters: {
    getVolume(){ return (state) => state.volume},
    getRate(){ return (state) => state.rate },
    getPitch(){ return (state) => state.pitch },
    getLang(){ return (state) => state.lang },
    getVoice(){ return (state) => state.voice },
  },
  actions: {
    setVolume(vol){
      if(vol > 1.0 || vol < 0.0){ throw new Error("volume impossible") }
      else { this.volume = vol }
    },

    setRate(r){
      if(r < 0.1 || r > 10.0){ throw new Error("rate impossible") }
      else { this.rate = r }
    },

    setPitch(p){
      if(p < 0.0 || p > 2.0){ throw new Error("pitch impossible") }
      else { this.pitch = p }
    },
    persist: true,
  },
})