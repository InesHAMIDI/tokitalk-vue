import {languageType, LanguageType} from "./LanguageType.ts";
import {useSettingsStore} from "../stores/settingsStore.ts";

export class Settings {
    private _store = useSettingsStore();

    public constructor() {
        this._lang = this._store.getLang() ? this._store.getLang() : languageType[0];
        this._voice = this._store.getVoice() ? this._store.getVoice() : speechSynthesis.getVoices()[1];
        this._rate = this._store.getRate() ? this._store.getRate() : 1; //float between [0.1 ; 10]
        this._pitch = this._store.getPitch() ? this._store.getPitch() : 1; //float between [0 ; 2]
        this._volume = this._store.getVolume() ? this._store.getVolume() : 1; //float between [0 ; 1]
    }

    private _pitch: number;

    get pitch(): number {
        return this._pitch;
    }

    private _voice: SpeechSynthesisVoice;

    get voice(): SpeechSynthesisVoice {
        return this._voice;
    }

    private _lang: LanguageType;

    get lang(): LanguageType {
        return this._lang;
    }

    private _rate: number;

    get rate(): number {
        return this._rate;
    }

    private _volume: number;

    get volume(): number {
        return this._volume;
    }

    setVoice(value: SpeechSynthesisVoice) {
        this._voice = value;
        this._store.setVoice(value);
    }

    setLang(value: LanguageType) {
        this._lang = value;
    }

    setRate(value: number) {
        this._rate = value;
        this._store.setRate(value);
    }

    setPitch(value: number) {
        this._pitch = value;
        this._store.setPitch(value);
    }

    setVolume(value: number) {
        this._volume = value;
        this._store.setVolume(value);
    }
}