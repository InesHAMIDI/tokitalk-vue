import {defineStore} from 'pinia';

export const useSettingsStore = defineStore('setting', {
    state: () => ({
        settings: [],
    }),
    actions: {
        adduserButtons(text) {
            this.userButtons.push(text);
        },
        getuserButtons() {
            return this.userButtons;
        },
        edituserButtons(index, newText) {
            this.userButtons[index] = newText;
        },
    },
});