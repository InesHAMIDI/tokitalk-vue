import {pinia} from "./store.ts";

export const buttonStore = pinia?.defineStore('text', {
    state: () => ({
        settings: [],
    }),
    actions: {
        getSettings() {
            return this.settings;
        },
        editSetting(index, newText) {
            this.settings[index] = newText;
        },
    },
});