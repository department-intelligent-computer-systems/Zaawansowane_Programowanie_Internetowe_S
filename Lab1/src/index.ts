function hello() {
    console.log("Witaj w swiecie Typescript.")
}

hello();

function required(target: object, name: string) {
    Object.defineProperty(target, name, {
    get: function () { return this["__${name}"]; },
    set: function (value?: string) {
    if (value === null || value === undefined || value.length === 0)
    throw new Error("${name} nie może być puste");
    this["__${name}"] = value;
    }
    })
    }


function requiredmail(target: object, email: string) {
        Object.defineProperty(target, email, {
        get: function () { return this["__${email}"]; },
        set: function (value?: string) {
        if (value === null || value === undefined || value.length === 0)
        throw new Error("${email} nie może być puste");
        this["__${email}"] = value;
        }
        })
        }
