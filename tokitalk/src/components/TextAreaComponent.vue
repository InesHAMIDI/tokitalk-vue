<template>
    <div class="layer">
        <div class="text-area">
        <textarea class="elements" v-model="text" maxlength="100" placeholder="Welcome ! Bienvenue !"></textarea>

        <button type="button" class="btn btn-primary elements" @click="validateText()">
            <i class="fa-solid fa-check"></i>
        </button>

        <!--:on-keypress="onPressEnter"-->
    </div>
    </div>
</template>
<script>
//import readText from '@/audio';
//import { inject } from 'vue';

export default {
    setup() {
  //      this.speech = inject('globalSpeech');
    },
    data(){
        return {
            text: "",
            //speech: SpeechSynthesisUtterance,
        }
    },
    methods: {
        validateText(){
            console.log(this.text)
            //readText(this.text, this.speech);
            this.text = "";
        }
    }
}
</script>
<style scoped>
@import "../../public/cssVariables.css";

.text-area{
    background-color: var(--layers-background);
    align-items: center;
    display: flex;
    flex-direction: column;
}

.elements{
    margin-top: 20px;
    margin-bottom: 20px;
}


</style>