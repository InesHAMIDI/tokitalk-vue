import {useSettingsStore} from "../stores/settingsStore.ts";

export function initSynth(){
    return window.speechSynthesis;
}

export function initSpeech(){
    let synth = initSynth();
    const settingsStore = useSettingsStore();
    let message = new SpeechSynthesisUtterance();
    message.lang = settingsStore.getLang() ? settingsStore.getLang().code : "en";
    message.rate = settingsStore.getRate() ? settingsStore.getRate() : 1;
    message.pitch = settingsStore.getPitch() ? settingsStore.getPitch() : 1;
    message.voice = settingsStore.getVoice() ? settingsStore.getVoice() : synth.getVoices()[1];
    message.volume = settingsStore.getVolume() ? settingsStore.getVolume() : 0;
    return message;
}

export function setText(text: string){
    const message: SpeechSynthesisUtterance = initSpeech();
    message.text = text;
}

export function startReading(text: string){
    const message: SpeechSynthesisUtterance = initSpeech();
    setText(text);
    speechSynthesis.speak(message);
}

export function pause(){
    speechSynthesis.pause();
}

export function resume(){
    speechSynthesis.resume();
}

export function stop(){
    speechSynthesis.cancel();
}

