export class Buttons {
    public constructor() {
        this._buttons = [];
    }

    private _buttons: string[];

    addButton(text: string) {
        this._buttons.push(text)
        localStorage.setItem("buttons", this._buttons.toString());
    }

    getButtons(): string[] {
        const bts = localStorage.getItem("buttons");
        if (bts) {
            this._buttons = bts?.split(",");
        }
        return this._buttons;
    }

    removeButton(index: number) {
        if (index == 0) {
            this._buttons.shift();
        } else {
            this._buttons.splice(index, 1);
        }
        localStorage.setItem("buttons", this._buttons.toString());
    }
}