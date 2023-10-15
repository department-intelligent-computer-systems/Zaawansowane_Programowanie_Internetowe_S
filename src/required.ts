export const required = (message: string = "To pole jest wymagane") : PropertyDecorator => {
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

export const emailValid = (message: string = "Email jest niepoprawny"): PropertyDecorator => {
    return (target: object, name: string | symbol) => {
      Object.defineProperty(target, name, {
        get: function () { return this[`__${name.toString()}`]; },
        set: function (value: string) {
          const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/u;
          if (regex.test(value) == false)
            throw new Error(message);
          this[`__${name.toString()}`] = value;
        }
      });
    };
}

export const currentDate = (message: string = "W momencie tworzenia data powinna być ustalona na aktualną") : PropertyDecorator => {
    return (target: object, name: string | symbol) => {
      Object.defineProperty(target, name, {
        get: function () { return this[`__${name.toString()}`]; },
        set: function (value?: Date) {
          const date = new Date();
          if (value === date)
            throw new Error(message);
            this[`__${name.toString()}`] = value;
        }
      })
    }
}