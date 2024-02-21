import {ButtonsRepository} from "../repository/ButtonsRepository.ts";
import {Buttons} from "../domain/Buttons.ts";

export class ButtonsService{

    private buttonsRepository: ButtonsRepository
    constructor(buttonRepo: ButtonsRepository ) {
        this.buttonsRepository = buttonRepo;
    }
    addButton(text: string) {
        const buttons: string[] = this.getButtons();
        buttons.push(text);
        const buttonToSave: Buttons = new Buttons();
        buttonToSave.buttons = buttons;
        this.buttonsRepository.saveButtons(buttonToSave);
    }

    getButtons(): string[] {
        const bts: string = this.buttonsRepository.getButtons();
        let buttons: string[] = [];
        if (bts) {
            buttons = bts?.split(",");
        }
        return buttons;
    }

    removeButton(index: number) {
        let buttons: string[] = this.getButtons();
        if (index == 0) {
            buttons.shift();
        } else {
            buttons.splice(index, 1);
        }
        const buttonToSave: Buttons = new Buttons();
        buttonToSave.buttons = buttons;
        this.buttonsRepository.saveButtons(buttonToSave);
    }
}