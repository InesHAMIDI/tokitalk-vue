import {defineStore} from 'pinia';
import { createPinia } from 'pinia';

export const pinia = createPinia();
export const useButtonStore = defineStore('button', {
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
