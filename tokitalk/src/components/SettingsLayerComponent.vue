<template>
    <div class="settings">
        <div class="volume settings">
            <p v-if="this.volume == 0"><i class="fa-solid fa-volume-off"></i></p>
            <p v-if="this.volume <= 0.50 && this.volume > 0"><i class="fa-solid fa-volume-low"></i></p>
            <p v-if="this.volume >= 0.75"><i class="fa-solid fa-volume-high"></i></p>

            <!-- <div class="volume-bar" role="progressbar" aria-valuenow={{ this.volumeDisplay }} aria-valuemin="0"
                aria-valuemax="100">
                {{ this.volumeDisplay }}%

                //USE ONSCROLL EVENT
            </div> -->
        </div>

        <div class="pitch">

        </div>
    </div>
</template>
<script>

export default {
    setup() {
        //this.volume = localStorage.getItem('volume')
    },
    data() {
        return {
            volume: 0.4,
        }
    },
    methods: {

    },
    computed:{
        volumeDisplay: {
            get(){
                var vol = this.volume * 100;
                console.log(vol.toString())
                return vol.toString();            
            }
        }
    }
}
</script>
<style scoped></style>