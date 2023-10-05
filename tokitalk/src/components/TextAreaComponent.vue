<template>
    <div class="text-area">
        <textarea v-model="text" maxlength="100" placeholder="Welcome ! Bienvenue !"></textarea>

        <button type="button" class="btn btn-outline-primary" @click="validateText()">
            <i class="fa-solid fa-check"></i>
        </button>

        <!--:on-keypress="onPressEnter"-->
    </div>
</template>
<script>
import readText from '@/audio';
import { inject } from 'vue';

export default {
    setup() {
        this.speech = inject('speech');
    },
    data(){
        return {
            text: "",
        }
    },
    methods: {
        validateText(){
            console.log(this.text)
            readText(this.text, this.speech);
            this.text = "";
        }
    }
}
</script>
<style scoped>
.text-area{
    background-color: antiquewhite;
}


</style>