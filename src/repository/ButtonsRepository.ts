import {Buttons} from "../domain/Buttons";

export class ButtonsRepository {
    saveButtons(button: Buttons) {
        localStorage.setItem("buttons", button.buttons.toString());
    }

    getButtons(): string | null {
        return localStorage.getItem("buttons");
    }
}