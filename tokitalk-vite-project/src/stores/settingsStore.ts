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
        setVoiceInd(index: number) {
            this.voiceIndex = index;
            localStorage.setItem("voiceIndex", this.voiceIndex.toString());
        },
        getVoiceIndex(): number {
            var voiceInd = localStorage.getItem("voiceIndex");
            if (voiceInd) {
                this.voiceIndex = +voiceInd;
            }
            return this.voiceIndex;
        },

        setLangIndex(index: number) {
            this.langIndex = index;
            localStorage.setItem("langIndex", this.langIndex.toString());
        },
        getLangIndex(): number {
            var langInd = localStorage.getItem("langIndex");
            if (langInd) {
                this.langIndex = +langInd;
            }
            return this.langIndex;
        },

        setRate(rate: number) {
            this.rate = rate;
            localStorage.setItem("rate", this.rate.toString());
        },
        getRate(): number {
            var rate = localStorage.getItem("rate");
            if (rate) {
                this.rate = +rate;
            }
            return this.rate;
        },

        setPitch(pitch: number) {
            this.pitch = pitch;
            localStorage.setItem("pitch", this.pitch.toString());
        },
        getPitch(): number {
            var pitch = localStorage.getItem("pitch");
            if (pitch) {
                this.pitch = +pitch;
            }
            return this.pitch;
        },

        setVolume(volume: number) {
            this.volume = volume;
            localStorage.setItem("volume", this.volume.toString());
        },
        getVolume(): number {
            var volume = localStorage.getItem("volume");
            if (volume) {
                this.volume = +volume;
            }
            return this.volume;
        }
    },
});