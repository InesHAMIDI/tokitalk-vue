import {SettingsRepository} from "../repository/SettingsRepository.ts";
import {Settings} from "../domain/Settings.ts";
import {NoSettingsException} from "../exception/NoSettingsException.ts";

export class SettingsService{

    private settingsRepository: SettingsRepository;
    constructor(settingsRepository: SettingsRepository) {
        this.settingsRepository = settingsRepository;
    }
    getSettings(): Settings {
        let settings: Settings = this.settingsRepository.getSettings();
        if(settings == null ){
            throw new NoSettingsException("NO SETTINGS FOUND", "No settings were found.");
        }
        return settings;
    }

    stringToSpeechSynthesisVoice(voiceURI: string): SpeechSynthesisVoice {
        let voice: SpeechSynthesisVoice | undefined = speechSynthesis.getVoices()
            .find((voice: SpeechSynthesisVoice) => voice.voiceURI === voiceURI);
        if (voice === undefined)
            voice = speechSynthesis.getVoices()[1];
        return voice;
    }


}