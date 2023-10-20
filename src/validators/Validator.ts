export function validate<T>(
  conditions: { validator: (param: T) => boolean; message: string }[]
): PropertyDecorator {
  return function (target: object, name: string | symbol) {
    Object.defineProperty(target, name, {
      get: function () {
        return this["__${name.toString()}"];
      },
      set: function (value: T) {
        for (let condition of conditions) {
          if (!condition.validator(value)) throw new Error(condition.message);
        }
        this["__${name.toString()}"] = value;
      },
    });
  };
}
