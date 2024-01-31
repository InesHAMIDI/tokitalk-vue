
import { defineStore } from 'pinia';
export const buttonStore = defineStore('text', {
    state: () => ({
        buttons: [] as string[]
    }),
    actions: {
        addButton(text: string) {
            this.buttons.push(text);
        },
        getButtons(): string[] {
            return this.buttons;
        },
        editButton(index: number, newText: string) {
            this.buttons[index] = newText;
        },
    },
});