import { defineStore } from 'pinia';

export const buttonStore = defineStore('text', {
    state: () => ({
        settings: [] as string[],
    }),
    actions: {
        getSettings(): string[] {
            return this.settings;
        },
        editSetting(index: number, newText: string) {
            this.settings[index] = newText;
        },
    },
});