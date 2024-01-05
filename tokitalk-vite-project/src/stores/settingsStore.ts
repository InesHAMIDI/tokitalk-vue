import {defineStore} from 'pinia';

export const useSettingsStore = defineStore('setting', {
    state: () => ({
        voiceIndex: 0, //the index of the voice in the voices array
        langIndex: 0, //the index of the lang in the lang array
        rate: 1, //float between [0.1 ; 10]
        pitch: 1, //float between [0 ; 2]
        volume: 0 //float between [0 ; 1]
    }),
    actions: {

    },
});