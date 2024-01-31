import { defineStore } from 'pinia';
export const keybindStore = defineStore('text', {
    state: () => ({
        keys: [] as string[],
    }),
    actions: {
        getKeys(): string[] {
            return this.keys;
        },
        editKey(index: number, newText: string) {
            this.keys[index] = newText;
        },
    },
});