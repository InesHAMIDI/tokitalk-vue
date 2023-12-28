<template>
    <div class="layer">
        <div class="text-area">
            <n-input type="textarea" size="small" :autosize="{
                minRows: 3,
                maxRows: 5
            }" class="elements" v-model:value="text" maxlength="100" placeholder="Welcome ! Bienvenue !" />

            <n-button type="primary" @click="validateText()"><i class="fa-solid fa-check"></i></n-button>

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
    data() {
        return {
            text: "",
            //speech: SpeechSynthesisUtterance,
        }
    },
    methods: {
        validateText() {
            console.log(this.text)
            //readText(this.text, this.speech);
            this.text = "";
        }
    }
}
</script>
<style scoped>
@import "../../public/cssVariables.scss";
/*
.text-area{
    align-items: center;
    display: flex;
    flex-direction: column;
}

.elements{
    margin-top: 20px;
    margin-bottom: 20px;
}
*/
</style>