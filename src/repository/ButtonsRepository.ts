import {Buttons} from "../domain/Buttons";

export class ButtonsRepository{
    saveButtons(button: Buttons) {
        localStorage.setItem("buttons", button.getButtons().toString());
    }

    getButtons():  string {
       return localStorage.getItem("buttons");
    }
}