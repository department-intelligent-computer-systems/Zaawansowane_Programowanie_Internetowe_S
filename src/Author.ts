import required from "./required";

class Author{
    private _id: number;
    @required
    private _firstname: string;
    @required
    private _lastname: string;
    private _email: string;
    private static _objectCounter: number
}

