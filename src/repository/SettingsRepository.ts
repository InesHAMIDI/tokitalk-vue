import {Settings} from "../domain/Settings.ts";

export class SettingsRepository {

    isString(value: string | null): value is string {
        return value !== null;
    }

    getSettings(): Settings {

        let lang: string;
        if (this.isString(localStorage.getItem("lang"))) {
            lang = <string>localStorage.getItem("lang");
        } else {
            lang = "";
        }

        let voice: string;
        if (this.isString(localStorage.getItem("voice"))) {
            voice = <string>localStorage.getItem("voice");
        } else {
            voice = "";
        }

        let rate: number;
        if (this.isString(localStorage.getItem("rate"))) {
            rate = parseInt(<string>localStorage.getItem("rate"));
        } else {
            rate = 1;
        }

        let pitch: number;
        if (this.isString(localStorage.getItem("pitch"))) {
            pitch = parseInt(<string>localStorage.getItem("pitch"));
        } else {
            pitch = 1;
        }

        let volume: number;
        if (this.isString(localStorage.getItem("volume"))) {
            volume = parseInt(<string>localStorage.getItem("volume"));
        } else {
            volume = 1;
        }
        
        let settings: Settings = new Settings();

        return settings.allArgsConstructor(
            lang,
            voice,
            rate,
            pitch,
            volume
        );
    }

    setSettings(settings: Settings): void {
        localStorage.setItem("lang", settings.lang.language);
        localStorage.setItem("voice", settings.voice);
        localStorage.setItem("rate", settings.rate.toString());
        localStorage.setItem("pitch", settings.pitch.toString());
        localStorage.setItem("volume", settings.volume.toString());
    }
}