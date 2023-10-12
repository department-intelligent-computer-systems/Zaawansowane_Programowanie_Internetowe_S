export default function required(target: object, name: string) {
    Object.defineProperty(target, name, {
        get: function () { return this[`__${name.toString()}`]; },
        set: function (value?: string) {
    if (value === null || value === undefined || value.length === 0)
    throw new Error(`${name.toString()} Cannot be empty`);
    this[`__${name.toString()}`] = value;
    }
    })
    }