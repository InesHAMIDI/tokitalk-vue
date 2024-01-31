import {defineStore} from 'pinia';
import {languages, LanguageType, stringToLanguageType} from "../assets/languages.ts";

export  function stringToSpeechSynthesisVoice(voiceURI: string): SpeechSynthesisVoice {
    let voice: SpeechSynthesisVoice | undefined = speechSynthesis.getVoices().find((voice: SpeechSynthesisVoice) => voice.voiceURI === voiceURI);
    if (voice === undefined)
        voice = speechSynthesis.getVoices()[1];
    return voice;
}

export const useSettingsStore = defineStore('setting', {
    state: () => ({
        voice: speechSynthesis.getVoices()[1], //the voice selected
        lang: languages[0], //the language selected
        rate: 1, //float between [0.1 ; 10]
        pitch: 1, //float between [0 ; 2]
        volume: 0 //float between [0 ; 1]
    }),
    actions: {
        setVoice(voice: SpeechSynthesisVoice) {
            this.voice = voice;
            localStorage.setItem("voice", this.voice.toString());
        },
        getVoice(): SpeechSynthesisVoice {
            const voice: string | null = localStorage.getItem("voice");
            if (!voice) return speechSynthesis.getVoices()[1];
            this.voice = stringToSpeechSynthesisVoice(voice);
            return this.voice;
        },

        setLang(lang: LanguageType) {
            this.lang = lang;
            localStorage.setItem("lang", this.lang.toString());
        },
        getLang(): LanguageType {
            const langCode: string | null = localStorage.getItem("lang");
            if (!langCode) return languages[0];
            this.lang = stringToLanguageType(langCode);
            return this.lang;
        },

        setRate(rate: number) {
            this.rate = rate;
            localStorage.setItem("rate", this.rate.toString());
        },
        getRate(): number {
            const rate: string | null = localStorage.getItem("rate");
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
            const pitch: string | null = localStorage.getItem("pitch");
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
            const volume: string | null = localStorage.getItem("volume");
            if (volume) {
                this.volume = +volume;
            }
            return this.volume;
        }
    },
});