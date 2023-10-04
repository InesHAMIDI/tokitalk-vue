export function lireText(text){
    if(text == "" || typeof text !== 'string'){
        return;
    }

    var speech = new SpeechSynthesisUtterance();
    var voices = window.speechSynthesis.getVoices();
    speech.voice = voices[10]; 
    speech.volume = 1; // From 0 to 1
    speech.rate = 1; // From 0.1 to 10
    speech.pitch = 0; // From 0 to 2
    speech.lang = 'fr';

    speech.text = text;
    window.speechSynthesis.speak(speech);
}