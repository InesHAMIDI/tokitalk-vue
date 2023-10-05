<template>
    <div class="text-area">
        <textarea v-model="text" id="TextArea" maxlength="100" placeholder="Welcome ! Bienvenue !"></textarea>
        <button id="b-valider" @click="validateText()">
            <i class="fa-solid fa-check"></i>
        </button>
        <!--:on-keypress="onPressEnter"-->
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
            console.log(this.text)
            var speech = initSpeech();
            readText(this.text, speech);
            this.text = "";
        }
    }
}
</script>
<style scoped>
.text-area{
    background-color: antiquewhite;
}
.fa, .fas, .fa-solid, .fa-regular {
  color: #717171;
  size: 20px;
}

</style>