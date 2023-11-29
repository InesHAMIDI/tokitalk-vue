import {pinia} from "./store.ts";

export const keybindStore = pinia?.defineStore('text', {
    state: () => ({
        keys: [],
    }),
    actions: {
        getKeys() {
            return this.keys();
        },
        editKey(index, newText) {
            this.keys[index] = newText;
        },
    },
});