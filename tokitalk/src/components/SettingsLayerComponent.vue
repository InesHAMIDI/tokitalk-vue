<template>
    <div class="settings">
        <div volume settings>
            <p v-if="this.volume == 0"><i class="fa-solid fa-volume-off"></i></p>
            <p v-if="this.volume <= 0.75"><i class="fa-solid fa-volume-low"></i></p>
            <p v-if="this.volume >= 0.75"><i class="fa-solid fa-volume-high"></i></p>

            <div class="volume-bar" role="progressbar" aria-valuenow={{ this.volume * 100 }} 
                                                       aria-valuemin="0" 
                                                       aria-valuemax="100">{{ this.volume * 100 }}%</div>
        </div>
    </div>
</template>
<script>

export default {
    setup() {
        this.volume = localStorage.getItem('volume')
    },
    data(){
        return {
            volume: 0,
        }
    },
    methods: {
        
    }
}
</script>
<style scoped>

</style>