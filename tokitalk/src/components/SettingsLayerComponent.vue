<template>
    <div class="settings">
        <div class="volume-settings">
            <p v-if="this.volume == 0"><i class="fa-solid fa-volume-off"></i></p>
            <p v-if="this.volume <= 0.50 && this.volume > 0"><i class="fa-solid fa-volume-low"></i></p>
            <p v-if="this.volume >= 0.75"><i class="fa-solid fa-volume-high"></i></p>

            <div id="volume-bar" class="progress-bar" role="progressbar" v-bind:aria-valuenow="volumeDisplay"
                aria-valuemin="0" aria-valuemax="100">
                {{ this.volumeDisplay }} %
            </div>
        </div>

        <div class="pitch">
            <i class="fa-solid fa-microphone"></i>
            <div id="pitch-bar" class="progress-bar" role="progressbar" v-bind:aria-valuenow="pitchDisplay"
                aria-valuemin="0" aria-valuemax="100">
                {{ this.pitchDisplay }} %
            </div>
        </div>

        <div class="voices">
            <p v-for="v in this.voices" :key="v">{{ v.name }}</p>
            <p> NIQUE TOI BOOTSTRAP</p>
        </div>


    </div>
</template>
<script>
     

export default {
    setup() {

    },
    data() {
        return {
        }
    },
    methods: {
        changeVolume() {

        },

        selectVoice(v) {
            localStorage.setItem('voiceIndex', v);
        }
    },
    computed: {
        volume() {
            return localStorage.getItem('volume');
        },

        pitch() {
            return localStorage.getItem('pitch');
        },

        voices() {
            console.log(window.speechSynthesis.getVoices())
            return window.speechSynthesis.getVoices();
        },

        voice() {
            return localStorage.getItem('voiceIndex');
        },

        volumeDisplay() {
            let vol = this.volume * 100;
            return vol.toString();
        },

        pitchDisplay() {
            let p = this.pitch * 100;
            return p.toString();
        }
    }
}
</script>
<style scoped>
@import "../../public/cssVariables.css";

.progress-bar {
    height: 40px;
    background-color: var(--buttons-normal);
    margin-bottom: 10px;
    width: 200px;
}
</style>