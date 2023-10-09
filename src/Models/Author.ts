class Author {
    private _id: number;
    @required("To pole jest wymagane") private _firstname: string;
    @required("To pole jest wymagane") private _lastname: string;
    @validate private _email: string;
    private static static_objectCounter: number = 0;
  
    constructor(id: number, firstname: string, lastname: string, email: string) {
      this._id = id;
      this._firstname = firstname;
      this._lastname = lastname;
      this._email = email;
      Author.static_objectCounter++;
    }

    get id():number { return this._id;}

    get firstname():string { return this._firstname;}
    set firstname(value:string) { this._firstname = value; }

    get lastname():string { return this._lastname;}
    set lastname(value:string) { this._lastname = value; }

    get email():string { return this._email;}
    set email(value:string) { this._email = value; }
}


function required(message: string = "To pole jest wymagane") : PropertyDecorator {
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