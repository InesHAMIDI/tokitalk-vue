<template>
    <div>
        <label for="TextArea">Entrez votre texte</label>
        <textarea v-model="text" id="TextArea" maxlength="100" placeholder="Welcome ! Bienvenue !"></textarea>
        <button id="b-valider" @click="validateText()" :on-keypress="onPressEnter">
            <font-awesome-icon :icon="['fas', 'check']" />
        </button>
    </div>
</template>
<script>
import readText from '@/audio';
import initSpeech from '@/audio';

export default {
    data(){
        return {
            text: String,
        }
    },
    methods: {
        validateText(){
            var speech = initSpeech();
            readText(this.text, speech);
            this.text = "";
        }
    }
}
</script>
<style scoped>
</style>