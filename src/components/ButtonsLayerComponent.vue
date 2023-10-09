<template>
    <div class="layer">
        <div class="buttons-area">
            <div class="perso-buttons">
                <n-button type="primary" v-for="button in this.buttons" :key="button" class="btn btn-primary" 
                    @click="readButton()">
                    {{ button }}
                </n-button>
            </div>

            <n-button type="primary" class="btn btn-primary" @click="createNewButton()">
                <i class="fa-solid fa-plus"></i>
            </n-button>
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
        createNewButton(){

        },

        readButton(){

        }
    },
    computed:{
        buttons(){
            return JSON.parse(localStorage.getItem("buttons"));
        }
    }
}
</script>
<style scoped>
@import "../../public/cssVariables.css";

.buttons-area {
    display: flex;
    flex-direction: column;
    overflow: scroll;
    align-items: center;
}
</style>