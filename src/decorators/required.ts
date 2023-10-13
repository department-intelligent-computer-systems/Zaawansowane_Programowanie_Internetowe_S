export function required(target: object, name: string) {
    Object.defineProperty(target, name, {
    get: function () { return this['__${name}']; },
    set: function (value?: string) {
    if (value === null || value === undefined || value.length === 0)
    throw new Error('${name} nie może być puste');
    this['__${name}'] = value;
    }
    })
    }
    