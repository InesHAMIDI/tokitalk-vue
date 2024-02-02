import {languageType, LanguageType, stringToLanguageType} from "./LanguageType.ts";

export class Settings {
    public constructor() {
        this._lang = languageType[0];
        this._voice = speechSynthesis.getVoices()[1];
        this._rate = 1; //float between [0.1 ; 10]
        this._pitch = 1; //float between [0 ; 2]
        this._volume = 1; //float between [0 ; 1]
    }

    private _pitch: number;

    get pitch(): number {
        const pitch: string | null = localStorage.getItem("pitch");
        if (pitch) {
            this._pitch = +pitch;
        }
        return this._pitch;
    }

    private _voice: SpeechSynthesisVoice;

    get voice(): SpeechSynthesisVoice {
        const voice: string | null = localStorage.getItem("voice");
        if (!voice) return speechSynthesis.getVoices()[1];
        this._voice = this.stringToSpeechSynthesisVoice(voice);
        return this._voice;
    }

    private _lang: LanguageType;

    get lang(): LanguageType {
        const langCode: string | null = localStorage.getItem("lang");
        if (!langCode) return languageType[0];
        this._lang = stringToLanguageType(langCode);
        return this._lang;
    }

    private _rate: number;

    get rate(): number {
        const rate: string | null = localStorage.getItem("rate");
        if (rate) {
            this._rate = +rate;
        }
        return this._rate;
    }

    private _volume: number;

    get volume(): number {
        const volume: string | null = localStorage.getItem("volume");
        if (volume) {
            this._volume = +volume;
        }
        return this._volume;
    }

    setVoice(value: SpeechSynthesisVoice) {
        this._voice = value;
        localStorage.setItem("voice", this.voice.toString());
    }

    setLang(value: LanguageType) {
        this._lang = value;
        localStorage.setItem("lang", this._lang.toString());

    }

    setRate(value: number) {
        this._rate = value;
        localStorage.setItem("rate", this._rate.toString());
    }

    setPitch(value: number) {
        this._pitch = value;
        localStorage.setItem("pitch", this.pitch.toString());
    }

    setVolume(value: number) {
        this._volume = value;
        localStorage.setItem("volume", this._volume.toString());
    }

    stringToSpeechSynthesisVoice(voiceURI: string): SpeechSynthesisVoice {
        let voice: SpeechSynthesisVoice | undefined = speechSynthesis.getVoices()
            .find((voice: SpeechSynthesisVoice) => voice.voiceURI === voiceURI);
        if (voice === undefined)
            voice = speechSynthesis.getVoices()[1];
        return voice;
    }
}