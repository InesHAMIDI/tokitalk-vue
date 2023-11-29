import {defineStore} from 'pinia';

export const useButtonStore = defineStore('button', {
    state: () => ({
        buttons: [],
    }),
    actions: {
        addButton(text) {
            this.buttons.push(text);
        },
        getButtons() {
            return this.buttons;
        },
        editButton(index, newText) {
            this.buttons[index] = newText;
        },
    },
});

// export const useSettingsStore = defineStore('setting', {
//     state: () => ({
//         settings: [],
//     }),
//     actions: {
//         adduserButtons(text) {
//             this.userButtons.push(text);
//         },
//         getuserButtons() {
//             return this.userButtons;
//         },
//         edituserButtons(index, newText) {
//             this.userButtons[index] = newText;
//         },
//     },
// });