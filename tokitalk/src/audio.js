export function initSpeech(){
    var speech = new SpeechSynthesisUtterance();
    //var voices = window.speechSynthesis.getVoices();
    speech.voice = localStorage.getItem("voice"); 
    speech.volume = localStorage.getItem("volume"); // From 0 to 1
    speech.rate = localStorage.getItem("rate"); // From 0.1 to 10
    speech.pitch = localStorage.getItem("pitch"); // From 0 to 2
    speech.lang = localStorage.getItem("language");
    return speech;
}

export function readText(text, speech){
    if(text == "" || typeof text !== 'string'){
        return;
    }
    speech.text = text;
    window.speechSynthesis.speak(speech);
}

export function pause(speech){
    speech.pause();
}

export function stop(speech){
    speech.stop();
}