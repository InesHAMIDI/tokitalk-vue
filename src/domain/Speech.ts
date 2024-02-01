import {Settings} from "./Settings.ts";

export class Speech {
    private _synth: SpeechSynthesis;
    private _message: SpeechSynthesisUtterance;
    private _voices: SpeechSynthesisVoice[] = [];
    private _settings: Settings

    public constructor(settings: Settings) {
        this._settings = settings;
        this._synth = window.speechSynthesis;
        this._message = new SpeechSynthesisUtterance();
        this.updateSettings();
        this.updateVoices();
    }

    setText(text: string) {
        this._message.text = text;
    }

    startReading(text: string) {
        this.setText(text);
        this._synth.speak(this._message);
    }

    pause() {
        this._synth.pause();
    }

    resume() {
        this._synth.resume();
    }

    stop() {
        this._synth.cancel();
    }

    updateVoices(): SpeechSynthesisVoice[] {
        this._voices = this._synth.getVoices();
        return this._voices
    }

    updateSettings() {
        this._message.lang = this._settings.lang ? this._settings.lang.code : "en-US";
        this._message.rate = this._settings.rate ? this._settings.rate : 1;
        this._message.pitch = this._settings.pitch ? this._settings.pitch : 1;
        this._message.voice = this._settings.voice ? this._settings.voice : this._synth.getVoices()[1];
        this._message.volume = this._settings.volume ? this._settings.volume : 0;
    }
}

