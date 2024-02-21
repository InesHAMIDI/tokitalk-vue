import {languageType, LanguageType, stringToLanguageType} from "../domain/LanguageType.ts";
import {Settings} from "../domain/Settings.ts";

export class SettingsRepository{
    getPitch(): string | null {
        return localStorage.getItem("pitch");
    }


    getVoice(): string | null {
        return localStorage.getItem("voice");
    }


    getLang(): string | null {
        return localStorage.getItem("lang");
    }


    getRate(): string | null {
        return localStorage.getItem("rate");
    }


    getVolume(): string | null {
        return localStorage.getItem("volume");
    }

    saveVoice(value: SpeechSynthesisVoice) {
        localStorage.setItem("voice", value.toString());
    }

    saveLang(value: LanguageType) {
        localStorage.setItem("lang", value.toString());

    }

    saveRate(value: number) {
        localStorage.setItem("rate", value.toString());
    }

    savePitch(value: number) {
        localStorage.setItem("pitch", value.toString());
    }

    saveVolume(value: number) {
        localStorage.setItem("volume", value.toString());
    }

    // saveSettings(settings:Settings): void{
    //     this.saveLang(settings.lang);
    //     this.saveRate(settings.lang);
    //     this.savePitch(settings.lang);
    //     this.saveVoice(settings.lang);
    //     this.saveVolume(settings.lang);
    // }
    //
    // getSettings(): Settings{
    //     let settings: Settings = new Settings();
    //     settings.lang = this.getLang();
    //     settings.pitch = this.getPitch();
    //     settings.rate = this.getRate();
    //     settings.voice = this.getVoice();
    //     settings.volume = this.getVolume()
    // }

}