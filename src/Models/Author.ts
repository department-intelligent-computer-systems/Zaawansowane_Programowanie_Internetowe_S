function required(message: string = "To pole jest wymagane")
    : PropertyDecorator
{
    return (target: object, name: string | symbol) => {
        Object.defineProperty(target, name, {
            get: function () { return this[`__${name.toString()}`]; },
            set: function (value?: string) {
            if (value === null || value === undefined || value.length === 0)
            throw new Error(message);
            this[`__${name.toString()}`] = value;
            }
        })
    }
}

class Author {
    private _id: number;
    @required("wymagane") private _firstname: string;
    @required("wymagane") private _lastname: string;
    @required("wymagane") private _email: string;
    private static static_objectCounter: number = 0;

    constructor(id: number, firstname: string, lastname: string, email: string) {
        this._id = id;
        this._firstname = firstname;
        this._lastname = lastname;
        this._email = email;
        Author.static_objectCounter++;
    }

    public get id(): number {
        return this._id;
    }

    public set id(id: number) {
        this._id = id;
    }

    public get firstname(): string {
        return this._firstname;
    }

    public set firstname(firstname: string) {
        this._firstname = firstname;
    }

    public get lastname(): string {
        return this._lastname;
    }

    public set lastname(lastname: string) {
        this._lastname = lastname;
    }

    public get email(): string {
        return this._email;
    }

    public set email(email: string) {
        this._email = email;
    }

    public static get staticObjectCounter(): number {
        return Author.static_objectCounter;
    }
}
