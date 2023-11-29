import {pinia} from "./store.ts";

export const buttonStore = pinia?.defineStore('text', {
    state: () => ({
        buttons: [],
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