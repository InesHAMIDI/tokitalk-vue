export function initSpeech(speech){
    
    if (localStorage.getItem("voice") == null)
        speech.voice = window.speechSynthesis.getVoices()[1];
    else 
    speech.voice = localStorage.getItem("voice");
    
    if(localStorage.getItem("volume") == null)
        speech.volume = 1;
    else
        speech.volume = localStorage.getItem("volume"); // From 0 to 1

    if(localStorage.getItem("rate") == null)
    speech.rate = 5;
    else
        speech.rate = localStorage.getItem("rate"); // From 0.1 to 10

    if(localStorage.getItem("pitch") == null)
        speech.pitch = 1;
    else
        speech.pitch = localStorage.getItem("pitch"); // From 0 to 2

    if(localStorage.getItem("language") == null)
        speech.lang = "en-US"
    else
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