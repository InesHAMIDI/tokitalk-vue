import {languageType, LanguageType, stringToLanguageType} from "../domain/LanguageType.ts";
import {SettingsRepository} from "../repository/SettingsRepository.ts";

export class SettingsService{

    private settingsRepository: SettingsRepository;
    constructor(settingsRepository: SettingsRepository) {
        this.settingsRepository = settingsRepository;
    }
    getPitch(): number {
        const pitchString: string | null = this.settingsRepository.getPitch();
        if (!pitchString) {
            return 1;
        }
        return +pitchString;
    }


    get voice(): SpeechSynthesisVoice {
        const voiceString: string | null = this.settingsRepository.getVoice();
        if (!voiceString) return speechSynthesis.getVoices()[1];
        return this.stringToSpeechSynthesisVoice(voiceString);}


    getLang(): LanguageType {
        const langCode: string | null = this.settingsRepository.getLang();
        if (!langCode) return languageType[0];
        return stringToLanguageType(langCode);
    }


    getRate(): number {
        const rate: string | null = this.settingsRepository.getRate();
        if (!rate) {
            return 1;
        }
        return +rate;
    }


    getVolume(): number {
        const volume: string | null = this.settingsRepository.getVolume();
        if (!volume) {
            return 1;
        }
        return +volume;
    }

    setVoice(value: SpeechSynthesisVoice): void {
        this.settingsRepository.saveVoice(value);
    }

    setLang(value: LanguageType): void {
        this.settingsRepository.saveLang(value);
    }

    setRate(value: number): void {
        this.settingsRepository.saveRate(value)
    }

    setPitch(value: number): void {
        this.settingsRepository.savePitch(value);
    }

    setVolume(value: number): void {
        this.settingsRepository.saveVolume(value);
    }


    stringToSpeechSynthesisVoice(voiceURI: string): SpeechSynthesisVoice {
        let voice: SpeechSynthesisVoice | undefined = speechSynthesis.getVoices()
            .find((voice: SpeechSynthesisVoice) => voice.voiceURI === voiceURI);
        if (voice === undefined)
            voice = speechSynthesis.getVoices()[1];
        return voice;
    }


}