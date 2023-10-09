export default function required(message: string = "To pole jest wymagane")
: PropertyDecorator
{
return (target: object, name: string | symbol) => {
Object.defineProperty(target, name, {
get: function () { return this['__${name.toString()}']; },
set: function (value?: string) {
if (value === null || value === undefined || value.length
=== 0)
throw new Error(message);
this['__${name.toString()}'] = value;
}
})
}
}