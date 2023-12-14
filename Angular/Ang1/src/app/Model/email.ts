export class Email {

    public get value(): string {
        return this._value;
        }
        private _value: string;
        constructor(value: string) {
        if (this.checkEmail(value))
        this._value = value;
        else
        throw new Error("Adres email nie ma właściwego formatu");
        }

        private checkEmail(text: string): boolean {
        let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]*)?)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(text);
        }
}
