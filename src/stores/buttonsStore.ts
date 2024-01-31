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
            const bts = localStorage.getItem("buttons");
            if(bts) {
                this.buttons = bts?.split(",");
            }
            return this.buttons;
        },
        removeButton(index: number) {
            if(index == 0) {
                this.buttons.shift();
            }
            else {
                this.buttons.splice(index, 1);
            }
            localStorage.setItem("buttons", this.buttons.toString());
        }
    },
});
