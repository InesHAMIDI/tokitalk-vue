import {languageType, LanguageType, stringToLanguageType} from "./LanguageType.ts";

export class Settings {
    public constructor() {
        this._lang = languageType[0];
        this._voice = speechSynthesis.getVoices()[1].name;
        this._rate = 1; //float between [0.1 ; 10]
        this._pitch = 1; //float between [0 ; 2]
        this._volume = 1; //float between [0 ; 1]
    }

    private _voice: string;

    private _pitch: number;

    get voice(): string {
        return this._voice;
    }

    private _lang: LanguageType;
    private _rate: number;
    private _volume: number;

    get pitch(): number {
        return this._pitch;
    }

    set pitch(value: number) {
        this._pitch = value;
    }

    set voice(value: string) {
        this._voice = value;
    }

    public allArgsConstructor(lang: string, voice: string, rate: number, pitch: number, volume: number): this {
        this._lang = stringToLanguageType(lang);
        this._voice = voice;
        this._rate = rate;
        this._pitch = pitch;
        this._volume = volume;
        return this;
    }

    get lang(): LanguageType {
        return this._lang;
    }

    set lang(value: LanguageType) {
        this._lang = value;
    }

    get rate(): number {
        return this._rate;
    }

    set rate(value: number) {
        this._rate = value;
    }

    get volume(): number {
        return this._volume;
    }

    set volume(value: number) {
        this._volume = value;
    }
}