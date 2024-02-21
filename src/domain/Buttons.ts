export class Buttons {
    get buttons(): string[] {
        return this._buttons;
    }

    set buttons(value: string[]) {
        this._buttons = value;
    }
    public constructor() {
        this._buttons = [];
    }

    private _buttons: string[];
}