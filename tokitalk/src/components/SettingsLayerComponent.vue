<template>
    <div class="settings">
        <div class="volume-settings">
            <p v-if="this.volume == 0"><i class="fa-solid fa-volume-off"></i></p>
            <p v-if="this.volume <= 0.50 && this.volume > 0"><i class="fa-solid fa-volume-low"></i></p>
            <p v-if="this.volume >= 0.75"><i class="fa-solid fa-volume-high"></i></p>

            <div id="volume-bar" class="progress-bar" role="progressbar" v-bind:aria-valuenow="volumeDisplay" aria-valuemin="0"
                aria-valuemax="100">
                {{ this.volumeDisplay }} %
            </div>
        </div>

        <div class="pitch">
            <div id="pitch-bar" class="progress-bar" role="progressbar" aria-valuenow="40" aria-valuemin="0"
                aria-valuemax="100">
                {{ this.pitchDisplay }} %
            </div>
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

        }
    },
    computed: {
        volume(){
            return localStorage.getItem('volume');
        },

        volumeDisplay() {
            return "100";
        }, 
        
        pitchDisplay(){
            return "50";
        }
    }
}
</script>
<style scoped></style>