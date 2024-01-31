import {defineStore} from 'pinia';

export const useButtonStore = defineStore('button', {
    state: () => ({
        buttons: [] as string[],
    }),
    actions: {
        addButton(text: string) {
            this.buttons.push(text)
            localStorage.setItem("buttons", this.buttons.toString());
        },
        getButtons(): string[] {
            var bts = localStorage.getItem("buttons");
            if(bts) {
                this.buttons = bts?.split(",");
            }
            return this.buttons;
        },
        removeButton(index: number) {
            delete this.buttons[index];
            localStorage.setItem("buttons", this.buttons.toString());
        }
    },
});
